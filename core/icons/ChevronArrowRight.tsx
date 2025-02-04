import { Svg, Path, Defs, G, Rect, ClipPath } from "react-native-svg";
import View from "../StyledView";
import type { IconProps } from "types";

export default function ChevronArrowRight({
  color = "#000",
  className = "",
}: IconProps) {
  return (
    <View className={className}>
      <Svg width="11" height="20" viewBox="0 0 11 20" fill="none">
        <G clipPath="url(#clip0_274_1483)">
          <Path
            d="M0.431763 19.1C0.181763 18.85 0.0567627 18.554 0.0567627 18.212C0.0567627 17.8707 0.181763 17.575 0.431763 17.325L7.75676 10L0.406763 2.65C0.173429 2.41667 0.0567627 2.125 0.0567627 1.775C0.0567627 1.425 0.181763 1.125 0.431763 0.875C0.681763 0.625 0.977763 0.5 1.31976 0.5C1.6611 0.5 1.95676 0.625 2.20676 0.875L10.6068 9.3C10.7068 9.4 10.7778 9.50833 10.8198 9.625C10.8611 9.74167 10.8818 9.86667 10.8818 10C10.8818 10.1333 10.8611 10.2583 10.8198 10.375C10.7778 10.4917 10.7068 10.6 10.6068 10.7L2.18176 19.125C1.94843 19.3583 1.6611 19.475 1.31976 19.475C0.977763 19.475 0.681763 19.35 0.431763 19.1Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_274_1483">
            <Rect width="11" height="20" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
}
