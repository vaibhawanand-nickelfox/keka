import { useAppTheme } from "themes"
import React from "react"
import { DimensionValue } from "react-native"
import Animated, { BaseAnimationBuilder } from "react-native-reanimated"

import { DefaultTheme } from "themes/default"

import { SectionViewProps } from "./definitions"

const SectionView = (props: SectionViewProps) => {
  const { colors } = useAppTheme()

  return (
    <Animated.View
      style={[
        {
          ...(props.spacing?.top && { marginTop: props.spacing.top as DimensionValue }),
          ...(props.spacing?.bottom && { marginBottom: props.spacing.bottom as DimensionValue }),
          ...(props.spacing?.start && { marginStart: props.spacing.start as DimensionValue }),
          ...(props.spacing?.end && { marginEnd: props.spacing.end as DimensionValue }),
          ...(props.spacing?.vertical && {
            marginVertical: props.spacing.vertical as DimensionValue
          }),
          ...(props.spacing?.horizontal && {
            marginHorizontal: props.spacing.horizontal as DimensionValue
          }),
          ...(props.gap?.gap && { gap: props.gap.gap as number }),
          ...(props.gap?.rowGap && { rowGap: props.gap.rowGap as number }),
          ...(props.gap?.columnGap && { gap: props.gap.columnGap as number }),
          ...(props.bRadius?.all && { borderRadius: props.bRadius.all as number }),
          ...(props.bRadius?.topLeft && { borderTopLeftRadius: props.bRadius.topLeft as number }),
          ...(props.bRadius?.topRight && {
            borderTopRightRadius: props.bRadius.topRight as number
          }),
          ...(props.bRadius?.bottomRight && {
            borderBottomRightRadius: props.bRadius.bottomRight as number
          }),
          ...(props.bRadius?.bottomLeft && {
            borderBottomLeftRadius: props.bRadius.bottomLeft as number
          }),
          ...(props.padding?.all && { padding: props.padding.all as DimensionValue }),
          ...(props.padding?.top && { paddingTop: props.padding.top as DimensionValue }),
          ...(props.padding?.bottom && { paddingBottom: props.padding.bottom as DimensionValue }),
          ...(props.padding?.start && { paddingStart: props.padding.start as DimensionValue }),
          ...(props.padding?.end && { paddingEnd: props.padding.end as DimensionValue }),
          ...(props.padding?.vertical && {
            paddingVertical: props.padding.vertical as DimensionValue
          }),
          ...(props.padding?.horizontal && {
            paddingHorizontal: props.padding.horizontal as DimensionValue
          }),
          ...(props.flexed && { flex: props.flex || 1 }),
          ...(props.justify && { justifyContent: props.justify }),
          ...(props.alignItem && { alignItems: props.alignItem }),
          backgroundColor: (colors[props.bgColor as keyof typeof DefaultTheme.colors] ||
            colors.background) as string,
          ...(props.direction && { flexDirection: props.direction })
        },
        props.style
      ]}
      {...(props.entering && { entering: props.entering as BaseAnimationBuilder })}
      {...(props.exiting && { entering: props.exiting as BaseAnimationBuilder })}
      {...(props.layout && { entering: props.layout as BaseAnimationBuilder })}
      testID={Math.floor(Math.random() * 1000).toString()}>
      {props.children}
    </Animated.View>
  )
}

export default SectionView
