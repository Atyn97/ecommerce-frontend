import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: maroon;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
