import React from "react";

const Search = () => {
    //SearchBar component
    const [search, setSearch] = React.useState("");
    const [results, setResults] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };


    return (
        <div>
            <h1>test</h1>
            <input type="text" value={search} onChange={handleChange} />
            <button onClick={() => {
                setIsLoading(true);
                setIsError(false);
            }}>Search</button>
        </div>
    );
};

export default Search;
