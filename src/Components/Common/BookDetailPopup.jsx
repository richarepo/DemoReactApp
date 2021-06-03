import React from 'react'
import styled from 'styled-components';
import PopUp from './Popup'

const Container = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 40%;
  height: 320px;
  border-radius: 15px;
  margin-bottom: 20px;
  @media(max-width: 500px){
    height: 180px;
    width: 33%;
  }
`;

const BookDetails = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
`;

const Author = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #8F8F8F;
  margin-top: 10px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #95A0A6;
  margin-top: 25px;
  line-height: 24px;
  text-align: center;
  max-height: 235px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 35px;
`;

const CloseButton = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  background: ${props => props.darkMode ? '#0A1D28' : '#E0EAF2'};
  color: ${props => props.darkMode ? '#fff' : '#000'};
  border: none;
  border-radius: 10px;
  width: 30%;
`;

const ContinueButton = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  background: #1795F1;
  color: #fff;
  border: none;
  border-radius: 10px;
  width: 70%;
  margin-left: 10px;
  outline: none;
`;

function BookDetailPopup({ handleClose, book, darkMode }) {
  return (
    <PopUp
      onClose={handleClose}
      width={window.innerWidth < 468 ? 468 : 650}
    >
      <Container>
        <Image src={book.image} />
        <BookDetails>
          <Title>{book.title} </Title>
          <Author> {book.author}</Author>
          {!!book && !!book.description && book.description.length > 250 ?
            <Description>
              {book.description.substring(0, 250)}..
            </Description> :
            <Description> {book.description} </Description>
          }
        </BookDetails>
        <Buttons>
          <CloseButton darkMode={darkMode} onClick={handleClose}>Close</CloseButton>
          <ContinueButton>Continue Reading</ContinueButton>
        </Buttons>
      </Container>
    </PopUp>
  )
}

export default BookDetailPopup
