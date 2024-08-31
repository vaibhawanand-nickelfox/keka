
import React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { TextInput } from "react-native-paper"


import { InputFormFieldProps } from "./index"
import { useAppTheme } from "themes/index"
import { MakeStyles } from "themes/styles"
import TxText from "components/typography/TxText"
import SectionView from "components/views/SectionView"

/**
 * Generates an input form element with the specified field parameters.
 *
 * @prop { InputFormProps} field - The field object containing input properties.
 * @prop {Function} setFieldValue - The function to set the field value.
 * @prop {Function} setFieldTouched - The function to set the field as touched.
 * @prop {Function} handleBlur - The function to handle onBlur event.
 * @prop {Object} touched - The object containing touched fields.
 * @prop {Object} errors - The object containing errors for each field.
 * @return {JSX.Element} The input form element to be rendered.
 */
export const InputFormElement = ({
  inputMode,
  field,
  setFieldValue,
  setFieldTouched,
  handleBlur,
  touched,
  errors
}: InputFormFieldProps): JSX.Element => {
  const { colors } = useAppTheme()
  const styles = MakeStyles()
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(
    field?.secureTextEntry || false
  )
  const [isFocused, setIsFocused] = React.useState<boolean>(false)
  const handleIconPres = React.useCallback(() => {
    setSecureTextEntry((prev) => !prev)
  }, [])

  return (
    <SectionView spacing={{ bottom: 20 }}>
      <SectionView
        padding={{ vertical: 7 }}
        style={
          {
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: colors.onPrimary,
            borderColor:
              touched[field.name] && errors[field.name]
                ? colors.error
                : isFocused
                  ? colors.primary
                  : colors.inputBorderColor
          } as ViewStyle
        }>
        <TextInput
          maxLength={field?.maxLength ?? 999999}
          autoCapitalize={field?.autoCapitalize ?? "none"}
          autoComplete={field?.autoComplete ?? "off"}
          mode={inputMode}
          keyboardType={field.keyboardType || "default"}
          label={field.label}
          onChangeText={(val: string) => setFieldValue(val)}
          onFocus={() => {
            setIsFocused(true)
            setFieldTouched(field.name)
          }}
          onBlur={() => {
            setIsFocused(false)
            handleBlur(field.name)
          }}
          value={field.value}
          activeOutlineColor={colors.placeholderColor}
          style={styles.input}
          contentStyle={
            {
              backgroundColor: colors.onPrimary,
              height: 36
            } as StyleProp<ViewStyle>
          }
          secureTextEntry={field.secureTextEntry && secureTextEntry}
          right={
            field.secureTextEntry && (
              <TextInput.Icon
                onPress={() => {
                  handleIconPres()
                }}
                icon={secureTextEntry ? "eye" : "eye-off"}
                color={colors.primary}
              />
            )
          }
        />
      </SectionView>
      <SectionView style={styles.errorTextCont}>
        <TxText
          color="error"
          children={
            touched[field.name] && errors[field.name] && isFocused && (errors[field.name] as string)
          }
        />
      </SectionView>
    </SectionView>
  )
}
