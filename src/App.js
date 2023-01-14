import React, {useState} from "react";
import Card from "./UI/Card";
import Header from "./components/Header";
import AddVtuber from "./components/AddVtuber";
import List from "./components/List";

function App() {
  const [VtubeList, VtubeListSet] = useState([]);

  const AddVtubeHandler = (vName, vAge) => {
    VtubeListSet((prevVtubeList) => {
      return [...prevVtubeList, { name: vName, age: vAge, id: Math.random().toString() }]
    });
    console.log(VtubeList)
  };

  return (
    <React.Fragment>
      <Header />
      <AddVtuber AddList={AddVtubeHandler}/>
      <List vtubes = {VtubeList}/>
    </React.Fragment>
  );
}

export default App;
