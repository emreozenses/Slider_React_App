import { useState } from "react";
import { shortList,list,longList } from "./data"
import Carousel from "./Carousel";

const App = () => {
const [peopleList,setPeopleList] = useState(shortList);


  return (
    <main>
      <Carousel/>
    </main>
  );
};
export default App;
