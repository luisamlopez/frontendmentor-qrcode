import { useState } from "react";
import "./searchBar.css";

export const SearchBar = (props) => {
    const [url, setUrl] = useState("");
    const generateQR = () => {
        setUrl(url);
    }
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search"
                value={url}

            />
            <button type="submit" onClick={generateQR}>
                Generate QR Code
            </button>
        </div>
    );

}