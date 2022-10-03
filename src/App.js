import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import * as csv from 'csvtojson';

function App() {
  const [filePath, setFilePath] = useState('');

  const handleFileUpload = (event) => { 
    // csv()
    //   .fromFile(filePath)
    //   .then((jsonObj) => {
    //     console.log(jsonObj);
    //   }
    // );
    console.log("File path: " + filePath);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="file"
          accept='.csv'
          placeholder='Enter file path'
          onChange={(event) => setFilePath(event.target.value)}
        />
        <button onClick={handleFileUpload}>Upload</button>
      </header>
    </div>
  );
}

export default App;
