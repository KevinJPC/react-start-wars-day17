import React from "react";

export function Spinner() {
	return (
		<div className="d-flex justify-content-center spinner-container col-12 pb-5 mb-5">
			<div className="spinner-border" role="status" style={{ width: "5rem", height: "5rem" }}>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
