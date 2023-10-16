import {React,  useState } from "react";

import classes from "../../styles/Search.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { OpenFill } from '../global-states/authSlice';
import { Button } from "../helper-functions/Button";
import Error from "../helper-functions/Error";
import { LoadForFill } from "../helper-functions/LoadForFill";


const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [InputError, setInputError] = useState(false);
    
    const handleSearch =async () => {
        if (searchInput.length > 0) {

            try {
                const response = await LoadForFill(searchInput);
                if (response.status === 200) {
                    const data = await response.json();
                    dispatch(OpenFill(data));
                        }
                    else {
                        console.error('Failed to fetch data');
                        setError(true);
                      }
                    } catch (error) {
                        console.error('Error fetching questionnaire data:', error);
                setError(true);
            }
            }
            else {
                setInputError(true);
            }
        }
            
        
    return (
        <div className={classes['search-box']}>
            <p className={classes['search-box-title']}>Keress mások kérdőíve között</p>
            <div  className={classes['search-box-id-input-box']}>
                <input
                    className={classes['search-box-id-input']}
                    type="text"
                    placeholder="Keress azonosítóval"
                    value={searchInput}
                    onChange={(e) => {
                        if (e.target.value.length > 0) {
                            setInputError(false);
                        }
                        setSearchInput(e.target.value)
                    }
                }
                />
                </div>
            {error && <Error text={"Nincs ilyen azonosítójú kérdőív"}/>}
            {InputError && <Error text={"Kérlek adj meg azonosítót"}/>}
            <Button func={handleSearch} text={"Keresés"}/>
        </div>
    )
}

export default Search;