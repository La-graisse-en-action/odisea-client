import React from "react";
import { Svg, Path } from "react-native-svg";
import View from "../StyledView";
import type { IconProps } from "types";

export default function ArrowLeft({
  color = "#fff",
  className = "",
}: IconProps) {
  return (
    <View className={className}>
      <Svg width="27" height="17" viewBox="0 0 27 17" fill="none">
        <Path
          d="M10.878 0.457401C11.2247 0.762335 11.3911 1.13079 11.3773 1.56278C11.3622 1.99477 11.1814 2.36323 10.8347 2.66816L5.9374 6.97534L25.2665 6.97534C25.7576 6.97534 26.1696 7.12171 26.5025 7.41444C26.8342 7.70616 27 8.06801 27 8.5C27 8.93199 26.8342 9.29435 26.5025 9.58709C26.1696 9.87881 25.7576 10.0247 25.2665 10.0247L5.9374 10.0247L10.878 14.37C11.2247 14.6749 11.3981 15.0373 11.3981 15.457C11.3981 15.8758 11.2247 16.2377 10.878 16.5426C10.5313 16.8475 10.1193 17 9.64199 17C9.16585 17 8.75442 16.8475 8.40771 16.5426L0.476728 9.56727C0.303373 9.4148 0.18029 9.24963 0.107481 9.07175C0.0358276 8.89387 0 8.70329 0 8.5C0 8.29671 0.0358276 8.10613 0.107481 7.92825C0.18029 7.75037 0.303373 7.5852 0.476728 7.43274L8.45105 0.419285C8.76886 0.139763 9.16585 0 9.64199 0C10.1193 0 10.5313 0.152468 10.878 0.457401Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}
