import { styled } from "nativewind"
import { Text as NativeText } from "react-native"

const StyledText = styled(NativeText)
export default function Text({ children, ...props }) {
  return (
    <StyledText {...props}>{children}</StyledText>
  )
}
