import type { FlexStyle, StyleProp, ViewProps, ViewStyle } from "react-native"
import { AnimatedProps } from "react-native-reanimated"

import { DefaultTheme } from "@app/Themes/default"

export type Gap = {
  gap?: FlexStyle["gap"]
  rowGap?: FlexStyle["rowGap"]
  columnGap?: FlexStyle["columnGap"]
}

export type Spacing = {
  vertical?: number | string
  horizontal?: number | string
  top?: number | string
  bottom?: number | string
  start?: number | string
  end?: number | string
  all?: number | string
}

export type Padding = {
  vertical?: number | string
  horizontal?: number | string
  top?: number | string
  bottom?: number | string
  start?: number | string
  end?: number | string
  all?: number | string
}

export type BorderRadius = {
  topLeft?: number
  topRight?: number
  bottomLeft?: number
  bottomRight?: number
  all?: number
}

export interface BodyProps extends ViewProps {
  style?: StyleProp<ViewStyle>
  bgColor?: keyof typeof DefaultTheme.colors
  spacing?: Spacing
  padding?: Padding
  safeArea?: boolean
  scroll?: boolean
  flexed?: boolean
  flex?: number
  justify?: FlexStyle["justifyContent"]
  alignItem?: FlexStyle["alignItems"]
}

export interface SectionViewProps extends AnimatedProps<ViewProps> {
  style?: StyleProp<ViewStyle>
  bgColor?: keyof typeof DefaultTheme.colors
  spacing?: Spacing
  padding?: Padding
  flexed?: boolean
  flex?: number
  justify?: FlexStyle["justifyContent"]
  alignItem?: FlexStyle["alignItems"]
  direction?: FlexStyle["flexDirection"]
  gap?: Gap
  bRadius?: BorderRadius
}
