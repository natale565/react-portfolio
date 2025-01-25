import headshot from "../../assets/images/Headshot.png";

function AboutMe() {
  return (
    <section>
      <div className="profile-picture ">
        <img src={headshot} alt="profile picture"></img>
      </div>
      <section className="about-row aboutPara">
        <h2 className="H2AboutMe">About Me</h2>

        <p>
          My name is Christopher Natale, and I am a dynamic, results-oriented
          professional with over nine years of experience leading teams,
          surpassing sales targets, and driving business growth. I am now
          transitioning into Software Development, where I leverage my strengths
          in problem-solving, leadership, and collaboration to create impactful
          digital solutions. My background in sales has sharpened my
          communication, project management, and strategic thinking skills,
          which I now pair with technical expertise in full-stack and front-end
          development. Proficient in technologies such as HTML, CSS, JavaScript,
          React, SQL, and Node.js, I am passionate about building responsive,
          user-friendly web applications that address real-world challenges. As
          a lifelong learner and innovator, I am eager to tackle complex
          problems and contribute meaningful solutions to the tech industry.
        </p>

        <p>
          Beyond my professional pursuits, I am deeply committed to mental
          health advocacy and promoting wellness through balance and self-care.
          I maintain an active lifestyle as a dedicated gym enthusiast and find
          creative fulfillment in playing guitar and DJing. My career transition
          into software development has been fueled by a passion for continuous
          learning and growth. I aim to combine my leadership, business acumen,
          and technical skills to design user-focused applications that drive
          value and innovation. I thrive in collaborative environments and am
          excited to make a lasting impact in the tech world.
        </p>
      </section>
    </section>
  );
}

export default AboutMe;
