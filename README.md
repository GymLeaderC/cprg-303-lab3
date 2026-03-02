# Lab Assignment 3: Props and State Management

### In this lab assignment, you will practice passing tasks to the ToDoList component using props. You will create a hard-coded list of tasks in the index.jsx file and then pass these tasks to the ToDoList component.

## Instructions
### Part A: State Management
1. Open the "App.jsx" file.
2. Import the useState hook from React.
3. Use the useState hook to define a state variable to store the list of tasks.
4. Initialize the state with the following array of hard-coded tasks:
```
[
  'Do laundry',
  'Go to gym',
  'Walk dog'
]
```
### Part B: Passing Props
#### Step 1: Pass Tasks Using Props
Inside the return statement of the App component, pass the tasks array to the ToDoList component using the tasks prop:
```
<ToDoList tasks={tasks} />
```
### Step 2: Display the Task List
1. In the ToDoList component's function parameters, destructure the tasks prop:
```
function ToDoList({ tasks }) {
  /* ... */
}
```
2. Use the map function to dynamically render each task as a list item on the screen.
Leave each task item styled as incomplete.
