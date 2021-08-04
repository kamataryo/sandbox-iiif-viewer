import "./App.css";
import { Viewer } from "react-iiif-viewer";
import React, { useEffect, useState, useCallback } from "react";

const baseApiUrl =
  "https://xt5bkm0oee.execute-api.ap-northeast-1.amazonaws.com/dev/main";
const putItemUrl =
  "https://xt5bkm0oee.execute-api.ap-northeast-1.amazonaws.com/dev/url";

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

// type Image = {
//   id: string,
//   endpoint: string,
//   size: Number,
//   lastModified: String,
// };
// type ApiResp = {
//   isTruncated: Boolean,
//   endpointBase: String,
//   images: Image[],
// };

function App() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(id);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(baseApiUrl);
      const data = await resp.json();
      setImages(data.images);
    }
    fetchData();
  }, []);

  const selectHandler = useCallback((e) => setSelected(e.target.value), []);

  return (
    <div className="App">
      <main className="App-header">
        <select style={{ marginBottom: "1em" }} onChange={selectHandler}>
          {images.map((image) => (
            <option key={image.id} selected={id === image.id}>
              {image.id}
            </option>
          ))}
        </select>
        <Viewer
          iiifUrl={`https://so69jnd8td.execute-api.ap-northeast-1.amazonaws.com/latest/iiif/2/${selected}/info.json`}
        />
      </main>
    </div>
  );
}

export default App;
