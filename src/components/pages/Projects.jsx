import note from "../../assets/images/notetaker.png";
import weather from "../../assets/images/weatherAPI.png";
import movie from "../../assets/images/movie-database.png";
import jate from "../../assets/images/Screenshot 2024-10-12 at 9.59.55 AM.png";
import ecom from "../../assets/images/Screenshot 2024-10-12 at 9.52.19 AM.png";
import social from "../../assets/images/Screenshot 2024-10-12 at 10.16.02 AM.png";

function Projects() {
  return (
    
     <section className="my-projects mb-5" id="projects">
        <div className="my-projects-row">
            <h2 className='h2Projects'>Projects</h2>
            <div className="portfolio-content">
                <div className="images-grid d-grid gap-4 ">
                    <div className="grid-item">
                        <a href="https://express-js-note-taker-c9n7.onrender.com">
                            <img src={note} alt="Trip Planner App Image"></img>
                            <div className="image-hover-text">Deployed on Render. Applications deployed on Render can take longer to load.</div>
                        </a>
                        <div className="title">Express.js Note Taker</div>
                    </div>

                    <div className="grid-item">
                        <a href="https://natale565.github.io/weather-api/">
                            <img src={weather} alt="Weather DashboardImage"></img>
                            <div className="image-hover-text">Full functioning Weather API Dashboard.</div>
                        </a>
                        <div className="title">Weather Dashboard</div>
                     </div>
                   
                    
                     <div className="grid-item">
                        <a href="https://natale565.github.io/movie-night/">
                            <img src={movie} alt="Movie Database Image"></img> <div className="image-hover-text">Find a movie for your next movie night!</div>
                        </a>
                        <div className="title">Movie Database App</div>
                     </div>
                     <div className="grid-item">
                        <a href="https://progressive-web-applications-text-editor-w2ba.onrender.com/">
                            <img src={jate} alt="Note Taking App Image"></img>
                            <div className="image-hover-text">Deployed on Render. Applications deployed on Render can take longer to load.</div>
                        </a>
                        <div className="title">J.A.T.E - Just Another Text Editor</div>
                     </div>
                     <div className="grid-item">
                     <a href="https://app.screencastify.com/v3/watch/mkK2sq7j2qjqo0oVLBsq">
                        <img src={ecom} alt="E-Commerce Backend Image"></img>
                        <div className="image-hover-text">Click to watch the video, demonstrating the functionality of an e-commerce back end.</div>
                    </a>
                    <div className="title">E-Commerce Back End</div>
                 </div>
                  <div className="grid-item">
                     <a href="https://www.youtube.com/watch?v=XDtUJh-QHbg">
                        <img src={social} alt="Social Network API"></img>
                        <div className="image-hover-text">Click to watch the video, demonstrating the functionality of an e-commerce back end.</div>
                    </a>
                    <div className="title">NoSQL Social Network API</div>
                 </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects