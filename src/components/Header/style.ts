import { StyleSheet } from "react-native";
import { colorPallete } from "../../styles/colorPallete";

export const styles = StyleSheet.create({
  container : {
    backgroundColor : colorPallete.gray700,
    width : "100%",
    justifyContent:"center",
    alignItems : "center",
    height : 200,
    position : "relative"
  },
  containerText : {
    paddingTop : 1.5,
    justifyContent : "center",
    flexDirection : "row",
    position : "absolute",
    bottom : -27
  },
  button : {
    backgroundColor : colorPallete.blue,
    justifyContent : "center",
    alignItems : "center",
    borderRadius : 6,
    width : 46
  },
  textInput : {
    backgroundColor : colorPallete.gray500,
    padding : 1,
    borderRadius : 6,
    borderColor : "transparent",
    borderWidth : 1,
    borderStyle : "solid",
    height : 54,
    marginHorizontal : 20,
    width : "80%"
  }
})