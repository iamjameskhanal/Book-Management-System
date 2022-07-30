import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import bookDetails from './DummyBooks';



const DetailStudent = (props) => {
    const params = useParams();
    const [book, setBook] = useState({bookName:"",bookAuthor:"",bookBorrowedBy:"",borrowDate:"",returnDate:""});

    useEffect(()=>{
        const bookDetail = bookDetails[params.id];
        setBook({bookName:bookDetail.bookName, bookAuthor:bookDetail.bookAuthor,bookBorrowedBy:bookDetail.bookBorrowedBy,borrowDate:bookDetail.borrowDate,returnDate:bookDetail.returnDate})

    },[params.id])
    
    return (
    <div>
        <h1>Detail information of: {book.bookName} </h1>
        <p id="studentLibraryInfo">{book.bookName} was written bu {book.bookAuthor}</p>
        <p>Book has been borrowed by {book.bookBorrowedBy}</p>
        <span>Borrowed date: {book.borrowDate} Return Date: {book.returnDate}</span>
    </div>
    )
}

export default DetailStudent ;