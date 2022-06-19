import { Link } from "react-router-dom";
import './App.css';
import barcelona from './images/barcelona.jpg'
import france from './images/france.jpg'
import milano from './images/milano.jpg'
import porto from './images/porto.jpg'
import Nav from './components/nav';

function App() {
  return (
    <div className="container">
        <Nav/>
        <main className="arcitle-container">
            <article>
                <a href="#">
                    <img alt="porto gallery" src={porto}/>
                </a>
                <Link to="/photos">
                    <button className="btn-main"> 
                    Porto
                    </button>
                </Link>
            </article>

            <article>
                <a href="#">
                    <img alt="barcelona gallery" src={barcelona}/>
                </a>
                <Link to="/photos">
                    <button className="btn-main">Barcelona</button>
                </Link>
            </article>

            <article>
                <a href="#">
                    <img alt="milano gallery" src={milano}/>
                </a>
                <Link to="/photos">
                    <button className="btn-main">Milano</button>
                </Link>
            </article>

            <article>
                <a href="#">
                    <img alt="france gallery" src={france}/>
                </a>
                <Link to="/photos">
                    <button className="btn-main">France</button>
                </Link>
            </article>
        </main>
    </div>
  );
}

export default App;
