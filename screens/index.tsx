import LoginPage from "./login";
import RegisterPage from "./register";
import WelcomePage from "./welcome";

export interface Screen {
  name: string;
  component: any;
  headerShown?: boolean;
}

export const screens: Screen[] = [
  {
    name: "welcome",
    component: WelcomePage,
  },
  {
    name: "login",
    component: LoginPage,
  },
  {
    name: "register",
    component: RegisterPage,
  },
];
