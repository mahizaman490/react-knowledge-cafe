import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-16'>
            <img className='w-full mb-4' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-2'> 

                <div className='flex items-center'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-700'><FaBookmark></FaBookmark></button>
                </div>
            </div>
           <h1 className='text-2xl'>{title}</h1> 
           <p>
             {
                hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
             }
           </p>
           <button className='text-blue-800 mt-3' onClick={()=> handleMarkAsRead(id,reading_time)}>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
blog : PropTypes.object.isRequired,
handleAddToBookmark: PropTypes.func.isRequired,
handleMarkAsRead : PropTypes.func.isRequired
    
}
export default Blog;
