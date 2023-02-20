import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import View from "../../core/StyledView";
import { Platform } from "react-native";

export default function Layout({
  children,
  customThemes,
}: {
  children: any;
  customThemes?: string;
}) {
  return (
    <View
      className={`flex-1 ${customThemes}`}
      style={{
        flex: 1,
        marginTop:
          Platform.OS === "android"
            ? Constants.statusBarHeight + 20
            : Constants.statusBarHeight,
        paddingHorizontal: 15,
        paddingBottom: 40,
      }}
    >
      {children}
    </View>
  );
}
