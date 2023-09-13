
import Blogs from './components/Blogs/Blogs'
import './App.css'
import Header from './components/Header/Header'
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
const [bookmarks, setBookmarks] = useState([])

const handleAddToBookmark = blog =>{

}

  return (
    <>
      
    <Header></Header>
     <div className='md:flex max-w-4xl mx-auto'>
     <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
