import React from "react";
import { Svg, Path } from "react-native-svg";
import View from "../StyledView";
import type { IconProps } from "types";

export default function ArrowRight({
  color = "#fff",
  className = "",
}: IconProps) {
  return (
    <View className={className}>
      <Svg width="17" height="14" viewBox="0 0 17 14" fill="none">
        <Path
          d="M10.1509 13.6233C9.93258 13.3722 9.8278 13.0688 9.83653 12.713C9.84599 12.3572 9.95987 12.0538 10.1782 11.8027L13.2616 8.2556H1.09149C0.782237 8.2556 0.522825 8.13507 0.313259 7.89399C0.10442 7.65375 0 7.35575 0 7C0 6.64424 0.10442 6.34583 0.313259 6.10475C0.522825 5.86451 0.782237 5.74439 1.09149 5.74439H13.2616L10.1509 2.16592C9.93258 1.9148 9.82343 1.61638 9.82343 1.27067C9.82343 0.925799 9.93258 0.627802 10.1509 0.376681C10.3692 0.12556 10.6286 0 10.9291 0C11.2289 0 11.488 0.12556 11.7063 0.376681L16.6998 6.12108C16.809 6.24664 16.8865 6.38266 16.9323 6.52915C16.9774 6.67563 17 6.83259 17 7C17 7.16741 16.9774 7.32436 16.9323 7.47085C16.8865 7.61734 16.809 7.75336 16.6998 7.87892L11.679 13.6547C11.4789 13.8849 11.2289 14 10.9291 14C10.6286 14 10.3692 13.8744 10.1509 13.6233Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}
