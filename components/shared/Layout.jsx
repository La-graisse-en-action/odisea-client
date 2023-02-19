import { StatusBar } from "expo-status-bar"
import Constants from "expo-constants"
import View from "../../core/StyledView"

export default function Layout({ children, customThemes }) {
  return (
    <View className={`flex-1 px-[15px] pb-[40px] ${customThemes}`} style={{ marginTop: Constants.statusBarHeight }}>
      {children}
      <StatusBar style="auto" />
    </View>
  )
}
