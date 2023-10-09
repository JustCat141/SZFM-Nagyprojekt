import { useState } from "react";

import classes from "../../styles/Search.module.css";

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    
    const handleSearch = () => {
    }
    
    return (
        <div className={classes['search-box']}>
            <p className={classes['search-box-title']}>Keress mások kérdőíve között</p>
            <div  className={classes['search-box-id-inőut-box']}>
                <input
                    className={classes['search-box-id-input']}
                    type="text"
                    placeholder="Keress azonosítóval"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                </div>
            <div className={classes['search-box-button-box']}>
                <button 
                    className={classes['search-box-button']}
                    onClick={handleSearch}>Keresés
                </button>
            </div>
        </div>
    )
}

export default Search;