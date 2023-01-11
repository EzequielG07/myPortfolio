import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 50px 100px;
  /* background-color: #080808; */
  /* background-color: #1c2833; */
  background-color: #17202a;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerInfo = styled.div`
  text-align: justify;
  width: 350px;
`;

export const Text = styled.p`
  color: #b3b3b3;
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
`;

export const Subtitle = styled.h2`
  color: #dddddd;
  /* background-color: pink; */
  display: inline-block;
  position: relative;
  &::after {
    position: absolute;
    content: " ";
    margin-left: 10px;
    background-color: currentColor;
    width: 200px;
    height: 2px;
    top: 0.6em;
    text-align: justify;
  }
`;
//Experience
export const Icons = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 10px;
`;

export const Skill = styled.li`
  color: white;
  margin: 10px 0;
`;

//Projects-----------------------------------------------
export const ContainerProjects = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0;
  column-gap: 15px;
`;

export const ProjectInfoReverse = styled(ProjectInfo)`
  flex-direction: row-reverse;
`;

export const Screenshot = styled.img`
  height: 60%;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  opacity: 0.3;
  &:hover {
    transition: 1s;
    opacity: 1;
  }
`;

export const Info = styled.div`
  /* border: solid red 3px; */
  width: 40%;
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  position: absolute;
  bottom: 0px;
  padding: 0px;
`;

export const ListItem = styled.li`
  color: rgb(179, 179, 179);
  font-size: 0.8em;
  opacity: 0.4;
  margin: 5px;
`;

export const Description = styled.p`
  color: #b3b3b3;
  background-color: #212f3c;
  box-shadow: rgba(82, 82, 95, 0.25) 0px 6px 12px -2px,
    rgba(255, 255, 255, 0.3) 0px 3px 7px -3px;
  padding: 5px;
  border-radius: 5px;
`;

export const TitleProj = styled.h3`
  color: #16a085;
`;
