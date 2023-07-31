import Information from "./Components/Home/Information";
import Subscribe from "./Components/Home/Subscribe";
import Image from "./Components/Home/Image";

function App() {
  const onSubscribe = () => {
    //add logic for routing to confirmed page
  };

  return (
    <div className="container">
      <div className="left-column">
        <Information />
        <Subscribe onSubscribe={onSubscribe} />
      </div>
      <div className="right-column">
        <Image />
      </div>
    </div>
  );
}

export default App;
