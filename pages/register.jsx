import Layout from '../components/shared/Layout'
import { ImageBackground, SafeAreaView } from 'react-native'
import View from '../core/StyledView'
import Text from '../core/StyledText'
import ArrowLeft from '../core/icons/ArrowLeft'
import { Link } from 'react-router-native'
import { useState } from 'react'
import EmailInputIcon from '../core/icons/EmailInputIcon'
import Input from "../components/registerPage/Input"
import Spacer from '../core/Spacer'
import UserOutline from '../core/icons/UserOutline'
import PasswordInputIcon from '../core/icons/PasswordInputIcon'
import GoogleIcon from '../core/icons/GoogleIcon'
import PlatformBtn from '../components/registerPage/PlatformBtn'
import FacebookIcon from '../core/icons/FacebookIcon'
import SpacerHorizontal from '../core/SpacerHorizontal'
import ChevronArrowRight from '../core/icons/ChevronArrowRight'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ImageBackground source={require("../assets/registerPage/bg.png")} resizeMode="center" style={{
      flex: 1,
      justifyContent: 'space-between',
    }}>
      <Layout>
        <View className="flex flex-row items-center justify-start mb-[45px]">
          <Link to="/">
            <ArrowLeft />
          </Link>
          <Text className="text-white mx-auto font-bold text-2xl my-0">Crear cuenta</Text>
        </View>
        <SafeAreaView>
          <Input
            InputIcon={UserOutline}
            value={username}
            setValue={setUsername}
            inputMode="text"
            placeholder='Nombre de Usuario'
            keyboardType='default'
            keyboardAppearance='light'
            autoComplete='username'
          />
          <Spacer />
          <Input
            InputIcon={EmailInputIcon}
            value={email.toLowerCase()}
            setValue={(text) => { setEmail(text.toLowerCase()) }}
            inputMode="email"
            placeholder='Correo electrónico'
            keyboardType='email-address'
            keyboardAppearance='light'
            autoComplete='email'
          />
          <Spacer />
          <Input
            InputIcon={PasswordInputIcon}
            value={password}
            setValue={setPassword}
            inputMode="password"
            placeholder='Contraseña'
            keyboardType='default'
            keyboardAppearance='light'
            autoComplete='new-password'
          />
        </SafeAreaView>
        <Text className="text-[#505050] text-[14px] font-bold text-center mt-[40px] mb-[15px]">O registrate con</Text>
        <View className="flex flex-row items-center justify-center">
          <PlatformBtn label="Google" Icon={GoogleIcon} />
          <SpacerHorizontal />
          <PlatformBtn label="Facebook" Icon={FacebookIcon} />
        </View>
        <View>
          <Link to="/login">
            <Text className="text-[#505050] text-center mt-[30px] font-semibold text-[16px] flex items-center">
              Ya tienes una cuenta?{' '}
              <Text className="text-blue-500 font-bold text-[16px]">Login</Text>
            </Text>
          </Link>
        </View>
        <View className="flex flex-row justify-end items-center absolute bottom-10 right-[15px] bg-white">
          <Text className="font-bold text-xl mr-4">Registrarse</Text>
          <ChevronArrowRight />
        </View>
      </Layout>
    </ImageBackground >
  )
}
