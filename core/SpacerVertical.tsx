import View from "./StyledView";

export default function Spacer({
  className,
  height,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <View
      className={`flex-1 w-full ${className}`}
      style={{
        height: height ?? 24,
      }}
    />
  );
}
