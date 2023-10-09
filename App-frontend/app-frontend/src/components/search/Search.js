import { useState } from "react";

import classes from "../../styles/Search.module.css";

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    
    const handleSearch = () => {
    }
    
    return <div>
        <p>Keress mások kérdőíve között</p>
        <div>
              <input
                type="text"
                placeholder="Keress azonosítóval"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
        <div>
            <button
                onClick={handleSearch}>Keresés
            </button>
        </div>
    </div>
}

export default Search;