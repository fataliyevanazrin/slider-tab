import {longList} from "./data.js";
import Slider from "./Slider.jsx";
import {useState} from "react";
const App = () => {
    const [index, setIndex] = useState(0);
    const person = longList[index];
  return (
    <main className="main">
        <Slider person={person} index={index} setIndex={setIndex} />
    </main>
  );
};
export default App;
