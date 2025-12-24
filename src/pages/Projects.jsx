import './style.css'

const Projects = () => {
  const projectList = [
    {
      title: "Sign Language Recognition",
      tech: "Python,Opencv,Mediapipe,Tensorflow",
      description: "The webcam input is captured and the trained model predicts the Alphabets in American Sign Language and written logic maps it to Indian Sign Language.",
      github: "https://github.com/SOBIKASM/TALK-WITH-HANDS-backend",
      img: "https://tse3.mm.bing.net/th/id/OIP.K968ye3grQd_A4PjQ2ldngHaEK?pid=Api&P=0&h=180"
    },
    {
      title: "Gesture control  projects",
      tech: "Python,Opencv",
      description: "These include few cv projects. They are ,Counting fingers in hands , Volume control using thumb and fore finger ,Virtual mouse ",
      github: "https://github.com/SOBIKASM/Hand-Gesture-Projects",
      img: "https://tse2.mm.bing.net/th/id/OIP.UDLULN5ar9ZqNSctwOH5DAHaEK?pid=Api&P=0&h=180"
    },
    {
      title: "A fact learning website",
      tech: "React.js,MongoDB,Node,js,Express.js",
      description: "Developed an interactive learning website offering information on stars, galaxies, constellations, periodic table, and world countries in one platform.",
      github: "https://github.com/SOBIKASM/happyLearning",
      img: "./Country page.png"
    }
  ]

  return (
    <div className='project-section' id='projects'>
      <h2 className="project-title">My Projects</h2>
      <div className='project-container'>
        {projectList.map((p, index) => (
          <div className='card-container' key={index}>
            <img className="project-thumbnail" src={p.img} alt="project thumbnail" />
            <h4>{p.title}</h4>
            <p className='card-tech'>{p.tech}</p>
            <p><strong>Description:</strong> {p.description}</p>
            <a className="github-link" href={p.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>

  )
}
export default Projects