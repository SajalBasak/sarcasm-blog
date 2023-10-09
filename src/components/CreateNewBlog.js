import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateNewBlog = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body };

		setIsPending(true);

		fetch('http://localhost:8000/blogs/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsPending(false);
			// history.go(-1);
			history.push('/');
		});
	};

	return (
		<div className="create">
			<h2>Add new blog here.</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
				<label>Blog body:</label>
				<textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
				{isPending ? <button disabled>Submitting</button> : <button>Add blog</button>}
			</form>
		</div>
	);
};

export default CreateNewBlog;
