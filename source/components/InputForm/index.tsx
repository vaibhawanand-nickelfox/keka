
import { Field, FieldProps, Formik, FormikErrors, FormikTouched } from "formik"
import React from "react"
import { ReturnKeyTypeOptions, TouchableOpacity, ViewStyle } from "react-native"
import { Button, TextInputProps } from "react-native-paper"
import { IconSource } from "react-native-paper/lib/typescript/components/Icon"
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types"



import { InputFormElement } from "./InputFormElement"
import { useAppTheme } from "themes/index"
import TxText from "components/typography/TxText"
import SectionView from "components/views/SectionView"

export interface FieldConfig extends TextInputProps {
  name: string
  label?: TextInputLabelProp
  placeholder?: string
  secureTextEntry?: boolean
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad"
  returnKeyLabel?: string
  returnKeyType?: ReturnKeyTypeOptions
  rightIcon?: IconSource
}

export interface InputFormFieldProps {
  inputMode?: "outlined" | "flat"
  field: FieldConfig
  setFieldValue: (val: string) => void
  setFieldTouched: (name: string) => void
  handleBlur: (name: string) => void
  touched: FormikTouched<any>
  errors: FormikErrors<any>
}

export interface InputFormProps {
  fields: FieldConfig[]
  validationSchema: any
  submitTitle?: string
  onSubmit: (values: any) => void
  formHeading?: string
  formSubHeading?: string
  inputStyle?: ViewStyle
  inputMode?: "outlined" | "flat"
  secondaryActionText?: string
  secondaryAction?: () => void
  declarationWithCheck?: boolean
  declarationWithoutCheck?: boolean
  fieldCriteria?: boolean
}

/**
 * Renders an input form with the specified fields and validation schema.
 *
 * @prop {InputFormProps} fields - the input fields for the form
 * @prop {Yup.ObjectSchema} validationSchema - the validation schema for the form fields
 * @prop {string} submitTitle - the title for the submit button (default: "Login")
 * @prop {Function} onSubmit - the function to be called when the form is submitted
 * @prop {ReactNode} formHeading - the heading for the form
 * @prop {ReactNode} formSubHeading - the sub heading for the form
 * @prop {string} inputMode - the input mode for the form fields (default: "outlined")
 * @prop {string} secondaryActionText - the text for the secondary action
 * @prop {Function} secondaryAction - the function to be called for the secondary action
 * @prop {boolean} declarationWithCheck - flag for including a declaration with a check
 * @prop {boolean} declarationWithoutCheck - flag for including a declaration without a check
 * @prop {boolean} fieldCriteria - flag for including field criteria
 * @return {ReactElement} the rendered input form
 */
export const InputForm: React.FC<InputFormProps> = ({
  fields,
  validationSchema,
  submitTitle = "Login",
  onSubmit,
  formHeading,
  formSubHeading,
  inputMode = "outlined",
  secondaryActionText,
  secondaryAction = () => { },
  fieldCriteria = false
}) => {
  const { colors } = useAppTheme()
  return (
    <SectionView>
      {formHeading && <SectionView spacing={{ vertical: 10 }}><TxText variant="head2" children={formHeading} /></SectionView>}
      {formSubHeading && <SectionView spacing={{ top: 10, bottom: 30 }}><TxText variant="subHeading" children={formSubHeading} /></SectionView>}
      <Formik
        validateOnBlur
        validateOnChange
        validateOnMount
        initialValues={fields.reduce((acc, { name }) => ({ ...acc, [name]: "" }), {})}
        validationSchema={validationSchema}
        onSubmit={(val) => onSubmit(val)}>
        {({ handleBlur, handleSubmit, setFieldTouched, isValid }) => (
          <SectionView>
            {fields.map((field) => (
              <Field key={field.name} name={field.name}>
                {({ field: { name }, form: { touched, errors, setFieldValue } }: FieldProps) => (
                  <InputFormElement
                    inputMode={inputMode}
                    field={field}
                    setFieldValue={(val) => setFieldValue(name, val)}
                    setFieldTouched={() => setFieldTouched(name)}
                    handleBlur={() => handleBlur(name)}
                    touched={touched}
                    errors={errors}
                  />
                )}
              </Field>
            ))}
            {!!secondaryActionText && (
              <SectionView alignItem="flex-end" spacing={{ bottom: 40 }}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    secondaryAction()
                  }}>
                  <TxText
                    color={"primary"}
                    style={{ fontWeight: "600", fontSize: 16 }}
                    children={secondaryActionText}
                  />
                </TouchableOpacity>
              </SectionView>
            )}



            {fieldCriteria && (
              <SectionView
                direction="row"
                gap={{ rowGap: 12 }}
                alignItem="flex-start"
                justify="flex-start"
                flexed
                padding={{}}
                spacing={{ bottom: 24 }}>
                <SectionView style={{ flex: 1 }}>
                  <TxText color={'oceanGray'} style={{ fontWeight: "500", fontSize: 14 }}>
                    The password should include 1 upper case & 1 number & must contain 8 letters
                  </TxText>
                </SectionView>
              </SectionView>
            )}
            <Button
              mode="contained"
              contentStyle={{ paddingVertical: 2, paddingHorizontal: 16, borderRadius: 8 }}
              labelStyle={{ fontSize: 16, fontWeight: "600", padding: 0, margin: 0 }}
              disabled={!isValid}
              theme={{ colors: { primary: colors.primary } }}
              onPress={() => {
                handleSubmit()
              }}>
              {submitTitle ?? "Submit"}
            </Button>
          </SectionView>
        )}
      </Formik>
    </SectionView>
  )
}
