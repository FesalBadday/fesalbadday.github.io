import './projects.scss'
import { data } from "../../projects"

export default function Projects() {

  return (
    <div className='projects' id='projects'>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <h2>My Work</h2>
      {
        data.map((d) => (
          <div className="project">
            {
              d.id % 2 === 0 ?
                <>
                  <h3 className="phone">{d.title}</h3>
                  <img src={d.img} alt={d.title} className="left" />
                  <a href={d.link} target="_blank" rel="noopener noreferrer" className="button phone">Take Me There</a>
                  <span className="right">
                    <h3>{d.title}</h3>
                    {/* <p>{d.desc}</p> */}
                    <a href={d.link} target="_blank" rel="noopener noreferrer" className="button">Take Me There</a>
                  </span>
                </>
                :
                <>
                  <span className="left">
                    <h3>{d.title}</h3>
                    {/* <p>{d.desc}</p> */}
                    <a href={d.link} target="_blank" rel="noopener noreferrer" className="button">Take Me There</a>
                  </span>
                  <h3 className="phone">{d.title}</h3>
                  <img src={d.img} alt={d.title} className="right" />
                  <a href={d.link} target="_blank" rel="noopener noreferrer" className="button phone">Take Me There</a>
                </>
            }
          </div>
        ))
      }
    </div>
  )
}
