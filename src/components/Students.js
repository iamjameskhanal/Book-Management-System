import React from 'react';
import studentDetails from './DummyStudentList';
import { Link } from 'react-router-dom';

const Students = () => {
const studentList = studentDetails;
return (
    <div id="students">
        <h1>Student Details</h1>
        <p id="info">You can view detail information by clicking on each student</p>
        <div id="studentList">
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
  
            {
                studentList.map((student,index) => {
                    return (
                    <tr>
                    <th><Link className="firstName" to={`/studentDetails/${index}`}>{student.firstName}</Link></th>
                    <th><Link className="lastName" to={`/studentDetails/${index}`}>{student.lastName}</Link></th>
                    </tr>)
                })
            }

        </table>
        </div>
    </div>
)
}

export default Students ;