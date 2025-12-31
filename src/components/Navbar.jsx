

import "../styles/navbar.css"
import { RiGithubLine } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";


export default function  Navbar(){
    return (
        <div className="navbar_container">
  <div className="navbar_anim">
    <div className="navbar_">
      <div></div>
      <a  href="https://github.com/tcetamitpandey" target="_blank" ><RiGithubLine size={25} /></a>
      <a  href="https://www.linkedin.com/in/amit-pandey-tcet" target="_blank"  ><LuLinkedin size={22} /></a>
      <a  href="https://x.com/recursive_fool" target="_blank"  ><RiTwitterXLine size={22} /></a>
      <a  href="./resume/Amit_Pandey_SDE.pdf" download={true}  ><CgFileDocument size={23} /></a>
      <div></div>
    </div>
  </div>
</div>

    )
}