import './style.css'
const Skills = () => {
  const skills = ["MERN STACK","Express.js & Node.js", "JavaScript / React", "SQL & Databases", "Python"];

  return (
    <section className="skill-container" id="skills">
      <h2 className="skill-title">My Skills</h2>
      <br />
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
