import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

export default function Home() {
  const beers = useSelector(state => state.beers);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div className="container mt-5">
      <h1>All Beers</h1>
      <form className="form-floating mb-4 d-flex" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search by course name or instructor"
          value={searchTerm}
          onChange={handleSearch}
          required
        />
        <label htmlFor="search">Search Beer</label>
        <button className="btn btn-outline-secondary" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
      <div className="row" id="my_course">
        {filteredBeers.length > 0 ? (
          filteredBeers.map(beer => (
            <Card beer={beer} key={beer.id} />
          ))
        ) : (
          <h3 className="text-center w-100">No Beer found for "{searchTerm}"</h3>
        )}
      </div>
    </div>
  );
}
