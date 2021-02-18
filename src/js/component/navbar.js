import React, { useContext } from "react";
import logoPage from "../../img/star-wars.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-0">
			<div className="col-lg-10 col-md-10 col-sm-11 mx-auto p-0 d-flex justify-content-between py-2">
				<div className="logo-container col-6">
					<Link to="/">
						<img src={logoPage} alt="..." className="logo-page" />
					</Link>
				</div>
				<div className="col-6 d-flex align-items-center justify-content-end">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle d-flex align-items-center"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
							<span className="px-2 pb-1 mt-1 mx-1 rounded number-favorites bg-secondary">
								{store.favorites.length}
							</span>
						</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
							{store.favorites.length != 0 ? (
								store.favorites.map(function(fav, i) {
									return (
										<div className="d-flex" key={i}>
											<Link to={"/" + fav.type + "/" + fav.id} className="dropdown-item" href="#">
												{fav.type == "character"
													? store.people[fav.id].name
													: store.planets[fav.id].name}
											</Link>
											<button
												onClick={() => {
													actions.handleChangeFavorites({ id: fav.id, type: fav.type });
												}}
												className="trash-btn mr-2">
												<i className="fas fa-trash" />
											</button>
										</div>
									);
								})
							) : (
								<p className="text-center">(empty)</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
