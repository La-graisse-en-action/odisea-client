import View from "./StyledView"

export default function Spacer({ className }) {
  return (
    <View className={`flex-1 h-6 w-full ${className}`} />
  )
}
