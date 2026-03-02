/**
 *  @author Joshua Couto
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Lab 3: Props and State Management
 *  Created: 03.02.2026
 */

import { Text, SafeAreaView } from "react-native";
import { useState } from 'react';

import ToDoList from "./ToDoList";

export default function Index() {
  
  const [tasks, setTasks] = useState([
  'Do laundry' ,
  'Go to gym' ,
  'Walk dog' 
]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}
