import styled from 'styled-components';
import PopUp from './Popup'

interface IProps {
  book: any,
  handleClose: any,
  darkMode: string
}

const Container = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 210px;
  margin-top: 30px;
  max-height: 260px;
  min-height: 260px;
  border-radius: 15px;
  margin-bottom: 20px;
  @media(max-width: 500px){
    height: 180px;
    width: 110px;
  }
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
  @media(max-width: 500px){
    font-size: 20px;
  }
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

const CloseButton: any = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  background: ${(props: any) => props.darkMode ? '#0A1D28' : '#E0EAF2'};
  color: ${(props: any) => props.darkMode ? '#fff' : '#000'};
  border: none;
  border-radius: 10px;
  width: 30%;
  align-items: center;
  justify-content: center;
  display: flex;
  outline: none;
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
  @media (max-width: 500px) {
    padding: 5px 30px;
  }
`;

function BookDetailPopup(props: IProps) {
  return (
    <PopUp
      onClose={props.handleClose}
      width={window.innerWidth < 468 ? 468 : 600}
    >
      <Container>
        <Image src={props.book.image} />
        <BookDetails>
          <Title>{props.book.title} </Title>
          <Author> {props.book.author}</Author>
          {!!props.book && !!props.book.description && props.book.description.length > 170 ?
            <Description>
              {props.book.description.substring(0, 170)}..
            </Description> :
            <Description> {props.book.description} </Description>
          }
        </BookDetails>
        <Buttons>
          <CloseButton darkMode={props.darkMode} onClick={() => props.handleClose()}>Close</CloseButton>
          <ContinueButton onClick={() => props.handleClose()}>Continue Reading</ContinueButton>
        </Buttons>
      </Container>
    </PopUp>
  )
}

export default BookDetailPopup
