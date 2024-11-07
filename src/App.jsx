import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="flex max-w-[1440px] mx-auto space-x-5  overflow-x-auto p-2 mt-10 custom-scrollbar">
      <div className="card-section">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#d21010] rounded-l-full overflow-hidden"></div>
            <h4 className="text-lg">Incomplete</h4>
          </div>
          <p>0</p>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="card-section">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#00b5ff] rounded-l-full overflow-hidden"></div>
            <h4 className="text-lg">To Do</h4>
          </div>
          <p>0</p>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="card-section">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#ffe700] rounded-l-full overflow-hidden"></div>
            <h4 className="text-lg">Doing</h4>
          </div>
          <p>0</p>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="card-section">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h4 className="text-lg">Under Review</h4>
          </div>
          <p>0</p>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="card-section">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h4 className="text-lg">Completed</h4>
          </div>
          <p>0</p>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="card-section">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h4 className="text-lg">Overdue</h4>
          </div>
          <p>0</p>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
