import { useTheme } from "react-native-paper"
import { DefaultTheme } from "./default"


export type AppTheme = typeof DefaultTheme

export const useAppTheme = () => useTheme<AppTheme>()
