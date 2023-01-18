import styled from "styled-components";
import "../App.css";

export const Container = styled.div`
  margin: 0 auto;
  /* margin-bottom: 5rem; */
  height: 100vh;
  width: 1200px;
  padding: 50px 100px;
  background-color: #17202a;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 320px;
    padding: 20px 20px;
    flex-direction: column;
    height: 75vh;
    border: dashed yellow 1px;
  }
`;

export const ContainerInfo = styled.div`
  text-align: justify;
  width: 500px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 300px;
  }
`;

export const Text = styled.p`
  color: #b3b3b3;
  font-family: "Roboto", sans-serif;
  font-size: 1.2em;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1em;
  }
`;

export const ProfilePicture = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border: solid white 1px;
  box-shadow: rgba(201, 249, 250, 0.4) 5px 5px,
    rgba(201, 249, 250, 0.3) 10px 10px, rgba(201, 249, 250, 0.2) 15px 15px,
    rgba(201, 249, 250, 0.1) 20px 20px, rgba(201, 249, 250, 0.05) 25px 25px;
  opacity: 0.2;
  &:hover {
    transition: 1s;
    opacity: 1;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

export const Subtitle = styled.h2`
  color: #dddddd;
  /* background-color: pink; */
  display: inline-block;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  /* &::after {
    position: absolute;
    content: " ";
    margin-left: 10px;
    background-color: currentColor;
    width: 200px;
    height: 2px;
    top: 0.6em;
    text-align: justify;
  } */
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5em;
  }
`;
//Experience
export const Icons = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 10px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

export const ContainerSkill = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (min-width: 320px) and (max-width: 480px) {
    border: dashed pink 1px;
  }
`;

export const Skill = styled.li`
  color: white;
  margin: 10px 0;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 0.6em;
  }
`;

export const ListSkillsOne = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 480px) {
    border: dashed yellow 1px;
  }
`;

export const ListSkillsTwo = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 480px) {
    border: dashed green 1px;
  }
`;
//Projects-----------------------------------------------
export const ContainerProjects = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 1400px;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 1600px;
    border: dashed pink 1px;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0;
  column-gap: 15px;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    /* border: solid red 1px; */
    justify-content: space-around;
    row-gap: 10px;
  }
`;

export const ProjectInfoReverse = styled(ProjectInfo)`
  flex-direction: row-reverse;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Screenshot = styled.img`
  height: 322px;
  width: 600px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  opacity: 0.3;
  &:hover {
    transition: 1s;
    opacity: 1;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 280px;
    height: 150px;
  }
`;

export const Info = styled.div`
  /* border: solid red 3px; */
  width: 40%;
  position: relative;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  position: absolute;
  bottom: 2rem;
  padding: 0px;
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    bottom: 0;
  }
`;

export const ListRev = styled(List)`
  right: 0px;
`;

export const ListItem = styled.li`
  color: rgb(179, 179, 179);
  font-size: 0.8em;
  opacity: 0.4;
  margin: 5px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 0.6em;
  }
`;

export const LinkPages = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 0px;
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
  }
`;

export const LinkPagesRev = styled(LinkPages)`
  left: 0px;
`;

export const Description = styled.p`
  color: #b3b3b3;
  background-color: #212f3c;
  box-shadow: rgba(82, 82, 95, 0.25) 0px 6px 12px -2px,
    rgba(255, 255, 255, 0.3) 0px 3px 7px -3px;
  padding: 5px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 1.2em;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1em;
    margin-bottom: 5px;
  }
`;

export const TitleProj = styled.h3`
  color: #16a085;
  font-family: "Oswald", sans-serif;
`;

//Contact Me-------------------------------------------
export const ButtonContact = styled.button`
  background-color: #17202a;
  color: #16a085;
  margin: 2px 0;
  border: 2px solid #16a085;
  border-radius: 5px;
  font-size: 1.2em;
  height: 3rem;
  &:hover {
    transition: 0.5s;
    background-color: #16a085;
    color: #17202a;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1em;
    height: 2.5rem;
  }
`;

//Greeting --------------------------------------------
export const ContainerGreetings = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Greetings = styled.p`
  color: #16a085;
  font-size: 1.5em;
  font-family: "Oswald", sans-serif;
  margin: 0;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1em;
  }
`;

export const MyName = styled.h1`
  color: white;
  font-family: "Roboto Slab", serif;
  font-size: 6em;
  margin: 20px 0 5px 0;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 2em;
  }
`;

export const MyDegree = styled.h2`
  color: grey;
  font-family: "Roboto Slab", serif;
  font-size: 5em;
  margin-bottom: 15px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const Logo = styled.img`
  height: 15%;
  width: 100%;
`;

//social media
export const ContainerMedia = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  /* position: -webkit-sticky; */
  bottom: 0;
  position: fixed;
  left: 1.5rem;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: row;
  }
`;

//navbar-----
export const Span = styled.span`
  color: #16a085;
  font-weight: 800;
`;

//contacUs
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #17202a;
`;

export const DataForm = styled.label`
  background-color: #17202a;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

export const InputForm = styled.input`
  background-color: rgb(179, 182, 183);
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;

export const TextForm = styled.textarea`
  background-color: rgb(179, 182, 183);
  height: 10rem;
  font-family: "Poppins", sans-serif;
`;

export const ButtonSend = styled.input`
  margin-top: 2rem;
  background-color: #17202a;
  color: #16a085;
  border: 2px solid #16a085;
  border-radius: 5px;
  font-size: 1.2em;
  height: 3rem;
  &:hover {
    transition: 0.5s;
    background-color: #16a085;
    color: #17202a;
  }
`;

//Language--------
export const ContainerLanguages = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  bottom: 0;
  position: fixed;
  right: 1.5rem;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: row;
  }
`;
