import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";


type Props = TouchableOpacityProps & {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: "primary" | "secundary"
}

export function Option({ name, icon, variant = "primary", ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text>

      </Text>
      <MaterialIcons name={icon} size={20} color={variant === "primary" ? colors.green[300] : colors.gray[400]} />

      <Text style={variant === "primary" ? styles.primaryTitle : styles.seconderyTitle}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

