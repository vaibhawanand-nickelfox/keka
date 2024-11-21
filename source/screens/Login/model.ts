import { useRealm } from "@realm/react";
import { createJWT } from "services/jwtToken";
import { AppActions } from "store/slices/AppSlice";
import { useDispatch } from "react-redux";
export const useLoginModel = () => {
  const realm = useRealm();
  const dispatch = useDispatch();
  const validateUser = async (params: { email: string; password: string }) => {
    try {
      // Query the Realm database for a user with the given email and password
      const user = realm
        .objects("Users")
        .filtered(
          `email == $0 AND password == $1`,
          params.email,
          params.password
        )[0];

      if (user) {
        const token = await createJWT(user?.name, user.email, user._id);
        // Use a write transaction to update the user's name
        realm.write(() => {
          user.lastLogin = new Date();
        });
        let userData = {
          name: user.name,
          email: user.email,
          _id: user._id,
          token: token,
        };
        dispatch(AppActions.LOGIN({ user: userData }));
        // If user is found, return success
        return { success: true, userData, message: "Login successful" };
      } else {
        console.log("user not found");
        // If user is not found, return failure
        return { success: false, user: null, message: "User not found" };
      }
    } catch (error) {
      console.error("Error finding user:", error);
      return { success: false, message: "Error finding user" };
    }
  };
  return {
    validateUser,
  };
};
