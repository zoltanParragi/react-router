import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import RouterTypes from './pages/RouterTypes'
import VideoSummary from './pages/VideoSummary'
import BookLayout from './Layouts/BookLayout'
import NotHomeLayout from './Layouts/NotHomeLayout'
import BookRoutes from './BookRoutes'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink style={({ isActive }) => { return isActive ? { textDecoration: "underline" } : {} }}
              to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books" end>
              {({ isActive }) => { return isActive ? "Books active" : "Books" }}
            </NavLink>
          </li>
          <li>
            <NavLink to="/books2">Books v.2</NavLink>
          </li>
          <li>
            <NavLink to="/routertypes">Router types</NavLink>
          </li>
          <li>
            <NavLink to="/videosummary">Video Summary</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/books" element={<h1>Some extra content for books page ...</h1>} />
      </Routes>
      <Routes location="/routertypes">
        <Route path="/routertypes" element={<h1>Some extra content for all pages...</h1>} />
      </Routes>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<NotHomeLayout />}>

            <Route path="/books" element={<BookLayout />}>
              <Route index element={<BookList />} />
              <Route path=":id" element={<Book />} />
              <Route path="new" element={<NewBook />} />
            </Route>

            <Route path="/books2/*" element={<BookRoutes />} />

            <Route path="/routertypes" element={<RouterTypes />} />
            <Route path="/videosummary" element={<VideoSummary />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
