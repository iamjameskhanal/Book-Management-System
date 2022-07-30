import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import studentDetails from './DummyStudentList';



const DetailStudent = (props) => {
    const params = useParams();
    const [name, setName] = useState({firstName:"",lastName:""});

    useEffect(()=>{
        const studentDetail = studentDetails[params.id];
        setName({firstName:studentDetail.firstName, lastName:studentDetail.lastName})

    },[params.id])
    
    return (
    <div>
        <h1>Detail information of: {name.firstName} {name.lastName} </h1>
        <p id="studentLibraryInfo">{name.firstName} is student from Department of Computer Science.</p>
        <p>Number of credits completed: 24</p>
        <p>Number of Credits Remaining: 150</p>
    </div>
    )
}

export default DetailStudent ;