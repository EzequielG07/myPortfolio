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
  Span,
} from "./styledComponents";
import { FormattedMessage } from "react-intl";

const Projects = () => {
  return (
    <>
      <ContainerProjects id="projects">
        <Subtitle>
          <Span>03. </Span>{" "}
          <FormattedMessage
            id="proyectos.titulo"
            defaultMessage="Error traslate"
          />
        </Subtitle>

        <ProjectInfo>
          <Screenshot
            src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280862/portfolio/ProyectoReactJs_qrfqff.png"
            alt=""
            className="foto"
          />
          <Info>
            <TitleProj>
              <FormattedMessage
                id="proyectos.react"
                defaultMessage="Error traslate"
              />
            </TitleProj>
            <Description>
              <FormattedMessage
                id="proyectos.descripcionReact"
                defaultMessage="Error traslate"
              />
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
            <TitleProj>
              <FormattedMessage
                id="proyectos.js"
                defaultMessage="Error traslate"
              />
            </TitleProj>
            <Description>
              <FormattedMessage
                id="proyectos.descripcionJs"
                defaultMessage="Error traslate"
              />
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
            <TitleProj>
              <FormattedMessage
                id="proyectos.dw"
                defaultMessage="Error traslate"
              />
            </TitleProj>
            <Description>
              <FormattedMessage
                id="proyectos.descripcionDw"
                defaultMessage="Error traslate"
              />
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
