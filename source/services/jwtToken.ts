import { sign, decode } from "react-native-pure-jwt";

// Your secret key (in a real app, do NOT hardcode this in the frontend)
const SECRET_KEY = "secret-key-keka-app";

// Function to create JWT token
export const createJWT = async (
  name: string,
  email: string,
  id: string
): Promise<string | null> => {
  try {
    // Payload for JWT
    const payload = {
      name,
      email,
      id,
      exp: new Date().getTime() + 3600 * 1000,
    };
    const token = sign(payload, SECRET_KEY, {
      alg: "HS256",
    });
    return token;
  } catch (error) {
    console.error("Error creating JWT:", error);
    return null;
  }
};
export const validateJWT = async (
  token: string
): Promise<{ isExpired: boolean; message: string }> => {
  return new Promise((resolve, reject) => {
    try {
      if (!token) {
        reject({ expiry: 0, message: "Token not found" });
      }

      // Decode and verify the JWT
      decode(token, SECRET_KEY).then((decodedToken) => {
        const isValid = validateExpiry(decodedToken.payload.exp);
        resolve({
          isExpired: isValid,
          message: "Token is valid",
        });
      });
    } catch (error) {
      console.error("Error validating JWT:", error);
      reject({ isExpired: true, message: "Invalid token" });
    }
  });
};
export const validateExpiry = (expiryTimestamp: number): boolean => {
  // Get the current time in seconds
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);

  // Check if the current time is greater than the expiry timestamp
  return currentTimeInSeconds > expiryTimestamp;
};
