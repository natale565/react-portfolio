import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer >
      <h2>Made by Christopher Natale©</h2>
      <p>
        <ul>
          <a href="https://github.com/natale565">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/christopher-natale/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;