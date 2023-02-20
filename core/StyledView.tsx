import { View as NativeView, StyleProp, ViewStyle } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(NativeView);
export default function View({
  children,
  className,
  style,
  ...props
}: {
  children?: any;
  className?: string;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <StyledView className={className} style={style} {...props}>
      {children}
    </StyledView>
  );
}
