import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importing useDispatch
import { Link, useParams } from 'react-router-dom';
import { addCourse } from '../features/courses/courseSlice';
import Swal from 'sweetalert2';

export default function Course() {
  const { id } = useParams();
  const dispatch = useDispatch(); // Initializing useDispatch
  const courses = useSelector(state => state.courses);
  const addedCourses = useSelector(state => state.addedCourses);
  const completedCourses = useSelector(state => state.completedCourses);
  const course = courses.find(course => course.id == id);
  const handleAddCourse = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to add this course?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(addCourse(course));
        Swal.fire(
          'Added!',
          'The course has been added to your dashboard.',
          'success'
        );
      }
    });
  };

  // Check if the course is already added
  const isAlreadyAdded = addedCourses.some(addedCourse => addedCourse.id === course.id);
  const isAlreadyCompleted = completedCourses.some(completedCourse => completedCourse.id === course.id);

  return (
    course ? (
      <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col-md-6 d-flex flex-column p-0 align-items-center mb-3">
            <img src={course.thumbnail} className="img-fluid" alt="Course Thumbnail" style={{ objectFit: 'cover' }} />
            {isAlreadyCompleted ? (
              <Link className='btn btn-primary' to='/dashboard'>Already Completed <i className="fa fa-eye" aria-hidden="true"></i></Link>
            ) : isAlreadyAdded ? (
              <Link className='btn btn-primary' to='/dashboard'>Added In Dashboard <i className="fa fa-eye" aria-hidden="true"></i></Link>
            ) : (
              <button className='btn btn-outline-primary' onClick={handleAddCourse}>Add Course Now <i className="fa fa-plus" aria-hidden="true"></i></button>
            )}
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="card w-100">
              <div className="card-body">
                <h1 className="card-title">{course.name}</h1>
                <h4 className="card-subtitle mb-2 text-muted">Instructor: {course.instructor}</h4>
                <p className="card-text">{course.description}</p>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item"><strong>Duration:</strong> {course.duration}</li>
                  <li className="list-group-item"><strong>Schedule:</strong> {course.schedule}</li>
                  <li className="list-group-item"><strong>Location:</strong> {course.location}</li>
                  <li className="list-group-item"><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</li>
                </ul>
                <div className="accordion" id="syllabusAccordion">
                  {course.syllabus.map((week, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="true"
                          aria-controls={`collapse${index}`}
                        >
                          Week {week.week}: {week.topic}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#syllabusAccordion"
                      >
                        <div className="accordion-body">
                          {week.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h5 className="mt-4">Enrolled Students</h5>
                <ul className="list-group">
                  {course.students.map(student => (
                    <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                      {student.name}
                      <span className="badge bg-primary rounded-pill">{student.email}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <h3 className="text-center w-100">No course found</h3>
    )
  );
}
