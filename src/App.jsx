import "@assets/App.css";
import { ListArea, InputCon } from "@components";

function App() {
  return (
    <div className="app">
      <h1>연락처 리스트</h1>
      <div className="contents">
        <InputCon />
        <ListArea />
      </div>
    </div>
  );
}

export default App;
