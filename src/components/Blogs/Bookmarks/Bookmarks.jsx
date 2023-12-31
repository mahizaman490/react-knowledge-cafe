import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 mt-7 pt-2">
            <div>
                <h3 className='text-2xl text-blue-700'>Reading Time:{readingTime}</h3>
            </div>
           <h2 className="text-xl text-center">Bookmarked Blogs : {bookmarks.length}</h2> 
           {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number.isRequired
}
export default Bookmarks;