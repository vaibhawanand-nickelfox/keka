export class RouteModel {
  name: string
  component: () => React.JSX.Element
  options: {}
  /**
   * Constructs a new instance of the RouteModel class.
   *
   * @param {string} name - The name of the route.
   * @param {React.Component} component - The component to render for the route.
   * @param {Object} options - The options for the route.
   */
  constructor(name: string, component: ()=>React.JSX.Element, options = {}) {
    this.name = name
    this.component = component
    this.options = options
  }
}
