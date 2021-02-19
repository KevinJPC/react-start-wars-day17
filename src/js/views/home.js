import React, { useContext } from "react";
import { Spinner } from "../component/spinner";
import { SpinnerGrow } from "../component/spinnergrow";
import { CardCharacter } from "../component/cardcharacter";
import { CardPlanet } from "../component/cardplanet";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	function loadInfoOnScroll(e) {
		if (
			Math.floor(e.target.offsetWidth) + Math.round(e.target.scrollLeft) >=
			Math.floor(e.target.scrollWidth - 150)
		) {
			if (e.target.id == "character" && store.nextPagePeople <= 9 && !store.loadingPeople) {
				actions.loadPeople(store.nextPagePeople);
				actions.handleControlLoadingPeople();
			} else {
				if (e.target.id == "planet" && store.nextPagePlanets <= 6 && !store.loadingPlanets) {
					actions.loadPlanets(store.nextPagePlanets);
					actions.handleControlLoadingPlanets();
				}
			}
		}
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-10 col-md-10 col-sm-11 mx-auto p-0 mb-5">
					<div className="mb-5">
						<h1 className="text-center text-md-left text-lg-left text-danger">Characters</h1>
					</div>
					<div
						className="d-flex justify-content-between cards-container"
						onScroll={loadInfoOnScroll}
						id="character">
						{!!store.people ? (
							// () => {
							store.people.map(function(item, i) {
								// let peopleDetails = actions.getDetailsPeople(item.url);
								// console.log(peopleDetails, "people details");
								return (
									<CardCharacter
										id={i}
										name={item.name}
										gender={item.gender}
										hairColor={item.hair_color}
										eyeColor={item.eye_color}
										key={i}
									/>
								);
							})
						) : (
							// }
							<Spinner />
						)}
						{!!store.people ? store.nextPagePeople <= 9 ? <SpinnerGrow /> : null : null}
					</div>

					<div className="mb-5 mt-5">
						<h1 className="text-center text-md-left text-lg-left text-danger">Planets</h1>
					</div>
					<div
						className="d-flex justify-content-between cards-container"
						id="planet"
						onScroll={loadInfoOnScroll}>
						{!!store.planets ? (
							// () => {
							store.planets.map(function(item, i) {
								// let peopleDetails = actions.getDetailsPeople(item.url);
								// console.log(peopleDetails, "people details");
								return (
									<CardPlanet
										id={i}
										name={item.name}
										population={item.population}
										terrain={item.terrain}
										key={i}
									/>
								);
							})
						) : (
							// }
							<Spinner />
						)}
						{!!store.planets ? store.nextPagePlanets <= 6 ? <SpinnerGrow /> : null : null}
					</div>
				</div>
			</div>
		</div>
	);
};
