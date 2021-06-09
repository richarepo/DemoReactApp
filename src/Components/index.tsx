import { useEffect, useState } from 'react'
import styled from 'styled-components';
import BookCard from './Common/BookCard';
import BookDetailPopup from './Common/BookDetailPopup';
import BookList from './Common/BookList';


interface IProps {
  darkMode: string,
  listView: boolean
}

interface BookIProp {
  isbn: number,
  title: string,
  subtitle: string,
  author: string,
  published: string,
  publisher: string,
  pages: number,
  category: string,
  percentage: string,
  description: string,
  website: string,
  image: string,
  lastOpened: string
}


const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

const Input: any = styled.input`
  padding: 14px 10px 14px 40px;
  box-sizing: border-box;
  border: none;
  background: ${(props: any) => props.darkMode ? '#000' : '#fff'};
  color: ${(props: any) => props.darkMode ? '#fff' : '#000'};
  border: ${(props: any) => props.darkMode ? '1px solid #fff' : '1px solid #D4D8DA'};
  font-size: 16px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
  width: 100%;
`;

const AllBooks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media(max-width:500px){
    justify-content: center;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 30%;
   @media(max-width:950px){
    width: 70%;
  }
  @media(max-width:700px){
    width: 100%;
  }
`;

const SearchIcon = styled.i`
position: absolute;
left: 10px;
top: 15px;
font-size: 22px;
`;

const NotFoundText = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
`;

function BookContainer(props: IProps) {

  const [books, setBooks] = useState([]);
  const [fetchedData, setFetched] = useState(false);
  const [openBookDetail, setOpenBookDetail] = useState('');

  const getBooks = (search?: string) => {
    fetch('book.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    ).then(function (response) {
      return response.json();
    }).then(function (myJson) {
      if (search) {
        const resp: any = searchBooks(search, myJson.books);
        setBooks(resp);
      } else {
        setBooks(myJson.books);
      }
      setFetched(true)
    });
  }

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);

  const searchBooks = (search: string, books: BookIProp[]) => {
    const filteredBooks = books.filter((book: any) => {
      if (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.category.toLowerCase().includes(search.toLowerCase())
      ) return true;
      return false;
    });
    return filteredBooks;
  }

  const filterBooks = async (e: any) => {
    const value = e.target.value;
    await getBooks(value)
  }

  return (
    <Container>
      {!!openBookDetail &&
        <BookDetailPopup darkMode={props.darkMode} book={openBookDetail} handleClose={setOpenBookDetail} />
      }
      <InputDiv>
        <InputWrapper>
          <SearchIcon className="fa fa-search" aria-hidden="true" style={{ cursor: 'pointer', color: props.darkMode ? "#fff" : "#8F8F8F" }} />
          <Input darkMode={props.darkMode} placeholder="Search book by name, author.." onChange={filterBooks} />
        </InputWrapper>
      </InputDiv>
      <AllBooks>
        {!!books && books.length > 0 ? props.listView ? <BookList books={books} setOpenBookDetail={setOpenBookDetail} /> :
          books.map((book, i) => {
            return <BookCard key={i} book={book} darkMode={props.darkMode} setOpenBookDetail={setOpenBookDetail} />
          })
          :
          fetchedData && <NotFoundText>404 Not Found.</NotFoundText>
        }
      </AllBooks>
    </Container>
  )
}

export default BookContainer;
