import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);
  //sat used to compare changes in state
  //setSat is a function that will be used to update the state
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  //This variable will use the Set method to create a new array that holds
  //unique elements. This function will be used to create the buttons, so we
  // want to pull out the orbitType values of each object inside satData. The
  //Set method prevents duplicate elements. We are using it because there are
  //only three types of orbitTypes: Low, Medium, and High. This will eventually create three buttons. If we only used map, we would create 10 buttons, and many of them would be duplicates.
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };
  return (
    <div>
      <Banner
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
