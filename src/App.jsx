import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="flex mx-5 space-x-3  overflow-x-auto p-2 mt-10 custom-scrollbar">
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#d21010] rounded-l-full overflow-hidden"></div>
            <h4 className="text-md">Incomplete</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#00b5ff] rounded-l-full overflow-hidden"></div>
            <h4 className="text-md">To Do</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#ffe700] rounded-l-full overflow-hidden"></div>
            <h4 className="text-md">Doing</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <h4 className="text-md">Under Review</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <h4 className="text-md">Completed</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <h4 className="text-md">Overdue</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
