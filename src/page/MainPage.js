import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import AddVtuber from "../components/AddVtuber";
import List from "../components/List";

const MainPage = (props) => {
  const [VtubeList, VtubeListSet] = useState([]);

  // const AddVtubeHandler = (vName, vAge) => {
  //   VtubeListSet((prevVtubeList) => {
  //     return [...prevVtubeList, { name: vName, age: vAge, id: Math.random().toString() }]
  //   });
  //   console.log(VtubeList)
  // };

  const url =
    "https://vtubelist-6e098-default-rtdb.firebaseio.com/vtubers.json";

  const postlist = async (vName, vAge, vTeam) => {
    try {
      const response = await axios.post(url, {
        name: vName,
        age: vAge,
        team: vTeam,
        id: Math.random().toString(),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //파이어베이스 리스트중 내가 delete 버튼을 클릭한 리스트만 삭제
  const deletelist = async (vid) => {
    try {
      const response = await axios.delete(`${url}/${vid}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getlist = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;

        const vtuberArray = Object.entries(data).map(([key, value]) => {
          return {
            id: key,
            name: value.name,
            age: value.age,
            team: value.team,
          };
        });
        JSON.stringify(vtuberArray);

        VtubeListSet(vtuberArray);
      } catch (error) {
        console.log(error);
      }
    };
    getlist();
  }, []);

  return (
    <div>
      <Header />
      <AddVtuber AddList={postlist} />
      <List vtubes={VtubeList} delete={deletelist} />
    </div>
  );
};

export default MainPage;
