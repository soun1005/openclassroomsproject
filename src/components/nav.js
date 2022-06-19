import './nav.css';
import { Link } from "react-router-dom";
import studioMoonLogo from '../images/studioMoonLogo.png'

function nav() {
    return(
      <header>
        <div className="header-wrap">
          <Link to="/" className="logo-wrap">
          	<img alt="Studiomoon Logo" src={studioMoonLogo}/>
            <div className="text-in-logo">
            	<h2>Studio Moon</h2>
              <p>By Lee Soeun</p>
            </div>
          </Link> 
          <nav>
          	<ul>
            	<li><Link to="/">HOME</Link></li> {" "}
              <li><Link to="/about">ABOUT</Link> </li>
              <li><Link to="/contact">CONTACT</Link></li>          
            </ul>
          </nav>
        </div>
    	</header>
    )
}
 
export default nav;