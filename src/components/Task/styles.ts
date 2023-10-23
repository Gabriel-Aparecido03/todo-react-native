import { StyleSheet } from "react-native";
import { colorPallete } from "../../styles/colorPallete";

export const styles = StyleSheet.create({
  container : {
    minHeight : 46,
    padding : 12,
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
    borderWidth : 1,
    borderStyle : "solid",
    backgroundColor: colorPallete.gray500,
    borderRadius : 8,
    marginBottom : 8,
    margin : 12,
    gap : 16
  }
})