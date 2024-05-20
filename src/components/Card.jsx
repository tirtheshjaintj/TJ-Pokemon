import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ course ,children=""}) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card mb-4">
        <img src={course.thumbnail} className="card-img-top img-fluid" alt="Course Thumbnail" style={{ objectFit: 'cover', height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text"><b>Instructor:</b> {course.instructor}</p>
          <p className="card-text">{course.description}</p>
          <p className="card-text"><b>Duration:</b> {course.duration}</p>
          <div className="d-flex flex-column justify-content-end">
            <Link to={"/course/" + course.id} className="btn btn-primary m-2">View Course <i className="fa fa-eye" aria-hidden="true"></i></Link>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
