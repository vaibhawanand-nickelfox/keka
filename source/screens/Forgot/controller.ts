import { FieldConfig } from "components/InputForm"
import RootNavigation from "navigator/RootNavigator"
import { NavigationPaths } from "navigator/Routes/Contants"

export const useForgotPasswordController = () => {
    const fields: FieldConfig[] = [
        
          {
            name: "email",
            label: "Email",
            placeholder: "Email",
            keyboardType: "email-address",
            returnKeyType: "next"
          },
        ]

        const handleSubmit = () => {
            
        }
    return{fields, handleSubmit}
}