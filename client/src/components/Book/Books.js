import React, { useEffect, useState } from "react";

import axios from 'axios'
const URL = "http://localhost:3000/books";

const fetchHandler = async() => {
           return await axios.get(URL).then((res)=> res.data)
}
const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {

     
    fetchHandler().then((data) =>setBooks(data));

    });
    console.log(books);
  return (
    <div>All Books are here</div>
  )
}

export default Books