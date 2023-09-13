import PropTypes from 'prop-types';
import Bookmark from '../../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 mt-7 pt-2">
           <h2 className="text-xl text-center">Bookmarked Blogs : {bookmarks.length}</h2> 
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks : PropTypes.array.isRequired
}
export default Bookmarks;