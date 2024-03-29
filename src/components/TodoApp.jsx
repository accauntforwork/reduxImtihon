import  {  useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodoComplete,
  removeTodo,
  toggleTodoNotComplete
} from "../features/scile";


function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const inputRef = useRef();
  const [completed,setCompleted] = useState(0)
  const [uncompleted,setunCompleted] = useState(0)

  const handleAddTodo = (text) => {
    if(text){
        dispatch(addTodo(text))
    inputRef.current.value = "";
    // completedStatic++;
    setCompleted(completed+1)
    }else{
        alert("Todo bo'sh bo'lishi mumkin emas")
    }
  };
  const handleToggleTodoComplete = (id) => {
    dispatch(toggleTodoComplete(id));
    setunCompleted(uncompleted+1)
    setCompleted(completed-1)
  };
  const handleTodoNotComplete = (id) => {
    dispatch(toggleTodoNotComplete(id));
    setunCompleted(completed+1)
    setunCompleted(uncompleted-1)
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
    setCompleted(completed-1)
  };


  return (
    <div className="w-[500px]">
      <div className="flex mb-16 gap-4 mt-20">
        <input
          type="text"
          placeholder="Add a new task"
          className="input border-1 border-[#3E1671] w-full bg-transparent h-10 text-white"
          ref={inputRef}
        />
        <button
          className=" bg-[#9E78CF] text-2xl text-white rounded-lg px-3"
          onClick={() => handleAddTodo(inputRef.current.value)}
        >
          +
        </button>
      </div>
      <div>
        <h2 className="text-xl text-white mb-5">Tasks - {completed}</h2>
        <ul className="text-[#9E78CF] flex flex-col gap-4 max-h-[300px] overflow-y-auto">
          {todos.map((todo, index) =>
            todo.completed === false ? (
              <li
                className="flex bg-[#15101C] rounded-lg px-4 py-6 justify-between"
                key={index}
              >
                <span>{todo.text} </span>
                <div className="flex gap-4">
                  <img
                    className="cursor-pointer"
                    src="../../public/done.svg"
                    alt=""
                    onClick={() => handleToggleTodoComplete(todo.id)}
                  />
                  <img
                    className="cursor-pointer"
                    src="../../public/delete.svg"
                    alt=""
                    onClick={() => handleRemoveTodo(todo.id)}
                  />
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-xl text-white my-5">Done - {uncompleted}</h2>
        <ul className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
          {todos.map((todo, index) =>
            todo.completed === true ? (
              <li
                className="flex bg-[#15101C] rounded-lg px-4 py-6 justify-between text-[#6BCFB0] line-through"
                key={index}
              >
                <span>{todo.text} </span>
                <div className="flex gap-4">  
                  <img
                    className="cursor-pointer"
                    src="../../public/undo.png"
                    alt=""
                    onClick={() => handleTodoNotComplete(todo.id)}
                  />
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
