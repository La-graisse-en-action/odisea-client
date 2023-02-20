import View from "./StyledView";

export default function SpacerHorizontal({
  className,
}: {
  className?: string;
}) {
  return <View className={`h-0 w-[15px] ${className}`} />;
}
