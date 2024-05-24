import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1; // all images in the same size
  margin: 3px; // space between images
  height: 70vh;
  position: relative; // parent
`;
const Image = styled.img`
  width: 100%; // gize size of the photo before customize the img size
  height: 100%;
  object-fit: cover; // crop images to the covered part only
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute; // of childeren (position:absolute), give the parent (position:relative)
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOW NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
