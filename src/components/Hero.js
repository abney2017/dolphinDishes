import React from 'react';

const Hero = props => {
	return (
		<li 
		onClick={() => props.onSelect(props.hero)}
		className={props.hero === props.selectedHero ? 'selected' : ''}
		>
		
			<div className="hero-element">
				<div className="badge">{props.hero.id}</div>
				<div className="name">{props.hero.name}</div>
				<div className="saying">{props.hero.saying}</div>
			</div>
		</li>
	);
}

export default Hero;