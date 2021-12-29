import React, { useState } from "react";
import "./search_bar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory } from 'react-router-dom'

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            history.push('/products?' + e.target.value)
            window.location.reload()
        }

    }

    const history = useHistory()

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    style={{textTransform:"uppercase"}}
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                    onKeyDown={onSearch}

                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon style={{ marginBottom: '2rem' }} />
                    ) : (
                        <CloseIcon style={{ marginBottom: '2rem' }} id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <Link className="dataItem" to={"/product/" + value._id} target="_blank" >
                                <p>{value.name} </p>
                            </Link>
                        );
                    })}
                </div>
            )
            }
        </div >
    );
}

export default SearchBar;