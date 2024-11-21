import { FieldConfig } from "components/InputForm";
import RootNavigation from "navigator/RootNavigator";
import { NavigationPaths } from "navigator/Routes/Contants";
import { Realm, RealmProvider, useRealm, useQuery } from "@realm/react";
import { Users } from "database";
import { useLoginModel } from "./model";
export const useLoginController = () => {
  const model = useLoginModel();
  const users = useQuery(Users);

  const fields: FieldConfig[] = [
    {
      name: "email",
      label: "Email",
      placeholder: "Email",
      keyboardType: "email-address",
      returnKeyType: "next",
    },
    {
      name: "password",
      label: "Password",
      secureTextEntry: true,
      returnKeyType: "done",
    },
  ];
  const handleForgotClick = () => {
    RootNavigation.navigate(NavigationPaths.ForgotPassword);
  };
  const handleLogin = async (val: { email: string; password: string }) => {
    const response = await model.validateUser(val);
    if (!response.success) {
      console.log(response);
    }
  };
  const handleSignUpPress = () => {
    RootNavigation.navigate(NavigationPaths.SignUp);
  };
  return { fields, users, handleForgotClick, handleLogin, handleSignUpPress };
};
