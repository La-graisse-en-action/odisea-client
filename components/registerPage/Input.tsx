import React, { useState } from "react";
import View from "../../core/StyledView";
import { styled } from "nativewind";
import { InputModeOptions, KeyboardTypeOptions, TextInput } from "react-native";
import type { AutoComplete } from "types";

const StyledTextInput = styled(TextInput);

interface InputProps {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  keyboardAppearance?: "default" | "light" | "dark";
  autoComplete?: AutoComplete;
  inputMode?: InputModeOptions;
  InputIcon?: any;
}

export default function Input({
  value,
  setValue,
  placeholder,
  keyboardType,
  keyboardAppearance,
  autoComplete,
  inputMode,
  InputIcon,
}: InputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View
      className={`flex flex-row gapx-2 rounded-[30px] h-[60px] pl-[15px] font-semibold items-center justify-start border-2 ${
        isFocus ? "border-blue-400" : "border-gray-300"
      }`}
    >
      {InputIcon ? (
        <InputIcon color={isFocus ? "#38bdf8" : "#e9e9e9"} />
      ) : (
        <></>
      )}
      <StyledTextInput
        value={value}
        onChangeText={setValue}
        inputMode={inputMode}
        placeholder={placeholder}
        placeholderTextColor="#e9e9e9c1"
        keyboardType={keyboardType}
        keyboardAppearance={keyboardAppearance}
        autoComplete={autoComplete}
        className="flex-1 font-semibold text-white h-full w-full bg-transparent ml-2"
        autoCorrect={false}
        secureTextEntry={autoComplete?.includes("password")}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        importantForAutofill="no"
        style={{
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          backfaceVisibility: "hidden",
          backgroundColor: "transparent",
        }}
      />
    </View>
  );
}
