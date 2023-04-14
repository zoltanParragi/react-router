import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Book() {
    const { id } = useParams()
    const contextObj = useOutletContext()
    return (
        <>
            <div>Book {id}</div>
            <div>{contextObj.sample}</div>
        </>
    )
}
