import { styled } from "nativewind"
import { View, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
import Constants from "expo-constants"

const StyledView = styled(View)

export default function Layout({ children }) {
  return (
    <StyledView className="flex-1 px-[15px]" style={{ marginTop: Constants.statusBarHeight }}>
      {children}
      <Text>
        This is a test
      </Text>
      <StatusBar style="auto" />
    </StyledView>
  )
}
