import { FieldConfig } from "components/InputForm"
import RootNavigation from "navigator/RootNavigator"
import { NavigationPaths } from "navigator/Routes/Contants"
import { Realm, RealmProvider, useRealm, useQuery } from '@realm/react'
import {Users} from 'database'
export const useLoginController = () => {
    const users = useQuery(Users);
    const fields: FieldConfig[] = [
        {
          name: "email",
          label: "Email",
          placeholder: "Email",
          keyboardType: "email-address",
          returnKeyType: "next"
        },
        {
          name: "password",
          label: "Password",
          secureTextEntry: true,
          returnKeyType: "done"
        }
      ]
      const handleForgotClick = () => {
        RootNavigation.navigate(NavigationPaths.ForgotPassword)
      }
      const handleLogin = (val: {email: string, password: string}) => {

        const user = users.filtered(`email == "${val.email}" && password == "${val.password}"`)[0]
        if (user) {
          RootNavigation.navigate(NavigationPaths.UserTabNavigator)
        }

      }
      const handleSignUpPress = () => {
        RootNavigation.navigate(NavigationPaths.SignUp)
      }
    return{fields, users, handleForgotClick, handleLogin, handleSignUpPress}
}