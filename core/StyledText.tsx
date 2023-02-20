import { styled } from "nativewind";
import { Text as NativeText } from "react-native";

const StyledText = styled(NativeText);
export default function Text({
  children,
  className,
  ...props
}: {
  children?: any;
  className?: string;
}) {
  return (
    <StyledText className={className} {...props}>
      {children}
    </StyledText>
  );
}
