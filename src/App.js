import "./App.css";
import { useState } from "react";
import { HandleInputFile } from "./utils/HandleInputFile";
import axios from "axios";
const SERVER_PORT = 8080; // set your own port
const API_URL = `http://localhost:${SERVER_PORT}`;

function App() {
    const [inputFile, setInputFile] = useState(null);
    const handleFileUpload = async () => {
        const file = await HandleInputFile(inputFile);
        axios
            .post(`${API_URL}/api/upload`, file)
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err));
    };

    return (
        <div className="App">
            <header className="App-header">
                <input
                    type="file"
                    accept=".csv"
                    placeholder="Enter file path"
                    onChange={(event) => setInputFile(event.target.files[0])}
                />
                <button onClick={handleFileUpload}>Upload</button>
            </header>
        </div>
    );
}

export default App;
