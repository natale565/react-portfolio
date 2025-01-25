import headshot from "../../assets/images/Headshot.png";

function AboutMe() {
  return (
    <section className="about-me-section">
      <div className="profile-picture">
        <img src={headshot} alt="Christopher Natale" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          My name is Christopher Natale, and I am a dynamic, results-oriented
          professional with over nine years of experience leading teams,
          surpassing sales targets, and driving business growth. Transitioning
          into Software Development, I leverage my strengths in problem-solving,
          leadership, and collaboration to create impactful digital solutions.
        </p>
        <p>
          Beyond work, I am deeply committed to mental health advocacy,
          promoting wellness, and staying active as a dedicated gym enthusiast.
          I find creative fulfillment in playing guitar and DJing. I am
          passionate about continuous learning and using my skills to design
          user-focused applications that make an impact.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
