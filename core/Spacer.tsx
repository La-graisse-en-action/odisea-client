import View from "./StyledView";

export default function Spacer({ className }: { className?: string }) {
  return <View className={`flex-1 h-6 w-full ${className}`} />;
}
