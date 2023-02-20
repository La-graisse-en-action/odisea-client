import Layout from "../components/shared/Layout";
import { ImageBackground, SafeAreaView } from "react-native";
import View from "../core/StyledView";
import Text from "../core/StyledText";
import ArrowLeft from "../core/icons/ArrowLeft";
import { useState } from "react";
import EmailInputIcon from "../core/icons/EmailInputIcon";
import Input from "../components/registerPage/Input";
import Spacer from "../core/Spacer";
import UserOutline from "../core/icons/UserOutline";
import PasswordInputIcon from "../core/icons/PasswordInputIcon";
import GoogleIcon from "../core/icons/GoogleIcon";
import PlatformBtn from "../components/registerPage/PlatformBtn";
import FacebookIcon from "../core/icons/FacebookIcon";
import SpacerHorizontal from "../core/SpacerHorizontal";
import ChevronArrowRight from "../core/icons/ChevronArrowRight";
import Fade from "../core/Transitions/Fade";
import { Link } from "@react-navigation/native";

export default function RegisterPage() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  return (
    <ImageBackground
      source={require("../assets/registerPage/bg.png")}
      resizeMode="center"
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Layout>
        <View className="flex flex-row items-center justify-start mb-[45px]">
          <Link
            to={{
              screen: "welcome",
              params: {} as never,
            }}
          >
            <ArrowLeft />
          </Link>
          <Text className="text-white text-center w-full font-bold text-2xl my-0">
            Crear cuenta
          </Text>
        </View>
        <SafeAreaView>
          <Input
            InputIcon={UserOutline}
            value={username}
            setValue={setUsername}
            inputMode="text"
            placeholder="Nombre de Usuario"
            keyboardType="default"
            keyboardAppearance="light"
            autoComplete="username"
          />
          <Spacer />
          <Input
            InputIcon={EmailInputIcon}
            value={email.toLowerCase()}
            setValue={(text: string) => {
              setEmail(text.toLowerCase());
            }}
            inputMode="email"
            placeholder="Correo electrónico"
            keyboardType="email-address"
            keyboardAppearance="light"
            autoComplete="email"
          />
          <Spacer />
          <Input
            InputIcon={PasswordInputIcon}
            value={password}
            setValue={setPassword}
            inputMode="text"
            placeholder="Contraseña"
            keyboardType="default"
            keyboardAppearance="light"
            autoComplete="password-new"
          />
          <Spacer />
          <Input
            InputIcon={PasswordInputIcon}
            value={passwordConfirm}
            setValue={setPasswordConfirm}
            inputMode="text"
            placeholder="Confirma tu contraseña"
            keyboardType="default"
            keyboardAppearance="light"
            autoComplete="password-new"
          />
        </SafeAreaView>
        <Text className="text-[#505050] text-[14px] font-bold text-center mt-[40px] mb-[15px]">
          O registrate con
        </Text>
        <View className="flex flex-row items-center justify-center">
          <Fade>
            <PlatformBtn label="Google" Icon={GoogleIcon} />
          </Fade>
          <SpacerHorizontal />
          <Fade>
            <PlatformBtn label="Facebook" Icon={FacebookIcon} />
          </Fade>
        </View>
        <View>
          <Link
            to={{
              screen: "login",
              params: {} as never,
            }}
            style={{
              marginTop: 30,
            }}
          >
            <Text className="text-[#505050] text-center font-semibold text-[16px] flex items-center">
              Ya tienes una cuenta?{" "}
              <Text className="text-blue-500 font-bold text-[16px]">Login</Text>
            </Text>
          </Link>
        </View>
        <View className="flex flex-row justify-end items-center absolute bottom-10 right-[15px] bg-white">
          <Text className="font-bold text-xl mr-4">Registrarse</Text>
          <ChevronArrowRight />
        </View>
      </Layout>
    </ImageBackground>
  );
}
