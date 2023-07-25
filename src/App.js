import Information from "./Components/Information";
import Subscribe from "./Components/Subscribe";
import Image from "./Components/Image";

function App() {
  return (
    <div className="container">
      <div className="left-column">
        <Information />
        <Subscribe />
      </div>
      <div className="right-column">
        <Image />
      </div>
    </div>
  );
}

export default App;
