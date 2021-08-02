import './App.css';
import { Viewer } from "react-iiif-viewer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Viewer iiifUrl="https://so69jnd8td.execute-api.ap-northeast-1.amazonaws.com/latest/iiif/2/test/info.json" />
      </header>
    </div>
  );
}

export default App;
