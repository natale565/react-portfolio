import note from "../../assets/images/notetaker.png";
import weather from "../../assets/images/weatherAPI.png";
import movie from "../../assets/images/movie-database.png";
import jate from "../../assets/images/Screenshot 2024-10-17 at 10.16.17 PM.png";
import ecom from "../../assets/images/ecom.png";
import social from "../../assets/images/noSQL.png";
import RPG from "../../assets/images/rpg-game.png";
import curated from "../../assets/images/curated.png";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Projects() {
  return (
    <section className="my-projects mb-5" id="projects">
      <div className="my-projects-row">
        <h2 className="h2Projects">Projects</h2>
        <div className="portfolio-content">
          <div className="images-grid d-grid gap-4 ">
            <div className="grid-item">
              <img src={curated} alt="Curated Crates Homepage"></img>
              <div className="image-hover-text">
                <a href="https://github.com/natale565/Curated-Crates">
                  <FaGithub size={70} className="projectIcons" data-tooltip="GitHub Repository" />
                </a>
                <a href="https://curated-crates.onrender.com/">
                  <CgWebsite size={70} className="projectIcons" />
                </a>
              </div>

              <div className="title">Curated Crates</div>
            </div>

            <div className="grid-item">
              <img src={note} alt="note taker image"></img>
              <div className="image-hover-text">
                <a href="https://github.com/natale565/Express.js-Note-Taker">
                  <FaGithub size={70} className="projectIcons" />
                </a>
                <a href="https://express-js-note-taker-c9n7.onrender.com">
                  <CgWebsite size={70} className="projectIcons" />
                </a>
              </div>

              <div className="title">Express.js Note Taker</div>
            </div>

            <div className="grid-item">
              <img src={weather} alt="Weather DashboardImage"></img>
              <div className="image-hover-text">
                <a href="https://github.com/natale565/weather-api">
                  <FaGithub size={70} className="projectIcons" />
                </a>
                <a href="https://natale565.github.io/weather-api/">
                  <CgWebsite size={70} className="projectIcons" />
                </a>
              </div>

              <div className="title">Weather Dashboard</div>
            </div>

            <div className="grid-item">
              <img src={movie} alt="Movie Database Image"></img>{" "}
              <div className="image-hover-text">
                <a href="https://github.com/natale565/movie-night">
                  <FaGithub size={70} className="projectIcons" />
                </a>
                <a href="https://natale565.github.io/movie-night/">
                  <CgWebsite size={70} className="projectIcons" />
                </a>
              </div>
              <div className="title">Movie Database App</div>
            </div>

            <div className="grid-item">
              <img src={jate} alt="Note Taking App Image"></img>
              <div className="image-hover-text">
                <a href="https://github.com/natale565/progressive-web-applications-text-editor">
                  <FaGithub size={70} className="projectIcons" />
                </a>
                <a href="https://progressive-web-applications-text-editor-w2ba.onrender.com/">
                  <CgWebsite size={70} className="projectIcons" />
                </a>
              </div>
              <div className="title">J.A.T.E - Just Another Text Editor</div>
            </div>

            <div className="grid-item">
              <img src={ecom} alt="E-Commerce Backend Image"></img>
              <div className="image-hover-text">
                <a href="https://github.com/natale565/natale565-E-Commerce-Back-End">
                  <FaGithub size={70} className="projectIcons" />
                </a>
                <a href="https://app.screencastify.com/v3/watch/mkK2sq7j2qjqo0oVLBsq">
                  <CgWebsite size={70} className="projectIcons" />
                </a>
              </div>

              <div className="title">E-Commerce Back End</div>
            </div>

            <div className="grid-item">
              <img src={social} alt="Social Network API"></img>
              <div className="image-hover-text">
                <a href="https://github.com/natale565/18-NoSQL-Social-Network-API">
                  <FaGithub size={70} className="projectIcons" />
                </a>
                <a href="https://www.youtube.com/watch?v=XDtUJh-QHbg">
                  <CgWebsite size={70} className="projectIcons" />
                </a>
              </div>
              <div className="title">NoSQL Social Network API</div>
            </div>

            <div className="grid-item">
              <img src={RPG} alt="RPG game"></img>
              <div className="image-hover-text">
                <a href="https://github.com/natale565/RPG-game">
                  <FaGithub size={70} className="projectIcons" />
                </a>
                <a href="https://natale565.github.io/RPG-game/">
                  <CgWebsite size={70} className="projectIcons" />
                </a>
              </div>
              <div className="title">Dragon Repeller - RPG Game</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
