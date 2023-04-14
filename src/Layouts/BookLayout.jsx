import React, { useState } from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'


export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
  const num = searchParams.get("n")
  //const [num, setNum] = useState(3)

  return (
    <>
      <NavLink to="/books/1">Book 1</NavLink>
      <br />
      <NavLink to="/books/2">Book 2</NavLink>
      <br />
      <NavLink to={`/books/${num}`}>Book {num}</NavLink>
      <br />
      <NavLink to="/books/new">New Book</NavLink>
      <Outlet context={{ sample: "sample value" }} />
      <br /><br />
      <input type="number" value={num} onChange={e => setSearchParams({ n: e.target.value })} />
    </>
  )
}
