import {longList} from "./data.js";
import Slider from "./Slider.jsx";

const App = () => {
    return (
    <main className="main">
        <Slider people={longList}  />
    </main>
  );
};
export default App;
