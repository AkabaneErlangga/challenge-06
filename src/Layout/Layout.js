import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
				<a className="navbar-brand" href="/"><div className="rectangle mt-0 d-block"></div></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto mr-3">
						<li className="nav-item">
							<a className="nav-link" href="#our-service">Our Service</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#why-us">Why Us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#testimony">Testimonial</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#faq">FAQ</a>
						</li>
					</ul>
					<Link to="/register">
						<button className="btn btn-success my-2 my-sm-0" type="submit">Register</button>
					</Link>
				</div>
			</nav>

			{children}

			<div className="footer row">
				<div className="address col-lg-4">
					<div className="col-lg-10 mx-0 px-0">
						<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
						<p>binarcarrental@gmail.com</p>
						<p>081-233-334-808</p>
					</div>
				</div>
				<div className="navigation my-3 row col-lg-2 mt-lg-0">
					<a href="" className="col-12">Our services</a>
					<a href="" className="col-12">Why us</a>
					<a href="" className="col-12">Testimonial</a>
					<a href="" className="col-12">FAQ</a>
				</div>
				<div className="sosmed my-3 col-lg-3 my-lg-0">
					<p className="mb-2">Contact us</p>
					<img src="./img/icon_facebook.png" />
					<img src="./img/icon_twitter.png" />
					<img src="./img/icon_instagram.png" />
					<img src="./img/icon_mail.png" />
					<img src="./img/icon_twitch.png" />
				</div>
				<div className="copyright col-lg-3">
					<p className="text-center text-lg-left">Copyright Binar 2022</p>
					<div className="rectangle"></div>
				</div>
			</div>
		</>
	)
}

export default Layout