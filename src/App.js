import { useEffect } from "react";
import "./App.css";
import Button from "./component/Button";
import Card from "./component/Card";
import Input from "./component/Input";
import { useWeather } from "./context/Weather";

function App() {
  const WeaherReport = useWeather();

  useEffect(() => {
    WeaherReport.fetchCurrentLocation();
  }, []);

  const handleClick = async (e) => {
    if (e.target.id === "sef") {
      WeaherReport.fetchData();
    } else if (e.target.id === "ref") {
      window.location.reload();
    }
  };

  return (
    <div className="App">
      <h1>Weaher Forecast</h1>
      <Input />
      <Button clas="sef" value="Search" onClick={handleClick} />
      <Card />
      <Button clas="ref" value="Refresh" onClick={handleClick} />
    </div>
  );
}

export default App;
