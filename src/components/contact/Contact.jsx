import './contact.scss'
import { SiCodepen, SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
/* import { useState } from 'react'; */

export default function Contact() {
  /* const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  } */

  return (
    <div className='contact' id='contact'>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <h2>Contact Me</h2>
      <div className="left">
        <a href="https://github.com/FesalBadday" target="_blank" rel="noopener noreferrer"><SiGithub /> GitHub</a>
        <a href="https://codepen.io/Fesal" target="_blank" rel="noopener noreferrer"><SiCodepen /> CodePen</a>
        <a href="https://www.linkedin.com/in/fesal-badday-701347172" target="_blank" rel="noopener noreferrer"><SiLinkedin /> LinkedIn</a>
        <a href="mailto:fesal.n04@hotmail.com"><SiMaildotru /> fesal.n04@hotmail.com</a>
      </div>

      <div className="right">
        {/* <form onSubmit={handleSubmit}> */}
        <form action="https://formspree.io/f/mjvlkwbp" method="POST">
          <input type="text" name="Name" placeholder="Name *" required />
          <input type="email" name="Email" placeholder="Email *" required />
          <textarea name="Subject" placeholder="Subject *" required></textarea>
          <button type="submit">Send</button>
          {/* {message && <span>Thanks, I'll reply ASAP.</span>} */}
        </form>
      </div>
    </div>
  )
}
