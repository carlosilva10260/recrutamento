import { useTodo } from "@/lib/frontend/hooks";
import { Button, Title } from "@mantine/core";
import { IconRecycle, IconRefresh, IconTrash, IconUpload } from '@tabler/icons-react';
import classes from "@/styles/index.module.css";
import { Image } from '@mantine/core';

export default function Todo() {
  const { todos, addTodo,deleteTodo,deleteAll,updateNs } = useTodo(["Todo #1", "Todo #2", "Todo #3"]);

  return (
    <div className="h-screen w-screen flex flex-col bg-teal-400 items-center justify-center">
      <Title order={3} className={classes.title + " text-center" }>
        <span className={classes.highlight}> To Do's</span> list
      </Title>
      <div className="h-2"></div>
      <div className=" h-fit w-2/3 bg-todos rounded-lg border">
        <div className=" h-16 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 border-b gap-20 flex flex-row items-center">
          
          <Button onClick={addTodo} bg= "grey" style ={{fill: "white" }} > Add new Todo</Button>
          <Button onClick={deleteAll}bg="#C23B2D">Delete all Todo's</Button>
          <Button onClick={updateNs}rightSection={<IconRefresh/>} bg="#53C72A"> Update N's</Button>
          <Image radius="md" h={60} w={"auto"} fit="contain" src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"/>
        </div>
        <div className=" h-96 p-4 flex flex-col gap-2 overflow-y-scroll">
          
          {todos.map((todo, index) => (
            <div
              key={index}
              className="w-full border bg-gradient-to-r from-blue-500 to-grey-100 rounded-lg flex flex-row items-center justify-between p-4"
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
