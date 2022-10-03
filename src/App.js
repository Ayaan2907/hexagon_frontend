import './App.css';
import {useState} from 'react';
import {HandleInputFile} from './utils/HandleInputFile';

function App() {
  const [inputFile, setInputFile] = useState(null);
  const handleFileUpload = async () => {
    const file = await HandleInputFile(inputFile) 
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="file"
          accept='.csv'
          placeholder='Enter file path'
          onChange={(event) => setInputFile(event.target.files[0])}
        />
        <button onClick={handleFileUpload}>Upload</button>
      </header>
    </div>
  );
}

export default App;
