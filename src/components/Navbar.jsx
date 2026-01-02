import "../styles/navbar.css"
import { RiGithubLine } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className="navbar_container" aria-label="Primary Navigation">
      <div className="navbar_anim">
        <div className="navbar_">
          <div></div>

          <a
            href="https://github.com/tcetamitpandey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <RiGithubLine size={25} />
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/amit-pandey-tcet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LuLinkedin size={22} />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="https://x.com/recursive_fool"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter (X) Profile"
          >
            <RiTwitterXLine size={22} />
            <span className="sr-only">Twitter</span>
          </a>

          <a
            href="/resume/Amit_Pandey_SDE.pdf"
            download
            aria-label="Download Resume PDF"
          >
            <CgFileDocument size={23} />
            <span className="sr-only">Resume</span>
          </a>

          <div></div>
        </div>
      </div>
    </nav>
  );
}
