import { useState } from "react"
import TodoListComp from "./TodoList-comp"

function TodoList(prop){

   const myActivity=prop.myActivity  
   const setActivity = prop.setActivity
    return(
        <div className="bg-purple-300 flex-grow p-5 border rounded-md">
        <p className="text-xl font-medium">Today's Activity</p>
        {
            myActivity.length === 0 ? <p>you haven't added any activity yet</p> : ""
        }
        {
            myActivity.map(
                (item, index) =>{
                    return(
                        <>
                        <TodoListComp setActivity={setActivity} myActivity = {myActivity} activity = {item.activity} index = {index} id={item.id} />
                        </>
                    )
                }
            )
        }
      </div>
    )
}

export default TodoList 