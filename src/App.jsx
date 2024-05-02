import { useState } from "react";
import { shortList,list,longList } from "./data"
import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";

const App = () => {
const [peopleList,setPeopleList] = useState(shortList);


  return (
    <main>
      {/*<Carousel/>*/}
      <SlickCarousel/>
    </main>
  );
};
export default App;
