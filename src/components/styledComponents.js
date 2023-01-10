import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  padding: 50px 100px;
  background-color: #080808;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
