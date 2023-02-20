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
      <View
        className="flex flex-row items-center"
        style={{
          backgroundColor: "#1A1A1A",
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
      >
        <Icon />
        <Text
          className="text-white font-bold"
          style={{
            paddingLeft: 10,
            fontSize: 20,
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
