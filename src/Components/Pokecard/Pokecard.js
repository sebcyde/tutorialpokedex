import React from 'react';
import './Pokecard.css';

function Pokecard() {
	return (
		<div className="Pokecard">
			<h1 className="PokecardTitle">Charmander</h1>
			<img
				src="https://cdn2.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"
				alt="Charmander"
				className="PokecardImg"
			/>
			<h2 className="PokecardType">Type: fire</h2>
			<h2 className="PokecardEXP">EXP: 62</h2>
		</div>
	);
}

export default Pokecard;
