import { useParams } from 'react-router-dom';

const SecretLink = () => {
	const { id } = useParams();
	const secretLink = `http://localhost:3000/secret/${id}`;

	return (
		<section>
			<h1>Share this link:</h1>
			<h3>{secretLink}</h3>
		</section>
	);
};

export default SecretLink;
