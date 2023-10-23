import { colorPallete } from "../../styles/colorPallete";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Clipboard } from "phosphor-react-native";

export function EmptyItems() {
  return (
    <View style={styles.container}>
      <Clipboard size={56} color={colorPallete.gray500} weight="bold" />
      <View style={{ marginTop : 16}}>
        <Text style={{ fontSize: 14, fontWeight: "700", color: colorPallete.gray300 }}>
          You don't have any task
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "400", color: colorPallete.gray300 }}>
          Creted task and organize your day
        </Text>
      </View>
    </View>
  )
}