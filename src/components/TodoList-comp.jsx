import img from "./delete.png";
function TodoListComp(prop) {
  const myActivity = prop.myActivity;
  const setActivity = prop.setActivity;

  function handleDelete(removeTask) {
    var deleteTask = myActivity.filter(function (item) {
      if (item.id == removeTask) {
        return false;
      } else {
        return true;
      }
    });

    setActivity(deleteTask);
  }
  return (
    <>
      
       
       <div className="flex justify-between">
      <p>{prop.index + 1}. {prop.activity}{" "}</p> 
       <button className="text-red-500 flex items-center" onClick={() => handleDelete(prop.id)}aria-label="Delete activity"><img src={img} alt="Delete" height="15" width="15" /></button>
       </div>
      
    </>
  );
}

export default TodoListComp;
