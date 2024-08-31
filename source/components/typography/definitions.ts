
import {  type StyleProp, type TextProps, type TextStyle } from "react-native"
import { AnimatedProps } from "react-native-reanimated"
import { DefaultTheme } from "themes/default"
import { FontSize } from "themes/fontSize"


export enum TextSizes {
  largeFont = FontSize(50),
  header = FontSize(32),
  head2 = FontSize(30),
  headline = FontSize(24),
  heading = FontSize(20),
  subHeading = FontSize(18),
  title = FontSize(17),
  body = FontSize(16),
  subTitle = FontSize(15),
  small = FontSize(14),
  mini = FontSize(12),
  tiny = FontSize(11),
  micro = FontSize(10),
  microscule = FontSize(8),
  minuscule = FontSize(7)
}

export enum HeadSizes {
  h1 = 36,
  h2 = 30,
  h3 = 26,
  h4 = 24,
  h5 = 22,
  h6 = 20
}
/**
 * @param
 * font-thin	font-weight: 100;
 * font-extralight	font-weight: 200;
 * font-light	font-weight: 300;
 * font-normal	font-weight: 400;
 * font-medium	font-weight: 500;
 * font-semibold	font-weight: 600;
 * font-bold	font-weight: 700;
 * font-extrabold	font-weight: 800;
 * font-black	font-weight: 900;
 */
export enum Fonts {
  black = "Metropolis-Black",
  bold = "Metropolis-Bold",
  extraBold = "Metropolis-ExtraBold",
  extraLight = "Metropolis-ExtraLight",
  light = "Metropolis-Light",
  medium = "Metropolis-Medium",
  regular = "Metropolis-Regular",
  semiBold = "Metropolis-SemiBold",
  thin = "Metropolis-Thin"
}
export enum FontWeights {
  thin = "100",
  extralight = "200",
  light = "300",
  normal = "400",
  medium = "500",
  semibold = "600",
  bold = "700",
  extrabold = "800",
  black = "900"
}
type TextAlign = "auto" | "center"

type Spacing = {
  vertical?: number | string
  horizontal?: number | string
  top?: number | string
  bottom?: number | string
  start?: number | string
  end?: number | string
}

type Padding = {
  vertical?: number | string
  horizontal?: number | string
  top?: number | string
  bottom?: number | string
  start?: number | string
  end?: number | string
  all?: number | string
}

export interface TxTextProps extends AnimatedProps<TextProps> {
  family?: keyof typeof Fonts 
  weight?: keyof typeof FontWeights
  variant?: keyof typeof TextSizes
  style?: StyleProp<TextStyle>
  muted?: boolean
  mode?: keyof typeof Fonts
  color?: keyof typeof DefaultTheme.colors
  align?: TextAlign
  spacing?: Spacing
  padding?: Padding
}

export interface TxHeadingProps extends AnimatedProps<TextProps> {
  variant?: keyof typeof HeadSizes
  style?: StyleProp<TextStyle>
  muted?: boolean
  mode?: keyof typeof Fonts
  color?: keyof typeof DefaultTheme.colors
  align?: TextAlign
  spacing?: Spacing
}
