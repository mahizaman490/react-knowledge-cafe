
import Blogs from './components/Blogs/Blogs'
import './App.css'
import Header from './components/Header/Header'
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks'

function App() {


  return (
    <>
      
    <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
