// All stack navigator of the app
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "store/index"
import { AuthRoutes, UnAuthRoutes } from "./Routes/Routes"

const Stack = createNativeStackNavigator()

/**
 * Renders the main stack navigator for the app.
 *
 * @return {JSX.Element} The rendered stack navigator.
 */
export const AppStacks = () => {
  const { isLogged } = useSelector((state: RootState) => state.app)

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: "center"
      }}>
      {isLogged

        ? AuthRoutes.map(({ name, component, options }: { name: string, component: any, options: any }) => (
          <Stack.Screen key={name} name={name} component={component} options={options} />
        ))
        : UnAuthRoutes.map(({ name, component, options }: { name: string, component: any, options: any }) => (
          <Stack.Screen key={name} name={name} component={component} options={options} />
        ))}
    </Stack.Navigator>
  )
}
