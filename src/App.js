import "./App.css";
import { Viewer } from "react-iiif-viewer";
import { useEffect, useState } from "react";

const baseApiUrl =
  "https://xt5bkm0oee.execute-api.ap-northeast-1.amazonaws.com/dev/main";
const putItemUrl =
  "https://xt5bkm0oee.execute-api.ap-northeast-1.amazonaws.com/dev/url";
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Viewer
          iiifUrl={`https://so69jnd8td.execute-api.ap-northeast-1.amazonaws.com/latest/iiif/2/${id}/info.json`}
        />
      </header>
    </div>
  );
}

export default App;
