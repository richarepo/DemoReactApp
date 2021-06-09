import styled from 'styled-components';

interface IProps {
  book: {
    title: string,
    image: string,
    author: string,
    category: string,
    percentage: string
  },
  darkMode: string,
  setOpenBookDetail: any
}

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

const Category: any = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  background: #BCADAA;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  text-align: right;
  background: ${(props: any) => props.darkMode ? 'rgba(28, 27, 26, 0.7)' : 'rgba(238, 234, 233, 0.7)'};
  @media(max-width:500px){
    font-size: 11px;
    font-weight: normal;
    right: 5px;
  }
`;

const Percentage: any = styled.div`
  top: 10px;
  left: 15px;
  padding: 8px 15px;
  font-weight: bold;
  position: absolute;
  background: #BCADAA;
  border-radius: 10px;
  background: ${(props: any) => props.darkMode ? 'rgba(28, 27, 26, 0.7)' : 'rgba(238, 234, 233, 0.7)'};
`;

function BookCard(props: IProps) {

  return (
    <Container onClick={() => props.setOpenBookDetail(props.book)}>
      <ImageWrapper>
        <Percentage darkMode={props.darkMode}>{props.book.percentage}</Percentage>
        <Image src={props.book.image} />
        <Category darkMode={props.darkMode}>{props.book.category}</Category>
      </ImageWrapper>
      <BookTitle>{props.book.title}</BookTitle>
      <BookAuthor>{props.book.author}</BookAuthor>
    </Container>
  )
}

export default BookCard
