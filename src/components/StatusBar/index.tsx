import { Text, View } from "react-native";
import { styles } from "./style";
import { colorPallete } from "../../styles/colorPallete";

interface StatusBar {
  isDone : string
  created : string
}

export function StatusBar({ created,isDone }:StatusBar) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection : "row", alignItems : "center", gap : 12}}>
        <Text 
          style={
            { 
              color : colorPallete.blue,
              fontSize : 14,
              fontWeight : "700"}
            }
          >
          Created
        </Text>
        <View style={styles.numberSquare}>
          <Text style={styles.numberSquareText}>{created}</Text>
        </View>
      </View>
      <View style={{ flexDirection : "row", alignItems : "center", gap : 12}}>
        <Text 
          style={
            { 
              color : colorPallete.purple,
              fontSize : 14,
              fontWeight : "700"}
            }
          >
            Done
          </Text>
        <View style={styles.numberSquare}>
          <Text style={styles.numberSquareText}>{ isDone }</Text>
        </View>
      </View>
    </View>
  )
}