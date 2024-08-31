// App Navigation Container
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { StatusBar } from "react-native"

import { navigationRef } from "./RootNavigator"
import { AppStacks } from "./AppStack"

/**
 * Renders the main application container.
 *
 * @return {JSX.Element} The rendered application container.
 */
export const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <AppStacks />
    </NavigationContainer>
  )
}