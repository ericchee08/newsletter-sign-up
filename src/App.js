import Information from "./Components/HomePage/Information";
import Subscribe from "./Components/HomePage/Subscribe";
import Image from "./Components/HomePage/Image";
import SuccessPage from "./Components/SuccessPage/SuccessPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const onSubscribe = () => {
    //add logic for routing to confirmed page
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="left-column">
                <Information />
                <Subscribe onSubscribe={onSubscribe} />
              </div>
              <div className="right-column">
                <Image />
              </div>
            </div>
          }
        />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
