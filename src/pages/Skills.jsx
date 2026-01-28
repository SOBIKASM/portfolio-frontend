import "./style.css";

const Skills = () => {
  const skills = {
    "Programming Languages": ["C", "Python", "SQL"],
    "Web Development": [ "React.js","MongoDB", "Express.js", "Node.js"],
    "Machine Learning": ["OpenCV", "Mediapipe"],
    "Tools": ["VS Code", "GitHub", "Postman", "Figma"]
  };

  return (
    <section className="skill-container" id="skills">
      <h2 className="skill-title">Skills</h2>

      <div className="skill-grid">
        {Object.entries(skills).map(([title, items], index) => (
          <div key={index} className="skill-card">
            <h3>{title}</h3>
            <ul className="skill-list">
              {items.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
