import { FieldConfig } from "components/InputForm"
import RootNavigation from "navigator/RootNavigator"
import { NavigationPaths } from "navigator/Routes/Contants"
import {useSignupModel} from './model'
export const useSignupController = () => {
  const model = useSignupModel()
    const fields: FieldConfig[] = [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        returnKeyType: "next"
      },
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
          returnKeyType: "next"
        },
        {
          name: "rpassword",
          label: "Re-Password",
          secureTextEntry: true,
          returnKeyType: "done"
        }
      ]
      const handleForgotClick = () => {
        RootNavigation.navigate(NavigationPaths.ForgotPassword)
      }
      const handleSignup = async(val: {name: string, email: string, passowrd: string}) => {
        const response = await model.registerUser(val)

        if (response.success) {
          RootNavigation.navigate(NavigationPaths.Login)
        }

      }
      const handleLoginPress = () => {
        RootNavigation.navigate(NavigationPaths.Login)
      }
    return{fields, handleForgotClick, handleSignup, handleLoginPress}
}