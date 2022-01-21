import './projects.scss'
import { useState } from "react"
import { data } from "../../projects"
import { GrPrevious, GrNext } from 'react-icons/gr'

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (direction) => {
    direction === 'previous'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 6)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className='projects' id='projects'>
      <div className="slideNum">
        {`${currentSlide + 1} / ${data.length}`}
      </div>

      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <a href={d.link} target="_blank" rel="noopener noreferrer">Take Me There</a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt={d.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <GrPrevious className='arrow previous' onClick={() => handleClick("previous")} />
      <GrNext className='arrow next' onClick={() => handleClick()} />
    </div>
  )
}
