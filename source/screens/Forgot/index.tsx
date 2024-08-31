import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import SectionView from "components/views/SectionView";
import TxText from 'components/typography/TxText'
import React from "react";
import { SafeAreaView, Pressable } from "react-native";
import { MakeStyles } from "themes/styles";
import { InputForm } from "components/InputForm";
import { FormValidation } from "utils/FormValidation";
import { useForgotPasswordController } from './controller'

export const ForgotPasswordScreen = () => {
    const styles = MakeStyles()
    const controller = useForgotPasswordController()
    return (
        <KeyboardAwareScrollView
            enableAutomaticScroll
            enableResetScrollToCoords
            extraHeight={100}
            bounces={false} contentContainerStyle={{ flexGrow: 1 }}>

            <SafeAreaView style={styles.safeAreaContainer}>
                <SectionView flexed padding={{ horizontal: 16 }}>
                    <InputForm
                        fields={controller.fields}
                        validationSchema={FormValidation.loginForm}
                        onSubmit={controller.handleSubmit}
                        submitTitle="Submit"
                        declarationWithCheck
                        formHeading={"Forgot your password?"}
                        formSubHeading="Don't worry, we will send you an email to reset your password"
                    />
                </SectionView>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}