import './about.css';
import Nav from '../components/nav';
import PhotoContact from '../images/photoContact.jpg'

function About() {
    return (
      <div className='about-container'>
        <Nav/>
        <div className='about-wrap'>
          <img alt="SoeunLee" src={PhotoContact}/>
               <div className='about-text-wrap'>
                <div className='top-description'>
                    <div className='upper-part'>
                        <p>About</p>
                        <p>Soeun Lee</p>
                    </div>
                </div>         
                <div className='bottom-description'>
                  <div className='self-introduction'>
                    <p>
                      From Seoul, living in France.<br/>
                      Speaks Korean, English, French and a little bit of Japanese.<br/>
                      Studied International commerce at Univ, <br/>
                      currently self-studying to become a front-end developer.<br/>
                      Love photography, music and cooking. <br/>
                    </p>
                    <br/>
                    <p>The Studio Moon is my personal photography portfolio and CV.</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default About;
  