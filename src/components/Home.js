import useFetch from '../custom hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
	// const handleDelete = (id) => {
	// 	const newBlogs = blogs.filter((blog) => blog.id !== id);
	// 	setBlogs(newBlogs);
	// };

	const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

	return (
		<div className="home">
			{error && <div>{Error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All blogs" />}
		</div>
	);
};

export default Home;
