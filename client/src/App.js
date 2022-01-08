import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreateSecret from './components/CreateSecret';
import SecretLink from './components/SecretLink';

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<CreateSecret />} />
				<Route path="/private/:id" element={<SecretLink />} />
			</Routes>
		</main>
	);
}

export default App;
