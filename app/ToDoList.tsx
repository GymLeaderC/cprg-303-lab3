/**
 * @author Joshua Couto
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Lab 2: Layout Components
 * Created: 02.19.26
 */

import React from 'react';
import { StyleSheet, ScrollView, Pressable, View, Text } from 'react-native';

interface ToDoListProps {
  tasks: string[];
}

function ToDoList({ tasks }: ToDoListProps) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
      </Pressable>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;