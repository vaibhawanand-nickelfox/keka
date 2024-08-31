
import { LoginScreen } from "screens/Login"
import {SignupScreen} from "screens/Signup"
import {ForgotPasswordScreen} from "screens/Forgot"
import { NavigationPaths } from "./Contants"
import { RouteModel } from "./Models/RouteModel"
import { UserTabNavigator } from "navigator/UserTabNavigator"
import { HomeTabScreen } from "tabScreen/home"

export const UnAuthRoutes = [
  
  new RouteModel(NavigationPaths.Login, LoginScreen, { headerShown: false }),
  new RouteModel(NavigationPaths.SignUp, SignupScreen, { headerShown: false }),
  new RouteModel(NavigationPaths.ForgotPassword, ForgotPasswordScreen, { headerShown: false }),
]

export const AuthRoutes = [
    new RouteModel(NavigationPaths.UserTabNavigator, UserTabNavigator, {
    headerShown: false,
    unMountOnBlur: true
  })
]
export const TabRoutes = [
  new RouteModel(NavigationPaths.HomeTab, HomeTabScreen, {
    headerShown: false,
    unMountOnBlur: true
  })
]
