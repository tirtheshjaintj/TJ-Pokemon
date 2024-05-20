import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

export default function Home() {
  const courses = useSelector(state => state.courses);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter courses based on the search term
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.title = "TJ Courses";
  }, []);

  return (
    <div className="container mt-5">
      <h1>All Courses</h1>
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
        <label htmlFor="search">Search Courses</label>
        <button className="btn btn-outline-secondary" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
      <div className="row" id="my_course">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <Card course={course} key={course.id} />
          ))
        ) : (
          <h3 className="text-center w-100">No courses found for "{searchTerm}"</h3>
        )}
      </div>
    </div>
  );
}
