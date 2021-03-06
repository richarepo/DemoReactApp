import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 10px;
  max-width: 210px;
  transition: 0.5s;
  cursor: pointer;
  @media(max-width:500px){
    max-width: 155px;
    margin: 10px 5px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  height: 340px;
  width: 100%;
  border-radius: 30px;
  @media(max-width:500px){
    height: 250px;
    width: 155px;
  }
`;

const BookTitle = styled.div`
  font-size: 18px;
  word-wrap: break-word;
  font-weight: bold;
  margin-top: 15px;
`;

const BookAuthor = styled.div`
  color: #BCADAA;
  font-weight: bold;
`;

const Category = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  background: #BCADAA;
  padding: 10px 20px;
  border-radius: 10px;
  background: ${props => props.darkMode ? 'rgba(28, 27, 26, 0.7)' : 'rgba(238, 234, 233, 0.7)'};
  font-weight: bold;
  text-align: right;
  @media(max-width:500px){
    font-size: 11px;
    font-weight: normal;
    right: 5px;
  }
`;

const Percentage = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  background: #BCADAA;
  padding: 8px 15px;
  border-radius: 10px;
  background: ${props => props.darkMode ? 'rgba(28, 27, 26, 0.7)' : 'rgba(238, 234, 233, 0.7)'};
  font-weight: bold;
`;

function BookCard({ book, darkMode, setOpenBookDetail }) {

  return (
    <Container onClick={() => setOpenBookDetail(book)}>
      <ImageWrapper>
        <Percentage darkMode={darkMode}>{book.percentage}</Percentage>
        <Image src={book.image} />
        <Category darkMode={darkMode}>{book.category}</Category>
      </ImageWrapper>
      <BookTitle>{book.title}</BookTitle>
      <BookAuthor>{book.author}</BookAuthor>
    </Container>
  )
}

export default BookCard
