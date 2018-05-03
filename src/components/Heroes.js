import React, { Component } from 'react';
import Hero from './Hero';
import EditHero from './EditHero';
import heroesAPI from '../api';

class Heroes extends Component {
	constructor() {
		super();
		this.state ={ heroes:[], addingHero:false};
		
		this.handleSelect = this.handleSelect.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
	}
	
	componentDidMount() {
		
		heroesAPI.get().then(json => {
			this.setState({heroes: json});
		});
	}
	
	handleSelect(hero){
		this.setState({selectedHero: hero});
	}
	
	 handleSave() {
		let heroes = this.state.heroes;
		if (this.state.addingHero) {
			heroesAPI
			.create(this.state.selectedHero)
			.then(result => {
					console.log('Successfully created!');

					heroes.push(this.state.selectedHero);
					this.setState({
						heroes: heroes,
						selectedHero: null,
						addingHero: false
					});
				})
				.catch(err => {
				console.log(err);
				});
		} else {
			heroesAPI
				.update(this.state.selectedHero)
				.then(() => {
					this.setState({ selectedHero: null });
				})
				.catch(err => {});
		}
  }
	
	handleCancel(){this.setState({selectedHero : null, addingHero:false});}
	
	handleOnChange(event) {
		let selectedHero = this.state.selectedHero;
		selectedHero[event.target.name] = event.target.value;
		this.setState({ selectedHero: selectedHero });
	}
	
	handleEnableAddMode() {
		this.setState({
		addingHero: true,
		selectedHero: { id: '', name: '', saying: '' }
		});
	}
	
	 handleDelete(event, hero) {
			event.stopPropagation();

			heroesAPI.destroy(hero).then(() => {
				let heroes = this.state.heroes;
				heroes = heroes.filter(h => h !== hero);
				this.setState({ heroes: heroes });

				if (this.selectedHero === hero) {
				this.setState({ selectedHero: null });
				}
			});
		}
	
	render () {
		return (
			<div>
				<ul className ="heroes">
				{
					this.state.heroes.map(hero => {
						return <Hero hero={hero} 
						key={hero.id}
						onSelect={this.handleSelect} 
						selectedHero={this.state.selectedHero}
						onDelete={this.handleDelete}/>;
					})
				}
				</ul>
				<div className="editarea">
					<button onClick={this.handleEnableAddMode}>Add New Hero</button>
					<EditHero
						addingHero={this.state.addingHero}
						onChange={this.handleOnChange}
						selectedHero={this.state.selectedHero}
						onSave={this.handleSave}
						onCancel={this.handleCancel}
					/>
				</div>
			</div>
		);
	}
}

export default Heroes;