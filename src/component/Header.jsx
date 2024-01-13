

const Header = ({handleInput, handleSubmit, handleTypeChange, types, type, search})=> {

    return (
        <header>
            <form onSubmit={handleSubmit} >
                <label>search name pokemons</label>
                <input type="search" value={search} onChange={handleInput} placeholder="name..."/>
                <button type="submit">end</button>
            </form>
            <div >
                <label >Types</label>
                <select value={type} onChange={handleTypeChange} >
                <option value='all'>All Types</option>
                {
                    types.length > 0 && 
                    (
                        types.map((items, index) => (
                        <option key={index} value={items.name}>{items.name}</option>
                        ))
                    )
                }
                </select>
            </div>
        </header>
    )
};

export {Header}