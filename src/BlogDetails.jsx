import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    

    const { id } = useParams(); //to get the parameters in 
    const { data: blog, isPending, error } = useFetch('https://my-json-server.typicode.com/Jaylawrence23/json-server-blog/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('https://my-json-server.typicode.com/Jaylawrence23/json-server-blog/blogs/' + blog.id, {
            method: 'DELETE'
        }).then((e) => {
            history.push('/jd-blog');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error} </div>}
            { blog &&
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body } </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;