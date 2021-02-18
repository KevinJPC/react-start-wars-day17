const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: null,
			people: null,
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(async data => {
						let resultsArray = data.results;
						let planetsArray = new Array();
						for (let i = 0; i < resultsArray.length; i++) {
							const response = await fetch(resultsArray[i].url);
							const json = await response.json();
							const data = await json.result.properties;
							planetsArray.push(data);
						}
						// Promise.all(peopleArray).then(values => {
						setStore({ planets: planetsArray });
						// });
					})
					.catch(err => console.error(err));
			},
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(async data => {
						let resultsArray = data.results;
						let peopleArray = new Array();
						for (let i = 0; i < resultsArray.length; i++) {
							const response = await fetch(resultsArray[i].url);
							const json = await response.json();
							const data = await json.result.properties;
							peopleArray.push(data);
						}
						// Promise.all(peopleArray).then(values => {
						setStore({ people: peopleArray });
						// });
					})
					.catch(err => console.error(err));
			},

			handleChangeFavorites: fav => {
				let newFavorites = getStore().favorites;
				const objFavorite = newFavorites.find(element => element.id == fav.id && element.type == fav.type);
				if (!objFavorite) {
					newFavorites.push(fav);
				} else {
					let elementRemove = newFavorites.splice(newFavorites.indexOf(objFavorite), 1);
				}

				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
