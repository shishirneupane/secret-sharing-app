import { useParams } from 'react-router-dom';

const SecretLink = () => {
	const { id } = useParams();
	const secretLink = `http://localhost:3000/secret/${id}`;

	return (
		<section className="text-center mt-8">
			<h1 className="text-4xl font-bold text-orange-600 my-4">
				Share this link:
			</h1>
			<h3 className="border-2 border-orange-500 p-4 rounded-2xl font-bold text-lg w-1/2 m-auto mt-8">
				<a target="_blank" rel="noreferrer" href={secretLink}>
					{secretLink}
				</a>
			</h3>
		</section>
	);
};

export default SecretLink;
