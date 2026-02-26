import { Stack } from "expo-router"; // navegação em pilha, uma tela vai abrir sobre a outra, deixa mais rápido as coisas, mas provavelmente mais pesado caso seja mt grande o app

export default function Layout() {
  return <Stack screenOptions={{
    headerShown: false,
  }}/>
}