import './App.css';
import { Dashboards } from './components/Dashboards';
import { Linechart } from './components/Linechart';
import { Developmented } from './components/Developmented';
import { Cards } from './components/Cards';
import { Illustration } from './components/Illustration';
import {Piecharts} from "./components/Piecharts";
import {Sliders} from "./components/Sliders";
import {Swipebar} from "./components/Swipebar";
import {Vertical} from "./components/Vertical";

function App() {
  const items = [{
    name: "EARNINGS(MONTHLY)",
    number: "$40,000",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggZOZ3uGCAPWbWISphC1ubZycsXMjkxseBw&usqp=CAU",
    color: "blue"
  },
  {
    name: "EARNINGS(ANNUALY)",
    number: "$215,000",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8NAMOCndK2uc-iQ89DeucRK7nD1-Wcf54sg&usqp=CAU",
    color: "green",
  },
  {
    name: "TASKS",
    number: "50%",
    pic: "https://static.thenounproject.com/png/396626-200.png",
    color: "lightblue"
  },
  {
    name: "PENDING REQUESTS",
    number: "18",
    pic: "data:image/png;base64,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",
    color: "orange"
  },]



  return (
    <div className="App">
    <div className="division1">
      <Vertical />
      { /*to form a vertical menu */}
    </div>
    <div className="division2">
      <Swipebar />
      <Dashboards items={items} />
      <div className="charts">
        <div >
          <Linechart />
        </div>
        <div>
          <Piecharts />
        </div>
      </div>
      <div className="alignment">
        <div>
          <Sliders />
          <div className="card_aligment">
            <Cards />
          </div>
        </div>
        <div>
          <Illustration />
          <Developmented />
        </div>
      </div>
      <p className="copy">Copyright © Your Website 2021</p>
    </div>
  </div>
  );
}

export default App;
