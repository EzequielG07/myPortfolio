import "../App.css";
import {
  ContainerProjects,
  Subtitle,
  ProjectInfo,
  ProjectInfoReverse,
  Screenshot,
  Info,
  TitleProj,
  List,
  ListItem,
  Description,
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
            <TitleProj>Este es mi proyecto en React JS</TitleProj>
            <Description>
              Este proyecto consiste en un simulador de e-commerce de software
              digital.
            </Description>
            <List>
              <ListItem>React Js</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Bootstrap</ListItem>
              <ListItem>StyledComponents</ListItem>
            </List>
          </Info>
        </ProjectInfo>

        <ProjectInfoReverse>
          <Screenshot
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280860/portfolio/ProyectoJs_zckc2y.png"
            alt=""
            className="foto"
          />

          <Info>
            <TitleProj>Este es mi proyecto para JavaScript</TitleProj>
            <Description>
              Este proyecto consiste en un simulador de reserva de habitaciones
              donde se puede elegir entre 3 tipos de habitaciones todos con un
              costo diferente
            </Description>
            <List>
              <ListItem>JavaScript</ListItem>
              <ListItem>HTML5</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Sass</ListItem>
              <ListItem>Bootstrap</ListItem>
            </List>
          </Info>
        </ProjectInfoReverse>

        <ProjectInfo>
          <Screenshot
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280860/portfolio/ProyectoDW_ly0hzi.png"
            alt=""
            className="foto"
          />
          <Info>
            <TitleProj>Este es mi proyecto en Desarrollo Web</TitleProj>
            <Description>
              Este proyecto consiste en un sitio web dedicado a la venta y
              diseño de productos impresos en tecnología 3D
            </Description>
            <List>
              <ListItem>HTML5</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Sass</ListItem>
              <ListItem>Bootstrap</ListItem>
            </List>
          </Info>
        </ProjectInfo>
      </ContainerProjects>
    </>
  );
};

export default Projects;
