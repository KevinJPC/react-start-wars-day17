import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function CardCharacter(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-container p-0">
			<div className="card">
				<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title">{props.name}</h4>
					<div className="info-container">
						<p>Gender: {props.gender}</p>
						<p>Hair Color: {props.hairColor}</p>
						<p>Eye-Color: {props.eyeColor}</p>
					</div>
					<div className="d-flex justify-content-between">
						<Link to={"/character/" + props.id}>
							<button className="btn btn-primary bg-transparent text-primary">Learn more!</button>
						</Link>
						<button
							onClick={() => actions.handleChangeFavorites({ id: props.id, type: "character" })}
							className="favorites-btn border border-warning text-warning rounded px-3">
							<i
								className={
									!!store.favorites.find(
										element => element.id == props.id && element.type == "character"
									)
										? "fas fa-heart"
										: "far fa-heart"
								}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

CardCharacter.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string
};
