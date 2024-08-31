import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import SectionView from "components/views/SectionView";
import TxText from 'components/typography/TxText'
import React from "react";
import { SafeAreaView, Pressable, FlatList } from "react-native";
import { MakeStyles } from "themes/styles";
import { InputForm } from "components/InputForm";
import { FormValidation } from "utils/FormValidation";
import { Strings } from "constants/String";
import { useLoginController } from "./controller";

export const LoginScreen = () => {
    const styles = MakeStyles()
    const controller = useLoginController()
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
                        onSubmit={controller.handleLogin}
                        secondaryActionText={Strings.LoginPage.forgetPass}
                        secondaryAction={controller.handleForgotClick}
                        submitTitle="Login"
                        declarationWithCheck
                        formHeading={"Welcome to Keka"}
                        formSubHeading="Please enter your credential to continue"
                    />
                    <SectionView spacing={{ vertical: 50 }} alignItem="center">
                        <TxText children={"or"} variant="body" mode="bold" />
                    </SectionView>
                    <SectionView alignItem="center" justify="center" direction="row" gap={{ columnGap: 6 }}>
                        <TxText
                            align="center"
                            style={{ verticalAlign: "middle" }}
                        >
                            {"Don't have an account?"}

                        </TxText>
                        <Pressable onPress={controller.handleSignUpPress}>
                            <TxText children={'Sign Up'} color="primary" />
                        </Pressable>
                    </SectionView>
                    {controller.users.length > 0 && (<SectionView alignItem="center" justify="center" spacing={{ vertical: 10 }} flexed gap={{ columnGap: 6 }}>
                        <TxText children={`Registered users: `} />
                        <FlatList nestedScrollEnabled data={controller.users} keyExtractor={(item) => item._id.toString()} renderItem={({ item }) => <TxText children={item.name} />} />
                    </SectionView>
                    )}
                </SectionView>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}