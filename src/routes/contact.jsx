import './contact.css';
import { useState } from 'react'
import Nav from '../components/nav';


function Contact() {
  const [isCopied, setIsCopied] = useState(false)

  const handleOnClick = () => {
    setIsCopied(true)
    navigator.clipboard.writeText('thdms1005@gmail.com')
    setTimeout(() => setIsCopied(false), 2000);
  }

    return (
      <div>
        <Nav/>
        <div className='contact-container'>
          <div className="email">
            <p>E-mail : thdms1005@gmail.com </p>
            <button
              onClick={handleOnClick}
              className="email-copy"
            >
            COPY
            </button> 
            {
              isCopied && <p>Copied !</p>
            }
          </div>
          <p> Phone  : +33 06 95 09 27 92</p>
        </div>
      </div>
    );
  }
  
  export default Contact;
  