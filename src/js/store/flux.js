const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			people: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						let resultsArray = data.results;
						let planetsArray = [];
						for (let i = 0; i < resultsArray.length; i++) {
							fetch(resultsArray[i].url)
								.then(res => res.json())
								.then(data => {
									planetsArray.push(data.result.properties);
								})
								.catch(err => console.error(err));
						}
						console.log(planetsArray);
						setStore({ planets: planetsArray });
					})
					.catch(err => console.error(err));
			},
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						let resultsArray = data.results;
						let peopleArray = [];
						for (let i = 0; i < resultsArray.length; i++) {
							fetch(resultsArray[i].url)
								.then(res => res.json())
								.then(data => {
									peopleArray.push(data.result.properties);
								})
								.catch(err => console.error(err));
						}
						console.log(peopleArray);
						setStore({ people: peopleArray });
					})
					.catch(err => console.error(err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
