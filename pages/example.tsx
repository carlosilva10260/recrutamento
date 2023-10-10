import { useTodo } from "@/lib/frontend/hooks";
import { Button, Title } from "@mantine/core";
import { ActionIcon } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';


export default function Todo() {
  const { todos, addTodo,deleteTodo,deleteAll } = useTodo(["Todo #1", "Todo #2", "Todo #3"]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className=" h-fit w-2/3 rounded-lg border">
        <div className=" h-16 p-4 border-b gap-80 flex flex-row items-center">
          
          <Button onClick={addTodo}>Add new Todo</Button>
          <Button onClick={deleteAll}bg="#C23B2D">Delete all Todo's</Button>
        </div>
        <div className=" h-96 p-4 flex flex-col gap-2 overflow-y-scroll">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="w-full border rounded-lg flex flex-row items-center justify-between p-4"
            >
              <h2 className="text-xl font-semibold">{todo}</h2>
              <Button onClick= {() => deleteTodo(index)}bg="red" rightSection={<IconTrash/> }>Delete </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
