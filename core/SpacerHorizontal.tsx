import View from "./StyledView";

export default function SpacerHorizontal({
  className,
  width,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <View
      className={`h-0 ${className}`}
      style={{
        width: width ?? 15,
      }}
    />
  );
}
