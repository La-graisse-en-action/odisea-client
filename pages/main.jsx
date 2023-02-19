import 'react-native-reanimated'
import 'react-native-gesture-handler'
import Layout from '../components/shared/Layout'
import Text from '../core/StyledText'
import View from '../core/StyledView'
import FormButton from '../components/welcomePage/FormButtons'
import { ImageBackground, TouchableWithoutFeedback } from 'react-native'
import Fade from '../core/Transitions/Fade'

export default function WelcomePage() {
  return (
    <ImageBackground source={require("../assets/welcomePage/bg.png")} resizeMode="center" style={{
      flex: 1,
      justifyContent: 'space-between',
    }}>
      <Layout customThemes="justify-between">
        <Fade>
          <View>
            <Text className="text-4xl flex flex-row items-center font-bold text-center">
              <Text className="text-white shadow-sm">
                Hey!
              </Text>
              {' '}
              Welcome to your Journey
            </Text>
          </View>
        </Fade>
        <View>
          <FormButton asLink href={"/login"}>
            Iniciar Sesion
          </FormButton>
          <View className="mt-6">
            <Text className="text-center text-xs font-semibold mx-auto text-[#505050] mb-[5px]">No tienes una cuenta aun?</Text>
            <FormButton asLink href={"/register"}>Registrarse</FormButton>
          </View>
          <InfoLink label={"Conoce nuestros"} link="Términos y Condiciones" />
          <InfoLink label={"Lee nuestro"} link="Aviso de privacidad" />
        </View>
      </Layout>
    </ImageBackground>
  )
}

function InfoLink({ label, link, onPress }) {
  return (
    <Text className="text-center font-semibold text-xs w-[215px] mx-auto mt-[15px]">
      {label}{' '}
      <TouchableWithoutFeedback onPress={onPress}>
        <Text className="text-blue-400 text-xs">
          {link}
        </Text>
      </TouchableWithoutFeedback>
    </Text>
  )
}
