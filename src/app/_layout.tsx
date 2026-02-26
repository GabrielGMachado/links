import { Stack } from "expo-router"; // navegação em pilha, uma tela vai abrir sobre a outra, deixa mais rápido as coisas, mas provavelmente mais pesado caso seja mt grande o app

import { colors } from "@/styles/colors";

export default function Layout() {
  return <Stack 
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: colors.gray[950]}
      
  }}/>
}