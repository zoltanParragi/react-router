import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function BookLayout() {
    return (
        <>
            <h2 id="notHome" >Not home page</h2>
            <Outlet />
        </>
    )
}