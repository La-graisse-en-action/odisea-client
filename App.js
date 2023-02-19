import { withExpoSnack } from 'nativewind'
import { NativeRouter, Route, Routes } from 'react-router-native'
import WelcomePage from './pages/main'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </NativeRouter>
  );
}

export default withExpoSnack(App)
