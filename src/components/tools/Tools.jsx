import './tools.scss'
import {
  SiJavascript,
  SiVisualstudiocode,
  SiVuedotjs,
  SiPostman,
  SiHeroku,
  SiReact,
  SiCss3,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiSass,
  SiTailwindcss
} from "react-icons/si"

export default function Tools() {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className='technologies'>
        <SiHtml5 />
        <SiCss3 />
        <SiSass />
        <SiTailwindcss />
        <SiJavascript />
        <SiVuedotjs />
        <SiReact />
        <SiNodedotjs />
        <SiMongodb />
        <SiFigma />
      </div>
      <h2>Tools I Use</h2>
      <div className='tools'>
        <SiNetlify />
        <SiPostman />
        <SiHeroku />
        <SiVisualstudiocode />
        <SiGithub />
      </div>
    </div>
  )
}
