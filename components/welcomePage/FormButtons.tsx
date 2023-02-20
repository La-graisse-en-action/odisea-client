import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import View from "../../core/StyledView";
import Text from "../../core/StyledText";
import ArrowRight from "../../core/icons/ArrowRight";
import Fade from "../../core/Transitions/Fade";
import { Link } from "@react-navigation/native";

interface FormButtonProps {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
  asLink?: boolean;
  urlName?: string;
}

export default function FormButton({
  children,
  styles = {},
  asLink,
  urlName = "",
  ...props
}: FormButtonProps) {
  if (asLink)
    return (
      <Fade>
        <Link
          to={{
            screen: `${urlName}` as never,
            params: {} as never,
          }}
          style={{
            width: 265,
            marginLeft: "auto",
            marginRight: "auto",
            color: "#fff",
          }}
        >
          <View
            style={{
              ...(styles && {
                width: 265,
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 12,
                height: 45,
              }),
            }}
            className={`bg-black flex flex-row gap-x-2 items-center justify-center p-0 rounded-xl cursor-pointer mx-auto`}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 18,
                lineHeight: 28,
              }}
            >
              {children}
            </Text>
            <ArrowRight
              style={{
                marginLeft: 2,
              }}
            />
          </View>
        </Link>
      </Fade>
    );

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        ...(styles && {
          shadowColor: "#000",
          width: 265,
          marginLeft: "auto",
          marginRight: "auto",
          height: 45,
        }),
      }}
      {...props}
    >
      <Fade>
        <View
          className={`bg-black flex flex-row gap-x-2 items-center justify-center p-0 rounded-xl cursor-pointer`}
        >
          <Text className="text-white font-bold text-lg">{children}</Text>
          <ArrowRight
            style={{
              marginLeft: 2,
            }}
          />
        </View>
      </Fade>
    </TouchableOpacity>
  );
}
