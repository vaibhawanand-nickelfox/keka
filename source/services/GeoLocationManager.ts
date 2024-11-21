import Geolocation from "@react-native-community/geolocation";
import { Platform } from "react-native";
import {
  isLocationEnabled,
  promptForEnableLocationIfNeeded,
} from "react-native-android-location-enabler";
import { PERMISSIONS, check, request } from "react-native-permissions";

class GeolocationService {
  /**
   * Initializes the GeolocationService and requests location permission.
   */
  constructor() {
    this.requestLocationPermission();
  }

  /**
   * Requests location permission from the user.
   * @returns {Promise<Response>} A promise that resolves to a Response object indicating the permission status.
   */
  requestLocationPermission = async (): Promise<Response> => {
    return new Promise(async (resolve, reject) => {
      try {
        if (Platform.OS === "ios") {
          const status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

          if (status !== "granted") {
            const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

            if (result !== "granted") {
              reject(new Response(false, result, "Location permission denied"));
            } else {
              resolve(
                new Response(true, result, "Location permission granted")
              );
            }
          } else {
            resolve(new Response(true, status, "Location permission granted"));
          }
        } else {
          const status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

          if (status === "denied") {
            resolve(
              new Response(
                false,
                { code: 1, message: "Location permission denied" },
                "Location permission denied"
              )
            );
          } else if (status === "granted") {
            resolve(new Response(true, status, "Location permission granted"));
          } else {
            reject(
              new Response(
                false,
                { code: 5, message: "Location permission blocked" },
                "Location permission blocked"
              )
            );
          }
        }
      } catch (error) {
        SentryService.reportError(error);
        reject(
          new Response(false, error, "Error requesting location permission")
        );
      }
    });
  };

  /**
   * Gets the current location of the device.
   * @returns {Promise<{latitude: number, longitude: number}>} A promise that resolves with the current latitude and longitude.
   */
  getCurrentLocation = (): Promise<{ latitude: number; longitude: number }> => {
    return new Promise((resolve, reject) => {
      this.requestLocationPermission().then(
        () => {
          Geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              resolve({ latitude, longitude });
            },
            (error) => {
              reject(error);
            },
            { enableHighAccuracy: false, timeout: 600000, maximumAge: 3600000 }
          );
        },
        (error) => {
          reject(new Response(false, error, error.message));
        }
      );
    });
  };

  /**
   * Adds a watcher that triggers updates based on the device's location change.
   * @param success Callback function to execute on successful location update.
   * @param err Callback function to execute on error in getting location.
   * @returns {number} The ID of the watcher.
   */
  addLocationWatcher = (success: ({}) => void, err: ({}) => void): number => {
    return Geolocation.watchPosition(
      (position) => {
        success(position);
      },
      (error) => {
        err(`Error getting location: ${error.message}`);
      },
      {
        maximumAge: 0,
        useSignificantChanges: true,
        enableHighAccuracy: false,
        distanceFilter: 1,
        interval: 500,
        fastestInterval: 500,
      }
    );
  };

  /**
   * Retrieves the address for a given latitude and longitude.
   * @returns {Promise<Response>} A promise that resolves to a Response object containing the address information.
   */
  getAddressFromlatLng = async (): Promise<Response> => {
    return new Promise((resolve, reject) => {
      this.getCurrentLocation().then(
        async (latLng) => {
          const instance = await axios.request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.latitude},${latLng.longitude}&key=${Config.REACT_APP_GOOGLE_API_KEY}`,
            method: HTTP_METHODS.GET,
          });
          resolve(
            new Response(
              instance.status === 200,
              { ...instance.data, ...latLng },
              instance.statusText
            )
          );
        },
        async (err) => {
          if (Platform.OS === "android" && err.code === 2) {
            const isEnabledLocation = await isLocationEnabled();

            if (!isEnabledLocation) {
              try {
                const enableResult = await promptForEnableLocationIfNeeded();

                if (enableResult === "enabled") {
                  this.getAddressFromlatLng();
                } else {
                  reject(
                    new Response(
                      false,
                      { locationEnabled: enableResult },
                      "error occured"
                    )
                  );
                }
              } catch (err) {
                SentryService.reportError(err);
                reject(
                  new Response(
                    false,
                    { locationEnabled: false },
                    "error occured"
                  )
                );
              }
            }
          } else {
            reject(new Response(false, err, "error occured"));
          }
        }
      );
    });
  };

  /**
   * Clears the specified location watcher.
   * @param watchid The ID of the watcher to clear.
   */
  clearWatch = (watchid: number) => {
    Geolocation.clearWatch(watchid);
  };
}
export default new GeolocationService();
