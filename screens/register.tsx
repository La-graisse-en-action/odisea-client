import Layout from "../components/shared/Layout";
import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
} from "react-native";
import View from "../core/StyledView";
import Text from "../core/StyledText";
import ArrowLeft from "../core/icons/ArrowLeft";
import { useState } from "react";
import EmailInputIcon from "../core/icons/EmailInputIcon";
import Input from "../components/registerPage/Input";
import Spacer from "../core/SpacerVertical";
import UserOutline from "../core/icons/UserOutline";
import PasswordInputIcon from "../core/icons/PasswordInputIcon";
import GoogleIcon from "../core/icons/GoogleIcon";
import PlatformBtn from "../components/registerPage/PlatformBtn";
import FacebookIcon from "../core/icons/FacebookIcon";
import SpacerHorizontal from "../core/SpacerHorizontal";
import ChevronArrowRight from "../core/icons/ChevronArrowRight";
import Fade from "../core/Transitions/Fade";
import { Link } from "@react-navigation/native";

const dimensions = Dimensions.get("window");
export default function RegisterPage() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  return (
    <ImageBackground
      source={require("../assets/registerPage/bg.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "space-between",
        position: "absolute",
        width: dimensions.width,
        height: dimensions.height,
      }}
    >
      <Layout>
        <View
          style={{
            marginBottom: 45,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Link
            to={{
              screen: "welcome",
              params: {} as never,
            }}
          >
            <ArrowLeft />
          </Link>
          <Text className="text-white text-left ml-6 w-full font-bold text-2xl my-0">
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
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <Text
            className="font-bold text-center"
            style={{
              color: "#505050",
              fontSize: 16,
            }}
          >
            O registrate con
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Fade>
            <PlatformBtn label="Google" Icon={GoogleIcon} />
          </Fade>
          <SpacerHorizontal />
          <Fade>
            <PlatformBtn label="Facebook" Icon={FacebookIcon} />
          </Fade>
        </View>
        <View>
          <Text
            className="text-center font-semibold flex items-center"
            style={{
              color: "#505050",
              fontSize: 16,
              marginTop: 30,
            }}
          >
            Ya tienes una cuenta?{" "}
            <Link
              to={{
                screen: "login",
                params: {} as never,
              }}
              style={{
                marginTop: 30,
              }}
            >
              <Text
                className="text-blue-500 font-bold"
                style={{
                  fontSize: 16,
                }}
              >
                Login
              </Text>
            </Link>
          </Text>
        </View>
        <View
          className="flex flex-row justify-end items-center bg-white w-full"
          style={{
            padding: 10,
            borderRadius: 10,
            position: "absolute",
            bottom: 25,
            right: 15,
          }}
        >
          <Text
            className="font-bold mr-4"
            style={{
              fontSize: Platform.OS === "android" ? 30 : 24,
              lineHeight: Platform.OS === "android" ? 36 : 22,
            }}
          >
            Registrarse
          </Text>
          <ChevronArrowRight />
        </View>
      </Layout>
    </ImageBackground>
  );
}
