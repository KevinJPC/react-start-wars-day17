import React from "react";

export function SpinnerGrow() {
	return (
		<div className="d-flex justify-content-center spinner-grow-container col-3" style={{ marginTop: "140px" }}>
			<div className="spinner-grow text-danger" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
