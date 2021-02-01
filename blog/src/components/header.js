
import PropTypes from "prop-types"
import React from "react"
import {Link} from 'gatsby'
import { Parallax } from 'react-parallax';
const mainBg = "https://templatemo.com/templates/templatemo_539_simple_house/img/simple-house-01.jpg";




const Header = ({ siteTitle }) => (
  <div className="placeholder">
			<Parallax bgImage={mainBg} strength={500}>
      <div style={{ height: 500 }}>
				<div className="tm-header">
					<div className="row tm-header-inner">
						<div className="col-md-6 col-12">
							
							<div className="tm-site-text-box">
								<h1 className="tm-site-title"> {siteTitle}</h1>
							</div>
						</div>
						<nav className="col-md-6 col-12 tm-nav">
							<ul className="tm-nav-ul">
								<li className="tm-nav-li"><Link className="nav-lis" to="/">Home</Link></li>
								<li className="tm-nav-li"><Link className="nav-lis" to="#">About</Link></li>
								<li className="tm-nav-li"><Link className="nav-lis" to="#">Contact</Link></li>
							</ul>
						</nav>	
					</div>
				</div>
        </div>
			</Parallax> 
		</div>
)



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
