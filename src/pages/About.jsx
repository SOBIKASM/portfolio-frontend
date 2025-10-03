import './style.css'
const About =() => {
  return (
    <div className='about-container' id='about'>
      <h2 className="about-title">About Me</h2>
      <br />
      <div className='about-section'>
        <img src="chihiro.jpg" alt="profile" />
        <div className='about-text'>

          <p >
            Hi, I’m <strong>Sobika S M</strong>, a passionate and curious learner in the world of technology.
            I enjoy solving problems, building meaningful projects, and exploring how technology can make life easier and more creative.
          </p><br />
          <p >
            Currently, I’m focusing on <strong>web development</strong> and exploring areas like <strong>computer vision</strong> and <strong>AI-powered applications</strong>.
          </p> <br />
          <p >
            When I’m not coding, I enjoy reading character-driven books, exploring creative ideas, and continuously learning new skills that help me grow both personally and professionally.
          </p><br />
          <p >
            My goal is to build impactful solutions, contribute to innovative projects, and keep improving as a developer and problem-solver.
          </p>
        </div>

      </div>


    </div>
  )
}
export default About