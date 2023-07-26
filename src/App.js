import Information from "./Components/Information";
import Subscribe from "./Components/Subscribe";
import Image from "./Components/Image";

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
