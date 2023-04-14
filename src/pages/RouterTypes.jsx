import React from 'react'

export default function RouterTypes() {
    return (
        <div>
            <h1>Router types</h1>
            <h3>BrowserRouter</h3>
            <p>... It is used in 99.99% of the situatuions.</p>
            <h3>HashRouter</h3>
            <p>Similar to BrowserRouter. Use it if you use a shared server where you cannot cange the base url.</p>
            <h3>unsable_HistoryRouter</h3>
            <p>direct access to yout browsers history ...</p>
            <h3>MemoryRouter</h3>
            <p>the link does not chage, everyting is stored ijn the memory ... it is useful for testing ...</p>
            <h3>StaticRouter from react-router-dom/server</h3>
            <p>...</p>
            <h3>NativeRouter from react-router-native</h3>
            <p>for react native ...</p>

        </div>
    )
}
