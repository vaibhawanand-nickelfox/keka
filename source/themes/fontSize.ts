import { Dimensions } from "react-native"

const { width, height, fontScale } = Dimensions.get("window")
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

export const SCREEN_WIDTH = width
export const SCREEN_HIGHT = height

const FontSize = (size: number) => {
  return size / fontScale
}

const scale = (size: number) => (width / guidelineBaseWidth) * size
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size
const horizontalScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor

export { scale, FontSize, verticalScale, horizontalScale }