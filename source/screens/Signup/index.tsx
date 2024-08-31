import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import SectionView from "components/views/SectionView";
import TxText from 'components/typography/TxText'
import React from "react";
import { SafeAreaView, Pressable } from "react-native";
import { MakeStyles } from "themes/styles";
import { InputForm } from "components/InputForm";
import { FormValidation } from "utils/FormValidation";
import { Strings } from "constants/String";
import { useSignupController } from "./controller";

export const SignupScreen = () => {
    const styles = MakeStyles()
    const controller = useSignupController()
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
                        validationSchema={FormValidation.signupForm}
                        onSubmit={controller.handleSignup}
                        submitTitle="Register"
                        declarationWithCheck
                        formHeading={"Welcome to Keka"}
                        formSubHeading="Please addd your details to continue"
                    />
                    <SectionView spacing={{ vertical: 50 }} alignItem="center">
                        <TxText children={"or"} variant="body" mode="bold" />
                    </SectionView>
                    <SectionView alignItem="center" justify="center" direction="row" gap={{ columnGap: 6 }}>
                        <TxText
                            align="center"
                            style={{ verticalAlign: "middle" }}
                        >
                            {"Already have an account?"}

                        </TxText>
                        <Pressable onPress={controller.handleLoginPress}>
                            <TxText mode="bold" children={'Login'} color="primary" />
                        </Pressable>
                    </SectionView>
                </SectionView>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}