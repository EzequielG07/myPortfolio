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
  LinkPages,
  LinkPagesRev,
  ListRev,
} from "./styledComponents";
import { FormattedMessage } from "react-intl";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";
import { GiDiploma } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";

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
          <a
            href="https://reliable-chimera-3367b1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Screenshot
              src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280862/portfolio/ProyectoReactJs_qrfqff.png"
              alt="Captura de la web ded mi proyecto de React"
              className="foto"
            />
          </a>
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
            <ListRev>
              <ListItem>React Js</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Bootstrap</ListItem>
              <ListItem>StyledComponents</ListItem>
            </ListRev>
            <LinkPages>
              <a
                aria-label="Repositorio de un proyecto"
                href="https://github.com/EzequielG07/Proyecto-React-Coderhouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="iconsLink" />
              </a>
              <a
                aria-label="Web del proyecto"
                href="https://reliable-chimera-3367b1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiArrowTopRightOnSquare className="iconsLink" />
              </a>
              <a
                aria-label="Certificado del proyecto"
                href="https://www.coderhouse.com/certificados/63b0c0e566893b000ef1bb33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbCertificate className="iconsLink" />
              </a>
              <a
                aria-label="Certificado del proyecto"
                href="https://www.coderhouse.com/certificados/63b0c0e566893b000ef1bb36"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GiDiploma className="iconsLink" />
              </a>
            </LinkPages>
          </Info>
        </ProjectInfo>

        <ProjectInfoReverse>
          <a
            href="https://ezequielg07.github.io/Proyecto-Javascript-CoderHouse-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Screenshot
              src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280860/portfolio/ProyectoJs_zckc2y.png"
              alt="Captura de la web ded mi proyecto de Javascript"
              className="foto"
            />
          </a>
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
            <LinkPagesRev>
              <a
                aria-label="Repositorio de un proyecto"
                href="https://github.com/EzequielG07/Proyecto-Javascript-CoderHouse-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="iconsLink" />
              </a>
              <a
                aria-label="Web del proyecto"
                href="https://ezequielg07.github.io/Proyecto-Javascript-CoderHouse-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiArrowTopRightOnSquare className="iconsLink" />
              </a>
              <a
                aria-label="Certificado del proyecto"
                href="https://www.coderhouse.com/certificados/6365d30d6580bf000e72fc20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbCertificate className="iconsLink" />
              </a>
            </LinkPagesRev>
          </Info>
        </ProjectInfoReverse>

        <ProjectInfo>
          <a
            href="https://adorable-bombolone-d91301.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Screenshot
              src="https://res.cloudinary.com/duniuldn7/image/upload/v1673280860/portfolio/ProyectoDW_ly0hzi.png"
              alt="Captura de la web ded mi proyecto para Desarrollo Web"
              className="foto"
            />
          </a>
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
            <ListRev>
              <ListItem>HTML5</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Sass</ListItem>
              <ListItem>Bootstrap</ListItem>
            </ListRev>
            <LinkPages>
              <a
                aria-label="Repositorio de un proyecto"
                href="https://github.com/EzequielG07/ProyectoCoderHouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="iconsLink" />
              </a>
              <a
                aria-label="Web del proyecto"
                href="https://adorable-bombolone-d91301.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiArrowTopRightOnSquare className="iconsLink" />
              </a>
              <a
                aria-label="Certificado del proyecto"
                href="https://www.coderhouse.com/certificados/6312054773e8790390cd4e6a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbCertificate className="iconsLink" />
              </a>
            </LinkPages>
          </Info>
        </ProjectInfo>
      </ContainerProjects>
    </>
  );
};

export default Projects;
