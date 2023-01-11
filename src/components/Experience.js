import "../App.css";
import {
  Container,
  ContainerInfo,
  Text,
  Subtitle,
  Icons,
} from "./styledComponents";

const Experience = () => {
  return (
    <>
      <Container>
        <ContainerInfo>
          <Subtitle>Where i´ve worked</Subtitle>
          <Text>
            Here are a few technologies I've been working with recently:
          </Text>
          <ul>
            <li>
              JavaScript (ES6+)
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/js_zi5po9.png"
                alt="icono js"
              />
            </li>
            <li>
              React JS
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/react_original_wordmark_logo_icon_146375_gqoyj2.png"
                alt="icono react"
              />
            </li>
            <li>
              Node JS
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673395608/portfolio/nodejs_zcqgtf.png"
                alt="icono node"
              />
            </li>
            <li>
              HTML5
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/html-5_inteb5.png"
                alt="icono html"
              />
            </li>
            <li>
              CSS
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/css_original_wordmark_logo_icon_146576_c1t9qt.png"
                alt="icono css"
              />
            </li>
            <li>
              SASS
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/sass_lang_logo_icon_168004_liaiqm.png"
                alt="icono sass"
              />
            </li>
            <li>
              StyledComponents
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/styled_avum20.png"
                alt="icono styled"
              />
            </li>
            <li>
              Bootstrap
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/bootstrap_okkxdz.png"
                alt="icono bootstrap"
              />
            </li>
            <li>
              Git
              <Icons
                src="https://res.cloudinary.com/duniuldn7/image/upload/v1673395769/portfolio/git_plain_logo_icon_146507_ere5z0.png"
                alt="icono git"
              />
            </li>
          </ul>
        </ContainerInfo>
      </Container>
    </>
  );
};

export default Experience;
