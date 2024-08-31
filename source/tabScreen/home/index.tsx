import TxText from "components/typography/TxText"
import SectionView from "components/views/SectionView"
import { SafeAreaView } from "react-native"
import { MakeStyles } from "themes/styles"

export const HomeTabScreen = () => {
    const styles = MakeStyles()
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <SectionView>
                <TxText children={"Home Tab Screen"} />
            </SectionView>
        </SafeAreaView>
    )
}