import color from "color"
import React from "react"
import { ActivityIndicator } from "react-native"
import { TouchableRipple } from "react-native-paper"
import TxText from "components/typography/TxText"
import SectionView from "components/views/SectionView"
import { useAppTheme } from "themes/index"
import { DefaultTheme } from "themes/default"
export const BtnButton = ({
    title,
    bgColor,
    txtColor,
    onPress,
    mode = "contained",
    disabled = false,
    loading = false,
    bottomSpacing = true
}: {
    title?: string
    bgColor?: keyof typeof DefaultTheme.colors
    txtColor?: keyof typeof DefaultTheme.colors
    onPress: () => void
    mode?: "outline" | "contained"
    disabled?: boolean
    loading?: boolean
    bottomSpacing?: boolean
}) => {
    const { colors } = useAppTheme()
    return (
        <SectionView {...(bottomSpacing && { spacing: { bottom: 16 } })} bgColor="transparent">
            <TouchableRipple
                onPress={() => {
                    onPress()
                }}
                disabled={disabled}
                {...(mode === "contained" && { rippleColor: color(bgColor).alpha(0.12).rgb().string() })}>
                <SectionView
                    alignItem="center"
                    justify="center"
                    padding={{ vertical: 10, horizontal: 12 }}
                    bRadius={{ all: 8 }}
                    style={[
                        {
                            height: 48,
                            width: "100%",

                            ...(mode === "contained" && {
                                backgroundColor: disabled
                                    ? color(bgColor).alpha(0.25).rgb().string()
                                    : (bgColor ?? colors.primary1)
                            }),
                            ...(mode === "outline" && { borderColor: colors[txtColor ?? "primary1"] }),
                            ...(mode === "outline" && { borderWidth: 1 })
                        }
                    ]}>
                    {loading ? (
                        <ActivityIndicator size={"small"} color="white" />
                    ) : (
                        <TxText
                            children={title}
                            color={mode === "contained" ? (txtColor ?? "onPrimary") : (txtColor ?? "primary1")}
                            variant="body"
                            mode="bold"
                        />
                    )}
                </SectionView>
            </TouchableRipple>
        </SectionView>
    )
}
