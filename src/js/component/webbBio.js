import React from "react";
import "../../styles/webbBio.scss";

//include images into your bundle

import webbPhoto from "../../img/webbPhoto.jpg";

//create your first component
export function WebbBio() {
	return (
		<div className="text-center mt-4, serif">
			<div className="container">
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

				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<div className="row">
							<div className="col-sm">
								<img
									src={webbPhoto}
									className="col-img-top"
									alt="Webb Millsaps Photo"
								/>
							</div>
							<div className="col-sm">
								<div className="col-body">
									<p className="col-text">
										Webb Millsaps, a South Florida business
										attorney, provides business legal
										services to companies and individuals
										throughout Florida that are integral to
										the successful operation of businesses
										of all sizes. Specializing in healthcare
										law and a member of a select group of
										Board-Certified Healthcare Law Attorneys
										in the state of Florida, Webb Millsaps
										combines knowledge and education with a
										commitment to providing clients with
										legal services marked by integrity,
										excellence and value. We counsel and
										represent clients in all aspects of
										business law, from contracts and dispute
										resolution to healthcare-specific legal
										matters and litigation. No matter what
										type of legal representation we offer,
										we provide the kind of personalized
										service that can only be found in a
										boutique law firm, while drawing on
										prior experiences from major
										international law firms. Whether you are
										just starting your business or are in
										need of an experienced and passionate
										business lawyer to handle contracts,
										transactions or other legal matters,
										Webb Millsaps is dedicated to providing
										you with strong, intelligent legal
										representation with a focus on
										individualized attention and respect.
										Find out how Webb Millsaps can meet your
										business legal needs in Florida by
										calling 561-900-7238.
									</p>
								</div>
							</div>
							<hr className="my-4" />
							<a
								className="btn btn-primary btn-md"
								href="#"
								role="button">
								Back
							</a>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="footer">
						Text of the Footer w/ links to Linked
					</div>
				</div>
			</div>
		</div>
	);
}
