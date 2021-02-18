import React, { useContext } from "react";
import { Spinner } from "../component/spinner";
import { CardCharacter } from "../component/cardcharacter";
import { CardPlanet } from "../component/cardplanet";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-10 col-md-10 col-sm-11 mx-auto p-0 mb-5">
					<div className="mb-5">
						<h1 className="text-center text-md-left text-lg-left text-danger">Characters</h1>
					</div>
					<div className="d-flex justify-content-between cards-container">
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
					</div>

					<div className="mb-5 mt-5">
						<h1 className="text-center text-md-left text-lg-left text-danger">Planets</h1>
					</div>
					<div className="d-flex justify-content-between cards-container">
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
					</div>
				</div>
			</div>
		</div>
	);
};
