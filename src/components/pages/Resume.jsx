import myResume from '../../assets/resume/Christopher-Natale.pdf'
import { GrDownload } from "react-icons/gr";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaDatabase } from "react-icons/fa6";
import { CgPerformance } from "react-icons/cg";

function Resume(){
  return (
    <section>
        <div className='flex-row'>
            <h2 className="section-title secondary-border">My Resume</h2>
        </div>

        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <p className='resume-p'>Click the icon below to download my resume and learn more about my experience and skills.</p>
              <a href={myResume} className="download-logo" download>
                <GrDownload />
              </a>
              
              <h3 className='skillPar'>
                List Of Developer Skills
              </h3>
            </div>
          </div>
        </div>
       

        
            <div className='col-Container'>

            <div className='article column1'>
                <p className='column-title'>Front-End Skills</p>
                <p>
                    <ul>
                        <li className="logo">
                            <HiMiniComputerDesktop />
                            </li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Handlebars</li>
                        <li>Git</li>
                    </ul>
                </p>
                </div>

                <div className='article column2'>
                    <p className='column-title'>Back-End Skills</p>
                    <p>
                        <ul>
                               <li className="logo">
                                <FaDatabase /></li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>NoSQL</li>
                            <li>APIs</li>
                            <li>Object-Relational Mapping</li>
                            <li>Model-View-Controller</li>
                            <li>REST</li>
                        </ul>
                        </p>
                    </div>

                    <div className='article column3'>
                        <p className='column-title'>Performance Skills</p>
                        <p>
                            <ul><li className="logo">
                                <CgPerformance />
                                </li>
                                <li>Progressive Web Applications</li>
                                <li>GraphQL</li>
                                <li>WebPack</li>
                                <li>Service Workers</li>
                                <li>IndexedDB</li>
                                <li>MERN</li>
                                <li>Progressive Web Applications</li>
                            </ul>
                            </p>

                        </div>
                        </div>
        </section>

  )
}

export default Resume