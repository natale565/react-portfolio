import myResume from '../../assets/resume/Christopher-Natale.pdf'
import {BsCloudDownload} from 'react-icons/bs'
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume(){
  return (
    <>
    <section>
        <div className='flex-row'>
            <h2 className="section-title secondary-border">My Resume</h2>
        </div>

        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <p>Download my resume to learn more about my experience and skills.</p>
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              
              <p>
                Please feel free to check out my list of Developer
                Proficiencies!
              </p>
            </div>
          </div>
        </div>
        </section>

        <section>
            
            <div className='article column1'>
                <p className='column-title'>Front-End Skills</p>
                <p>
                    <ul>
                        <li className="logo">
                            <MdFoundation />
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
                                <GrTechnology /></li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>NoSQL</li>
                            <li>APIs</li>
                            <li>Object-Relational Mapping</li>
                            <li>Model-View-Conroller</li>
                            <li>REST</li>
                        </ul>
                        </p>
                    </div>

                    <div className='article column3'>
                        <p className='column-title'>Performence Skills</p>
                        <p>
                            <ul><li className="logo">
                                <GrDocumentPerformance />
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
        </section>
    </>

  )
}

export default Resume