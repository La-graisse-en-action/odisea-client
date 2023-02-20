import { styled } from "nativewind";
import { Text as NativeText, StyleProp, TextStyle } from "react-native";

const StyledText = styled(NativeText);
export default function Text({
  children,
  className,
  style,
  ...props
}: {
  children?: any;
  className?: string;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <StyledText className={className} style={style} {...props}>
      {children}
    </StyledText>
  );
}
