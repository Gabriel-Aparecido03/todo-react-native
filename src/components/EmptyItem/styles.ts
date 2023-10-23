import { StyleSheet } from "react-native";
import { colorPallete } from "../../styles/colorPallete";

export const styles = StyleSheet.create({
  container : {
    flex : 1,
    borderTopColor : colorPallete.gray400,
    borderTopWidth : 1,
    borderStyle : "solid",
    justifyContent:"center",
    alignItems:"center",
    paddingTop : 48
  }
})