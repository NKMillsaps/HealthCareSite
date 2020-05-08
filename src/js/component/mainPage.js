import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import steBook from "../../img/steBook.jpg";
import contract from "../../img/contract.jpg";
import dentistOffice from "../../img/dentistOffice.jpg";
import operatingRoom from "../../img/operatingRoom.jpg";
import melet from "../../img/melet.jpg";

//create your first component
export function MainPage() {
	return (
		<div className="text-center mt-5, serif">
			<div className="container">
				<div className="navbar">
					<nav className="navbar navbar-expand-lg navbar-dark bg-primiry">
						<a className="navbar-brand" href="#">
							Webb Millsaps Law, PPL
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarColor02"
							aria-controls="navbarColor02"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarColor02">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Home{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Features
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Pricing
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										About
									</a>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<input
									className="form-control mr-sm-2"
									type="text"
									placeholder="Search"
								/>
								<button
									className="btn btn-secondary my-2 my-sm-0"
									type="submit">
									Search
								</button>
							</form>
						</div>
					</nav>
				</div>

				<div className="card1">
					<div className="cardPhoto">
						<img
							src={steBook}
							className="card-img-top"
							alt="Stethoscope on the Book"
						/>
					</div>
					<div className="contentMain">
						<h1 className="display-4">
							INTEGRITY, VALUES, EXCELLENCE
						</h1>
						<p className="lead">
							Webb Millsaps, a Board-Certified Healthcare Law
							Attorney in Florida, specializes in providing
							quality healthcare law services in Florida to serve
							the legal needs of physicians, surgeons, dentists,
							veterinarians, hospitals, practice management
							companies, home health agencies (HHAs), ambulatory
							surgical centers (ASCs), clinical labs and
							diagnostic testing facilities, as well as other
							healthcare providers and facilities. He is among a
							very select group of attorneys certified in
							healthcare law in the state of Florida and is one of
							the few board-certified healthcare lawyers offering
							his services through a small boutique law firm
							rather than a large (and expensive) corporate law
							office.
						</p>
						<p className="lead">
							Call our office today. We are here to help build
							your practice
						</p>
					</div>
				</div>

				<div className="jumbotron jumbotron-fluid">
					<div className="container1">
						<h1 className="display-6">Our Goal</h1>
						<p className="lead2">
							Individuals and corporations within the healthcare
							field face an ever-increasing need to rely on the
							knowledge and experience of an attorney. Our
							healthcare law services cover all legal aspects
							impacting a provider or facility within the
							healthcare field, from practice set-up through
							healthcare regulation compliance. Some common types
							of services covered by our experienced healthcare
							lawyer include: Set-up of New Medical Practices and
							Healthcare Companies Buy-Sell / Changes in Ownership
							Licensure Contracts and Agreements Succession and
							Exit Strategy Planning Healthcare Law Compliance
							HIPAA Laws Medicare Audit Defense Financial
							Investments Healthcare Contract and Reimbursement
							Disputes Healthcare providers, facilities and
							management companies face unique legal issues that
							require the expertise of an attorney experienced in
							healthcare law. Webb Millsaps has the experience,
							education and knowledge needed by those in the
							healthcare field looking for solid counseling and
							representation. We are committed to protecting the
							rights and interests of our clients with a focus on
							integrity, open communication, excellence and value.
							At all times, we strive to earn your trust and
							confidence and work as your advocate. For more
							information about the healthcare law services in
							Florida offered by Webb Millsaps, contact
							561-900-7238.
						</p>
						<hr className="my-4" />
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Learn more
						</a>
					</div>
				</div>

				<div className="card-deck">
					<div className="card">
						<img
							src={dentistOffice}
							className="card-img-top2"
							alt="DentistOffice"
						/>
						<div className="card-body">
							<h5 className="card-title">OPEN NEW PRACTICE</h5>
							<p className="card-text">
								We will help you to open your new practice and
								run it smoothly on day to day basis
							</p>
							<p className="card-text">
								<small className="text-muted">More</small>
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src={contract}
							className="card-img-top2"
							alt="contract"
						/>
						<div className="card-body">
							<h5 className="card-title">BUSINESS CONTRACTS</h5>
							<p className="card-text">
								Every little ditail is important. Business
								Contract will help you to run your practice.
							</p>
							<p className="card-text">
								<small className="text-muted">More</small>
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src={operatingRoom}
							className="card-img-top2"
							alt="operatingRoom"
						/>
						<div className="card-body">
							<h5 className="card-title">HEALTHCARE</h5>
							<p className="card-text">
								Healthcare is very complicated and vast system.
								We will help you to navigate.
							</p>
							<p className="card-text">
								<small className="text-muted">More</small>{" "}
							</p>
						</div>
					</div>
				</div>
				<div className="card5">
					<div className="footer">
						Text of the Footer w/ links to Linked
					</div>
				</div>
			</div>
		</div>
	);
}
