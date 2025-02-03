import Header from "../components/Header";
import Card from "../components/Card";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { use, useState } from "react";
import { useLocation } from "react-router-dom";

function Landing(){
    const [myActivity, setActivity] = useState([]);
    const getData = useLocation();
  return (
    <div className="bg-black p-10">
      <div className="bg-white p-10 border rounded-md">
        {/*Header*/}
        <Header data = {getData.state.user} />

        {/*Cards*/}
        <div className="flex justify-between gap-3 my-5 flex-wrap">
          <Card color={"violet"} title={"Chennai"} subtitle={324}></Card>
          <Card color={"red"} title={"January"} subtitle={"07-01-2025"}></Card>
          <Card
            color={"orange"}
            title={"Built Using"}
            subtitle={"React"}
          ></Card>
        </div>

        <div className="flex justify-around gap-5 flex-wrap">
          {/*Todo Form*/}
          <TodoForm myActivity={myActivity} setActivity={setActivity} />

          {/*Todo Form*/}
          <TodoList myActivity={myActivity} setActivity={setActivity} />
        </div>
      </div>
    </div>
  );
}

export default Landing