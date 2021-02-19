const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: null,
			people: null,
			favorites: [],
			nextPagePeople: 1,
			nextPagePlanets: 1,
			loadingPeople: false,
			loadingPlanets: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPlanets: nextPagePlanets => {
				fetch("https://www.swapi.tech/api/planets?page=" + nextPagePlanets + "&limit=10")
					.then(res => res.json())
					.then(async data => {
						let resultsArray = data.results;
						let planetsArray = new Array();
						if (getStore().planets != null) {
							planetsArray = getStore().planets;
						}
						for (let i = 0; i < resultsArray.length; i++) {
							const response = await fetch(resultsArray[i].url);
							const json = await response.json();
							const data = await json.result.properties;
							planetsArray.push(data);
						}
						// Promise.all(peopleArray).then(values => {

						setStore({
							nextPagePlanets: getStore().nextPagePlanets + 1,
							planets: planetsArray,
							loadingPlanets: !getStore().loadingPlanets
						});
						// });
					})
					.catch(err => console.error(err));
			},
			loadPeople: nextPagePeople => {
				fetch("https://www.swapi.tech/api/people?page=" + nextPagePeople + "&limit=10")
					.then(res => res.json())
					.then(async data => {
						let resultsArray = data.results;
						let peopleArray = new Array();
						if (getStore().people != null) {
							peopleArray = getStore().people;
						}
						for (let i = 0; i < resultsArray.length; i++) {
							const response = await fetch(resultsArray[i].url);
							const json = await response.json();
							const data = await json.result.properties;
							peopleArray.push(data);
						}
						// Promise.all(peopleArray).then(values => {
						setStore({
							nextPagePeople: getStore().nextPagePeople + 1,
							people: peopleArray,
							loadingPeople: !getStore().loadingPeople
						});
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
			},
			handleControlLoadingPeople: () => {
				setStore({ loadingPeople: !getStore().loadingPeople });
			},
			handleControlLoadingPlanets: () => {
				setStore({ loadingPlanets: !getStore().loadingPlanets });
			}
		}
	};
};

export default getState;
