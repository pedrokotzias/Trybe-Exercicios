import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML','CSS', 'JS'] 
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)

    return (
      <div>
        <h1>
          {'Pedro Kotzias'}
        </h1>
        <p>
          {'I love pizza'}
        </p>
        <h2>Minhas habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </div>
    )
  }
}

export default About;
