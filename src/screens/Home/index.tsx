import { FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { StatusBar } from "../../components/StatusBar";
import { Task } from "../../components/Task";
import { EmptyItems } from "../../components/EmptyItem";
import { useState } from "react";
import { styles } from "./style";

interface TaskInteface {
  title : string
  id : string
  isDone: boolean
}

export function Home() {

  const [ tasks,setTasks ] = useState<TaskInteface[]>([])

  function addTask(title:string) {

    const obj = {
      id : String(tasks.length),
      title,
      isDone : false
    }

    setTasks(prev => [...prev,obj])
  }

  function toogleCompletedTask( id : string ) {
    const index = tasks.findIndex(item => item.id === id)
    const toogleItem = tasks[index]
    toogleItem.isDone = !toogleItem.isDone
    setTasks(prev => prev.splice(index,1,toogleItem))
  }

  function deleteTask( id : string ) {
    setTasks(prev => prev.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header addTask={addTask}/>
      <StatusBar created={String(tasks.length)} isDone={String(tasks.filter(item => item.isDone).length)} />
      <FlatList
        renderItem={({item})=> 
          <Task 
            deleteTask={deleteTask} 
            id={item.id} 
            isDone={item.isDone} 
            text={item.title} 
            toogleCompletedTask={toogleCompletedTask} 
          />}
        data={tasks}
        ListEmptyComponent={
          <View style={{ flex : 1}}>
            <EmptyItems/>
          </View>
        }
      />
    </View>
  )
}