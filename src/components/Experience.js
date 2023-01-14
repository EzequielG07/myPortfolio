import "../App.css";
import {
  Container,
  ContainerInfo,
  Text,
  Subtitle,
  Icons,
  Skill,
  ContainerSkill,
  ListSkillsOne,
  ListSkillsTwo,
  Span,
} from "./styledComponents";

const Experience = () => {
  return (
    <>
      <Container id="experience">
        <ContainerInfo>
          <Subtitle>
            <Span>02. </Span> Where i´ve worked
          </Subtitle>
          <Text>
            Here are a few technologies I've been working with recently:
          </Text>
          <ContainerSkill>
            <ListSkillsOne>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/react_original_wordmark_logo_icon_146375_gqoyj2.png"
                  alt="icono react"
                />
                React JS
              </Skill>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/js_zi5po9.png"
                  alt="icono js"
                />
                JavaScript (ES6+)
              </Skill>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/html-5_inteb5.png"
                  alt="icono html"
                />
                HTML5
              </Skill>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/css_original_wordmark_logo_icon_146576_c1t9qt.png"
                  alt="icono css"
                />
                CSS
              </Skill>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673395769/portfolio/git_plain_logo_icon_146507_ere5z0.png"
                  alt="icono git"
                />
                Git
              </Skill>
            </ListSkillsOne>
            <ListSkillsTwo>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673395608/portfolio/nodejs_zcqgtf.png"
                  alt="icono node"
                />
                Node JS
              </Skill>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/bootstrap_okkxdz.png"
                  alt="icono bootstrap"
                />
                Bootstrap
              </Skill>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/sass_lang_logo_icon_168004_liaiqm.png"
                  alt="icono sass"
                />
                SASS
              </Skill>
              <Skill>
                <Icons
                  src="https://res.cloudinary.com/duniuldn7/image/upload/v1673394961/portfolio/styled_avum20.png"
                  alt="icono styled"
                />
                StyledComponents
              </Skill>
            </ListSkillsTwo>
          </ContainerSkill>
        </ContainerInfo>
      </Container>
    </>
  );
};

export default Experience;
