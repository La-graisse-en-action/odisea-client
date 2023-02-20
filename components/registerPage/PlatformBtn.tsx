import { TouchableWithoutFeedback } from "react-native";
import View from "../../core/StyledView";
import Text from "../../core/StyledText";

export default function PlatformBtn({
  label,
  Icon,
}: {
  label: string;
  Icon: any;
}) {
  return (
    <TouchableWithoutFeedback>
      <View className="bg-[#1A1A1A] flex flex-row items-center px-[10px] py-[8px] rounded-[10px]">
        <Icon />
        <Text className="text-white pl-[10px] font-bold text-[20px]">
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
