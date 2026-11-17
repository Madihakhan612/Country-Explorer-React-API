import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="w-full max-w-md mx-auto my-6">
            <input
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
    )
}

export default SearchBar