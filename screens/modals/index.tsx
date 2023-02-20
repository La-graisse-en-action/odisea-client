import type { Screen } from "../index";
import PrivacyPolicyModal from "./PrivacyPolicy";
import TermsAndConditionsModal from "./TermsAndConditions";
import { StackNavigationOptions } from "@react-navigation/stack";

interface Modal extends Screen {
  options: StackNavigationOptions;
}

export const modals: Modal[] = [
  {
    name: "termsConditions",
    component: TermsAndConditionsModal,
    options: {
      headerBackTitle: "Volver",
      headerTitle: "Términos y Condiciones",
    },
  },
  {
    name: "privacyPolicy",
    component: PrivacyPolicyModal,
    options: {
      headerBackTitle: "Volver",
      headerTitle: "Aviso de Privacidad",
    },
  },
];
