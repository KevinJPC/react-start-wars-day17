import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Spinner } from "../component/spinner";

export function Character() {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let character = !!store.people ? store.people[params.id] : null;
	return !!character ? (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-10 col-md-10 col-sm-11 mx-auto p-0 mb-5">
					<div className="character-container d-flex justify-content-around flex-column flex-lg-row flex-md-row py-3">
						<div className="placeholder-container col-lg-5">
							<img src="https://via.placeholder.com/800x600" style={{ width: "100%" }} />
						</div>
						<div className="text-center col-lg-5 pt-4 p-lg-0 p-md-0">
							<h1>{character.name}</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies congue ex, et
								blandit sem malesuada eget. In molestie commodo nisl in posuere. Phasellus vitae diam
								quis urna bibendum blandit dignissim eu arcu. Suspendisse lacinia augue id gravida
								dapibus. In molestie commodo nisl in posuere. Phasellus vitae diam quis urna bibendum
								blandit dignissim eu arcu. Suspendisse lacinia augue id gravida dapibus. Vestibulum ut
								lobortis risus. Duis eget orci feugiat, vestibulum arcu id, finibus nisi. Cras ultricies
								tortor non ipsum accumsan luctus ac vel nisl. Fusce feugiat tristique.Vestibulum ut
								lobortis risus. Duis eget orci feugiat, vestibulum arcu id, finibus nisi. Cras ultricies
								tortor non ipsum accumsan luctus ac vel nisl. Fusce feugiat tristique.In molestie
								commodo nisl in posuere.In molestie commodo nisl in posuere. In molestie commodo nisl in
								posuere.
							</p>
						</div>
					</div>
					<hr className="bg-danger" />
					<div className="details-container d-flex justify-content-center">
						<div className="text-danger col-11">
							<div className="container-fluid p-0">
								<div className="row text-center text-lg-left text-md-left">
									<div className="col-6 col-lg-2 col-md-2">
										<h5>Name</h5>
										<p>{character.name}</p>
									</div>
									<div className="col-6 col-lg-2 col-md-2">
										<h5>Birth Year</h5>
										<p>{character.birth_year}</p>
									</div>
									<div className="col-6 col-lg-2 col-md-2">
										<h5>Gender</h5>
										<p>{character.gender}</p>
									</div>
									<div className="col-6 col-lg-2 col-md-2">
										<h5>Height</h5>
										<p>{character.height}</p>
									</div>
									<div className="col-6 col-lg-2 col-md-2">
										<h5>Skin Color</h5>
										<p>{character.skin_color}</p>
									</div>
									<div className="col-6 col-lg-2 col-md-2">
										<h5>Eye Color</h5>
										<p>{character.eye_color}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="pt-5 mt-5">
			<Spinner />
		</div>
	);
}
