import headshot from '../../assets/images/Headshot.png';

function AboutMe() {
  return (
    <>
    
       
            <h2>About Me</h2>
            <div>
              
                <div className="profile-picture">
                    <img src={headshot} alt="profile picture"></img>
                </div>
                <p> 
                      My name is Christopher Natale, a former Product Specialist currently seeking to transfer to a Software Engineer role. I am currently enrolled in UCONNs Software Engineering Bootcamp and will be graduating in November 2024. Technical skills I have aquired include: Git, HTML, CSS, JavaScript, Node.js, Object-Oriented Programing (OOP), Express.js, SQL, NoSQL, React, and MERN Stack. Below are some of the projects I have worked on demonstrating my skills and knowledge. Please feel free to reach out to me with any questions or opportunities!
                    </p>
    
                
            </div>
        
    
    </>
  )
}

export default AboutMe