import React from 'react';
import bookDetails from './DummyBooks';
import { Link } from 'react-router-dom';

const Books = () => {
const bookList = bookDetails;
return (
    <div id="students">
        <h1>Book Details</h1>
        <p id="info">You can view detail information by clicking on each Book</p>
        <div id="studentList">
        <table>
            <tr>
                <th>Book Name</th>
                <th>Book Author</th>
                <th>Book Borrowed By Student</th>
                <th>Borrow Date</th>
                <th>Return Date</th>
            </tr>
  
            {
                bookList.map((book,index) => {
                    return (
                    <tr>
                    <th><Link className="bookDetails" to={`/bookDetails/${index}`}>{book.bookName}</Link></th>
                    <th><Link className="bookDetails" to={`/bookDetails/${index}`}>{book.bookAuthor}</Link></th>
                    <th><Link className="bookDetails" to={`/bookDetails/${index}`}>{book.bookBorrowedBy}</Link></th>
                    <th><Link className="bookDetails" to={`/bookDetails/${index}`}>{book.borrowDate}</Link></th>
                    <th><Link className="bookDetails" to={`/bookDetails/${index}`}>{book.returnDate}</Link></th>
                    </tr>)
                })
            }

        </table>
        </div>
    </div>
)
}

export default Books ;