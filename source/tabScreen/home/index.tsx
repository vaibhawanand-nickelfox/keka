
import SectionView from "components/views/SectionView"
import { SafeAreaView } from "react-native"
import { MakeStyles } from "themes/styles"
import { BtnButton } from "components/Buttons"
import TxText from "components/typography/TxText"
export const HomeTabScreen = () => {
    const styles = MakeStyles()
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <SectionView padding={{ horizontal: 16 }} flexed>
                <SectionView flexed alignItem="center" justify="center">
                    <TxText children={'Hey, Welcome to Keka'} />
                </SectionView>
                <SectionView flexed>
                    <BtnButton title="Clock-In" onPress={() => { }} />
                </SectionView>
            </SectionView>
        </SafeAreaView>
    )
}