import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { completeCourse } from '../features/courses/courseSlice';
import Swal from 'sweetalert2';

export default function Home() {
  const courses = useSelector(state => state.addedCourses);
  const completedCourses = useSelector(state => state.completedCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const progress = 100;
  // Function to handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCompleteCourse = (course) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to mark this course as complete?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, complete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(completeCourse(course));
        Swal.fire(
          'Completed!',
          'The course has been marked as complete.',
          'success'
        );
      }
    });
  };

  // Filter courses based on the search term
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    document.title = "Student Dashboard";
  }, []);
  return (

    <div className="container mt-5">
      <h1>Ongoing Courses</h1>
      <form className="form-floating mb-4 d-flex" onSubmit={(e) => e.preventDefault()} required>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search by course name or instructor"
          value={searchTerm}
          onChange={handleSearch}
        />
        <label htmlFor="search">Search Courses</label><button className="btn btn-outline-secondary" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
      <div className="row" id="my_course1">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <Card course={course} key={course.id} >
              <a className="btn btn-primary m-2" onClick={() => { handleCompleteCourse(course) }}>Mark As Complete <i className="fa fa-check-circle" aria-hidden="true"></i></a>
              <div className="progress"  style={{height:"25px"}}>
  <div className="progress-bar progress-bar-striped progress-bar-animated w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><b className='text-xl'>Just Started</b></div>
</div>


            </Card>
          ))
        ) : (
          <h3 className="text-center w-100">No Courses Found</h3>
        )}
      </div>
      <h1 className='mt-5 mb-2'>Completed Courses</h1>
      <div className="row" id="my_course2">
        {completedCourses.length > 0 ? (
          completedCourses.map(course => (
            <Card course={course} key={course.id} >
              <div className="progress" style={{ height: "25px" }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><b className='text-xl'>Course Completed</b></div>
              </div>
            </Card>
          ))
        ) : (
          <h3 className="text-center w-100">No Courses Completed</h3>
        )}
      </div>
    </div>


  );
}
