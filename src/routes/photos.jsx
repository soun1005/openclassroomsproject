import './photos.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Nav from '../components/nav';
import porto1 from '../images/porto-photos/porto1.jpg';
import porto2 from '../images/porto-photos/porto2.jpg';
import porto3 from '../images/porto-photos/porto3.jpg';
import porto4 from '../images/porto-photos/porto4.jpg';
import porto5 from '../images/porto-photos/porto5.jpg';
import porto6 from '../images/porto-photos/porto6.jpg';


function photos() {
    return (
    <>
      <Nav/>
      <div className='awesome-slider'>
      	<AwesomeSlider>
        	<div data-src= {porto1} />
          <div data-src= {porto2} />
          <div data-src= {porto3} />
          <div data-src= {porto4} />
          <div data-src= {porto5} />
          <div data-src= {porto6} />
        </AwesomeSlider>
      </div>
    </>
    )
}

export default photos;