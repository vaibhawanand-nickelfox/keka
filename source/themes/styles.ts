import { StyleSheet } from "react-native"
import { useAppTheme } from "themes"
export const MakeStyles = () => {
    const { colors } = useAppTheme()
    return StyleSheet.create({
        safeAreaContainer: {
            flex: 1,
            flexGrow: 1,
            backgroundColor: "#fff",
        },
        inputContainer: {
            marginVertical: 10
          },
          tripTextInputCont: {
            padding: 0,
            marginBottom: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 11,
            backgroundColor: colors.tripInputBackgroundColor,
            borderWidth: 1,
            borderColor: colors.inputBorder,
            borderRadius: 8,
            maxHeight: 50,
            minHeight: 29
          },
          tripTextInput: {
            padding: 0,
            color: colors.black1,
            fontSize: 16,
      
            backgroundColor: "transparent"
          },
          input: { height: 36, color: colors.text },
          searchTextInput: {
            flex: 1,
            borderWidth: 1,
            color: colors.text,
            height: 42,
            borderRadius: 8,
            paddingHorizontal: 6
          },
          errorTextCont: {
            height: 20,
            justifyContent: "center"
          },
          errorText: {
            color: "red",
            paddingStart: 6
          },
          checkCont: {
            borderRadius: 8,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.checkBoxBg,
            marginEnd: 12
          },
          check: {
            height: 24,
            width: 24
          },
          infoCont: {
            padding: 10,
            alignItems: "center",
            justifyContent: "center"
          },
          navBarBtnCont: { backgroundColor: colors.checkBoxBg, borderRadius: 8, padding: 10 },
          navBarBtn: { height: 20, width: 20 },
          navBarDwnBtn: { height: 40, width: 40 },
          navLogo: {
            width: 109,
            height: 30
          },
          navBarTitle: { color: colors.inputLabelColor, fontSize: 16, fontWeight: "600" },
          stoastTextStyle: { fontSize: 12, fontWeight: "600", color: colors.successToastText },
          dtoastTextStyle: { fontSize: 12, fontWeight: "600", color: colors.errorToastText },
      
          profile: {
            height: 64,
            width: 64,
            borderRadius: 64
          },
          menuItemIcon: {
            height: 24,
            width: 24
          },
          menuItemLabel: { fontSize: 14, fontWeight: "700", marginStart: 12 },
          logoutLabel: { fontSize: 14, fontWeight: "700", marginEnd: 12 },
          drawerHeading: { fontSize: 14, fontWeight: "700", lineHeight: 21 },
          drawerPhone: {
            fontSize: 10,
            fontWeight: "500",
            lineHeight: 21,
            color: colors.drawerLabel
          },
          drawerBarand: { color: "#8C9097", fontSize: 20, fontWeight: "700" },
          drawerVersion: { color: "#8C9097", fontSize: 12, fontWeight: "700" },
          topMenuItem: {
            borderBottomColor: colors.menuBorder,
            borderBottomWidth: 1,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          },
          midMenuItem: { borderBottomColor: colors.menuBorder, borderBottomWidth: 1 },
          bottomMenuItem: {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8
          },
          container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          },
          modalContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.bgShadow
          },
          modalContent: {
            backgroundColor: colors.onPrimary,
            padding: 8,
            borderRadius: 8,
            alignItems: "center"
          },
          button: {
            paddingVertical: 16,
            paddingHorizontal: 16,
            borderRadius: 8,
            fontSize: 16,
            fontWeight: "600",
            padding: 0,
            margin: 0
          },
          profileImage: { height: 80, width: 80, borderRadius: 50 },
          avatarCont: {
            backgroundColor: colors.primary,
            borderRadius: 100,
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center"
          },
          navBarBadge: {
            position: "absolute",
            top: 0,
            right: 6,
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: colors.error
          }
    })
}