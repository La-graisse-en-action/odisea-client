import React from 'react'
import View from '../../core/StyledView'
import { styled } from 'nativewind'
import { TextInput } from 'react-native'

const StyledTextInput = styled(TextInput)
export default function Input({ value, setValue, placeholder, keyboardType, keyboardAppearance, autoComplete, inputMode, InputIcon }) {
  return (
    <View className="flex flex-row gapx-2 rounded-[30px] h-[60px] pl-[15px] font-semibold items-center justify-start border-2 border-gray-300">
      {InputIcon ? <InputIcon /> : <></>}
      <StyledTextInput
        value={value}
        onChangeText={setValue}
        inputMode={inputMode}
        placeholder={placeholder}
        placeholderTextColor="#e9e9e9c1"
        keyboardType={keyboardType}
        keyboardAppearance={keyboardAppearance}
        autoComplete={autoComplete}
        className="flex-1 font-semibold text-white h-full w-full bg-transparent ml-2 rounded-r-[30px]"
        autoCorrect={false}
      />
    </View>
  )
}
