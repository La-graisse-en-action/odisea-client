import "react-native-reanimated";
import "react-native-gesture-handler";
import Layout from "../components/shared/Layout";
import Text from "../core/StyledText";
import View from "../core/StyledView";
import FormButton from "../components/welcomePage/FormButtons";
import {
  GestureResponderEvent,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import Fade from "../core/Transitions/Fade";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export default function WelcomePage({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  return (
    <ImageBackground
      source={require("../assets/welcomePage/bg.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Layout customThemes="justify-between">
        <Fade>
          <View>
            <Text
              style={{
                fontSize: 36,
                lineHeight: 40,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textShadowColor: "rgba(0, 0, 0, 0.25)",
                }}
              >
                Hey!
              </Text>{" "}
              Welcome to your Journey
            </Text>
          </View>
        </Fade>
        <View>
          <FormButton asLink urlName={"login"}>
            Iniciar Sesion
          </FormButton>
          <View className="mt-6">
            <Text
              className="text-center text-xs font-semibold mx-auto"
              style={{
                marginBottom: 5,
                color: "#505050",
              }}
            >
              No tienes una cuenta aun?
            </Text>
            <FormButton asLink urlName={"register"}>
              Registrarse
            </FormButton>
          </View>
          <InfoLink
            label={"Conoce nuestros"}
            link="Términos y Condiciones"
            onPress={() => navigation?.navigate("termsConditions")}
          />
          <InfoLink
            label={"Lee nuestro"}
            link="Aviso de privacidad"
            onPress={() => navigation?.navigate("privacyPolicy")}
          />
        </View>
      </Layout>
    </ImageBackground>
  );
}

function InfoLink({
  label,
  link,
  onPress,
}: {
  label: string;
  link: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}) {
  return (
    <Text
      className="text-center font-semibold text-xs mx-auto"
      style={{
        width: 215,
        marginTop: 15,
      }}
    >
      {label}{" "}
      <TouchableWithoutFeedback onPress={onPress}>
        <Text className="text-blue-400 text-xs">{link}</Text>
      </TouchableWithoutFeedback>
    </Text>
  );
}
