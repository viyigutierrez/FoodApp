import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { searchByName } from '../../Actions/index'
import './searchbar.css'



function SearchBar() {

    let [search, setSearch] = useState(" ")

    const dispatch = useDispatch();

    function handleInputChange(event) {
        setSearch(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        dispatch(searchByName(search))
    }

  



    return (  
        <div>
            <form className="formStyle" onSubmit={handleSubmit}>
                <div className="searchContainer">
                    <input 
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Type to search a recipe"
                        className="inputStyle"
                    ></input>
                    <button className="searchButton" type="submit">
                    </button>
                </div>
            </form>
        </div>
    )
}
 
export default SearchBar;