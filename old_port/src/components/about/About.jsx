import Tools from '../tools/Tools'
import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='info'>
        {/* <p>
          I have graduated from SAIT (Southern Alberta Institute Technology) as a Junior Web Developer,
          I am motivated in designing and developing websites and then learn how to apply them in a business-oriented environment.
          I am excited to start my career as a Web Developer
        </p> */}
      </div>
      <div className="skills">
        <Tools />
      </div>
    </div>
  )
}
