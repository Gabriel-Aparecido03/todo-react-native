import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import LogoImg from '../../assets/Logo.png'
import { colorPallete } from "../../styles/colorPallete";
import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";

interface HeaderPropsType {
  addTask(title: string): void
}

export function Header({ addTask }:HeaderPropsType) {

  function handleAddTask() {
    addTask(taskText)
    setTaskText('')
  }

  const [ taskText,setTaskText ] = useState('')
  return (
    <View style={styles.container}>
      <Image source={LogoImg} />
      <View style={styles.containerText}>
        <TextInput 
          placeholderTextColor={colorPallete.gray300}
          style={styles.textInput}
          selectionColor={colorPallete.purple}
          onChangeText={setTaskText}
          value={taskText}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleAddTask}>
          <PlusCircle color={colorPallete.gray100} />
        </TouchableOpacity>
      </View>
    </View>
  )
}