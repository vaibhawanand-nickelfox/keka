import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabRoutes } from "./Routes/Routes"
const Tab = createBottomTabNavigator()

export const UserTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            {TabRoutes.map(({ name, component, options }: { name: string, component: any, options: BottomTabNavigationOptions }) => (
                <Tab.Screen key={name} name={name} component={component} options={options} />
            ))}
        </Tab.Navigator>
    )
}