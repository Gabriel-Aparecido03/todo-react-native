import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { colorPallete } from "../../styles/colorPallete";
import { CheckCircle, Circle, Trash } from "phosphor-react-native";

interface TaskPropsType {
  deleteTask(id: string): void
  toogleCompletedTask(id: string): void
  text : string
  isDone : boolean
  id:string
}

export function Task({ deleteTask,isDone,text,toogleCompletedTask,id }:TaskPropsType) {
  return (
    <View style={[styles.container,{ borderColor : isDone ? colorPallete.gray500 : colorPallete.gray300 }]}>
      <TouchableOpacity onPress={()=>{toogleCompletedTask(id)}}>
        { !isDone && <Circle color={colorPallete.blue} />}
        { isDone && <CheckCircle color={colorPallete.blue} />}
      </TouchableOpacity>
      <Text style={{ width : "80%",fontSize : 14, color : isDone ? colorPallete.gray300 : colorPallete.gray100,lineHeight : 21 , textDecorationLine : isDone ? "line-through":"none"}}>
        {text}
      </Text>
      <TouchableOpacity onPress={()=>{deleteTask(id)}}>
        <Trash color={colorPallete.gray300}/>
      </TouchableOpacity>
    </View>
  )
}