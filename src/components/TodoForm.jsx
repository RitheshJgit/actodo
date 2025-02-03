import { useState } from "react"

function TodoForm(prop){
    const myActivity=prop.myActivity  
    const setActivity = prop.setActivity
    const[list, setList] = useState()

    function handleInput(e) {
        setList(e.target.value)
    }
    function handleAdd(){
        setActivity([...myActivity, {id: myActivity.length + 1, activity: list}])
    }
    return(
        <div>
        <p className="text-xl font-medium">Manage Activites</p>
        <div>
          <input
            type="text"
            placeholder=""
            className="border border-black "
            onChange={handleInput}
          />
          <button className="bg-black text-white border border-black"
           onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>     
    )
}

export default TodoForm