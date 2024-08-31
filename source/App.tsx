import React from "react"
import ErrorBoundary from "react-native-error-boundary"
import { Provider as StoreProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { LogBox } from "react-native"
import { persistor, store } from "store"
import { Provider as PaperProvider } from "react-native-paper"
import { AppContainer } from "navigator/AppContainer"
import { DefaultTheme } from "themes/default"
import { RealmProvider } from '@realm/react'
import { Users } from "database"
export const App = () => {
    const errorHandler = (error: Error, stackTrace: string) => {
        // eslint-disable-next-line no-console
        console.log(error, stackTrace)

    }
    LogBox.ignoreLogs([
        'Warning: VirtualizedLists should never be nested',
        'Warning: TextInput.Icon: Support for defaultProps'
    ]);
    return (
        <ErrorBoundary onError={errorHandler}>
            <RealmProvider schema={[Users]}>

                <StoreProvider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <PaperProvider theme={DefaultTheme}>

                            <AppContainer />
                        </PaperProvider>
                    </PersistGate>
                </StoreProvider>
            </RealmProvider>
        </ErrorBoundary>
    )
}