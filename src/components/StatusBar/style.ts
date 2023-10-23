import { StyleSheet } from "react-native";
import { colorPallete } from "../../styles/colorPallete";

export const styles = StyleSheet.create({
  container : {
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems: "center",
    width : "100%",
    marginTop : 32,
    paddingHorizontal : 18,
    paddingVertical : 20
  },
  numberSquare : {
    borderRadius : 42,
    backgroundColor : colorPallete.gray400,
    width : 26,
    height : 24,
    alignItems : "center",
    justifyContent : "center",
  },
  numberSquareText : {
    color : colorPallete.gray100,
    fontWeight : "700",
    fontSize : 12
  }
})