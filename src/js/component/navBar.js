import React from "react";
import "../../styles/navBar.scss";

export function navBar() {
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">
						Webb Millsaps Law Firm
					</a>
				</div>
				<ul className="nav navbar-nav">
					<li className="active">
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Contacts</a>
					</li>
					<li>
						<a href="#">Testimony</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
