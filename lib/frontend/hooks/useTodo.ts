import { useState } from "react";

export function useTodo(initialItems?: string[]) {
  const [todos, setTodos] = useState<string[]>(initialItems || []);
  const [nextTodoNumber, setNextTodoNumber] = useState<number>(4);

  /* Add your todo methods here */


  
  const addItem = () => {
    setTodos((prevTodos) => [...prevTodos, `Todo #${nextTodoNumber}`]);
    setNextTodoNumber((prevNumber) => prevNumber + 1);
  };

  const removeItem = (indexToRemove: number) => {
    setTodos((prevTodos) => {
      // Create a copy of the previous todos array
      const newTodos = [...prevTodos];
      // Use splice to remove the item at the specified index
      newTodos.splice(indexToRemove, 1);
      return newTodos;
    });
  };


    const removeAll = () => {
      setTodos([]);
      setNextTodoNumber(1);
    };
  
  
  

  return {
    todos,
    addTodo: addItem,
    deleteTodo:removeItem,
    deleteAll:removeAll,
  };
}
