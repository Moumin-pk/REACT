import './App.css';

function App({Name,skills,Education,Interests,Extracurriculars}) {
  return (
    <div className="App">
  <div id="header" />
  <div className="left" />
  <div className="stuff">
    <br />
    <br />
    <h1>Resume</h1>
    <h2>{Name}</h2>
    <hr />
    <br />
    <p className="head">Interests</p>
    <ul>
      <li>{Interests.i1}</li>
      <li>{Interests.i2}</li>
      <li>{Interests.i3}</li>
      <li>{Interests.i4}</li>
      <li>{Interests.i5}</li>
    </ul>
    <p className="head">Skills</p>
    <ul>
      <li>{skills}</li>
    </ul>
    <p className="head">Education</p>
    <ul>
      <a href= {Education.url}>
        <li>{Education.Name}</li>
      </a>
      {/*Link*/}
      <a href="https://www.silvermineart.org/">
        <li>Silvermine School of Arts</li>
      </a>
      <li>Codeacademy</li>
    </ul>
    <p className="head">Experience</p>
    <ul>
      <li>Student Technology Intern for Wilton School District</li>
      <li>Babysitter</li>
    </ul>
    <p className="head">Extracurriculars</p>
    <ul>
      <li>{Extracurriculars.E1}</li>
      <li>{Extracurriculars.E2}</li>
      <li>{Extracurriculars.E3}</li>
    </ul>
  </div>
  <div className="right" />
  <div id="footer">
    <h2 id="name">Emily</h2>
  </div>

    </div>
  );
}

export default App;
