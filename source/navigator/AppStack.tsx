// All stack navigator of the app
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "store/index"
import { AuthRoutes, UnAuthRoutes } from "./Routes/Routes"
import { validateJWT } from "services/jwtToken";
import { useDispatch } from 'react-redux'
import { AppActions } from "store/slices/AppSlice"
const Stack = createNativeStackNavigator()

/**
 * Renders the main stack navigator for the app.
 *
 * @return {JSX.Element} The rendered stack navigator.
 */
export const AppStacks = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.app)
  const [isValidSession, setIsValidSession] = React.useState<boolean>(false)
  React.useEffect(() => {
    validateJWT(user?.token).then((res) => {
      if (!res.isExpired) {

        setIsValidSession(!res.isExpired)
      } else {
        dispatch(AppActions.LOGOUT())
      }

    })
  }, [user])
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: "center"
      }}>
      {isValidSession
        ? AuthRoutes.map(({ name, component, options }: { name: string, component: any, options: any }) => (
          <Stack.Screen key={name} name={name} component={component} options={options} />
        ))
        : UnAuthRoutes.map(({ name, component, options }: { name: string, component: any, options: any }) => (
          <Stack.Screen key={name} name={name} component={component} options={options} />
        ))}
    </Stack.Navigator>
  )
}
