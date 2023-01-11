import "../App.css";
import {
  ContainerProjects,
  Subtitle,
  ProjectInfo,
  ProjectInfoReverse,
  Screenshot,
  Info,
  Text,
} from "./styledComponents";

const Projects = () => {
  return (
    <>
      <ContainerProjects>
        <Subtitle>My projects i´ve built</Subtitle>

        <ProjectInfo>
          <Screenshot
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280862/portfolio/ProyectoReactJs_qrfqff.png"
            alt=""
            className="foto"
          />
          <Info>
            <Text>Este es mi proyecto en React JS</Text>
            <ul>
              <li>React Js</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>StyledComponents</li>
            </ul>
          </Info>
        </ProjectInfo>

        <ProjectInfoReverse>
          <Screenshot
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280860/portfolio/ProyectoJs_zckc2y.png"
            alt=""
            className="foto"
          />

          <Info>
            <Text>Este es mi proyecto para JavaScript</Text>
            <ul>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Bootstrap</li>
            </ul>
          </Info>
        </ProjectInfoReverse>

        <ProjectInfo>
          <Screenshot
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280860/portfolio/ProyectoDW_ly0hzi.png"
            alt=""
            className="foto"
          />
          <Info>
            <Text>Este es mi proyecto en Desarrollo Web</Text>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Bootstrap</li>
            </ul>
          </Info>
        </ProjectInfo>
      </ContainerProjects>
    </>
  );
};

export default Projects;
