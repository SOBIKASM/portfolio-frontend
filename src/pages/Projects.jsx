import './style.css'

const Projects = () => {
  const projectList = [
    {
      title: "Volume Control by hand",
      tech: "Python,Opencv,Mediapipe",
      description: "This project recognise the space between index and the thumb and adjust the volume of the device correspondingly.",
      github: "https://github.com/SOBIKASM/Volume-control-with-hand",
      img: "https://tse3.mm.bing.net/th/id/OIP.K968ye3grQd_A4PjQ2ldngHaEK?pid=Api&P=0&h=180"
    },
    {
      title: "Count the fingers",
      tech: "Python,Opencv,Mediapipe",
      description: "The webcam input is captured and the fingers which opened are counted and the result is the count of fingers in hand.",
      github: "https://github.com/SOBIKASM/FIngerCountRightHand",
      img: "https://tse2.mm.bing.net/th/id/OIP.UDLULN5ar9ZqNSctwOH5DAHaEK?pid=Api&P=0&h=180"
    },
    {
      title: "A fact learning website",
      tech: "React.js,MongoDB,Node,js,Express.js",
      description: "This website gives curious minds a place to learn about stars,galaxies,constellations,perodic table and countries around the world in one place.",
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