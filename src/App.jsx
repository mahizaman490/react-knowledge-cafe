
import Blogs from './components/Blogs/Blogs'
import './App.css'
import Header from './components/Header/Header'
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
const [bookmarks, setBookmarks] = useState([])
const [readingTime,setReadingTime] = useState(0)

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks,blog]
  setBookmarks(newBookmarks)
}
const handleMarkAsRead = (id,time) =>{
  const newReadingTime = readingTime + time
setReadingTime(newReadingTime)
const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
setBookmarks(remaining)
}
  return (
    <>
      
    <Header></Header>
     <div className='md:flex max-w-4xl mx-auto'>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
