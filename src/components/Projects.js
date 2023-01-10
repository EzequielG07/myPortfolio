import "../App.css";

const Projects = () => {
  return (
    <>
      <div className="espacio flex">
        <h2>My projects i´ve built</h2>

        <div>
          <img
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280862/portfolio/ProyectoReactJs_qrfqff.png"
            alt=""
            className="foto"
          />
          <p>Este es mi proyecto en React JS</p>
          <ul>
            <li>React Js</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>StyledComponents</li>
          </ul>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280860/portfolio/ProyectoDW_ly0hzi.png"
            alt=""
            className="foto"
          />
          <p>Este es mi proyecto en Desarrollo Web</p>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280860/portfolio/ProyectoJs_zckc2y.png"
            alt=""
            className="foto"
          />
          <p>Este es mi proyecto para JavaScript</p>
          <ul>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
