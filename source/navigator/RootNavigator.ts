import { createNavigationContainerRef } from "@react-navigation/native"

export const navigationRef = createNavigationContainerRef()

const RootNavigation = {
  /**
   * Navigate to the specified route.
   *
   * @param {string} name - The name of the route to navigate to.
   * @param {object} params - The parameters to pass to the route. Defaults to {}.
   * @return {void}
   */
  navigate: (name: string, params = {}) => {
    if (navigationRef.isReady()) navigationRef.navigate(name as never, params as never)
  },
  /**
   * Resets the navigation stack to the specified route.
   *
   * @param {number} index - The index of the route in the navigation stack.
   * @param {string} name - The name of the route to navigate to.
   * @param {object} [params={}] - The parameters to pass to the route. Defaults to an empty object.
   * @return {void}
   */
  reset: (index: number, name: string, params = {}) => {
    if (navigationRef.isReady()) navigationRef.reset({ index, routes: [{ name, params }] })
  },
  /**
   * Navigates back if possible.
   *
   * This function checks if the navigation reference is ready and if there is a route to go back to.
   * If both conditions are met, it calls the `goBack` function on the navigation reference.
   *
   * @return {void} This function does not return anything.
   */
  back: () => {
    navigationRef.isReady() && navigationRef.canGoBack() && navigationRef.goBack()
  }
}

export default RootNavigation
