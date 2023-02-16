import { withExpoSnack } from 'nativewind'
import Layout from './components/shared/Layout'
import { NativeRouter, Route, Routes } from 'react-router-native'

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </NativeRouter>
  );
}

export default withExpoSnack(App)
