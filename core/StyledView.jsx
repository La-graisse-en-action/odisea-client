import { View as NativeView } from "react-native"
import { styled } from "nativewind"

const StyledView = styled(NativeView)
export default function View({ children, ...props }) {
  return (
    <StyledView {...props}>
      {children}
    </StyledView>
  )
}
