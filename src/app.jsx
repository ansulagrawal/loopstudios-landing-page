import React from 'react';
import Hero from './modules/hero.jsx';
import Intro from './modules/intro.jsx';
import Creations from './modules/creations.jsx';
import Footer from './modules/footer.jsx';
import './app.scss';

function App() {
	return (
		<div>
			<Hero />
			<Intro />
			<Creations />
			<Footer />
		</div>
	);
}

export default App;
