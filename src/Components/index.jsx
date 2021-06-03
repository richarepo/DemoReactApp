import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import BookCard from './Common/BookCard';
import BookList from './Common/BookList';

const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

const Input = styled.input`
  padding: 14px 10px 14px 40px;
  box-sizing: border-box;
  border: none;
  background: ${props => props.darkMode ? '#000' : '#fff'};
  color: ${props => props.darkMode ? '#fff' : '#000'};
  border: ${props => props.darkMode ? '1px solid #fff' : '1px solid #D4D8DA'};
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

function BookContainer({ darkMode, listView }) {

  const [books, setBooks] = useState([]);
  const [fetchedData, setFetched] = useState(false);

  const getBooks = (search) => {
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
        const resp = searchBooks(search, myJson.books);
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

  const searchBooks = (search, books) => {
    const filteredBooks = books.filter(book => {
      if (book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search) ||
        book.category.toLowerCase().includes(search)
      ) return true;
      return false;
    });
    return filteredBooks;
  }

  const filterBooks = async (e) => {
    const value = e.target.value;
    await getBooks(value)
  }

  return (
    <Container>
      <InputDiv darkMode={darkMode}>
        <InputWrapper>
          <SearchIcon className="fa fa-search" aria-hidden="true" style={{ cursor: 'pointer', color: darkMode ? "#fff" : "#8F8F8F" }} />
          <Input darkMode={darkMode} placeholder="Search book by name, author.." onChange={filterBooks} />
        </InputWrapper>
      </InputDiv>
      <AllBooks>
        {!!books && books.length > 0 ? listView ? <BookList books={books} darkMode={darkMode} /> :
          books.map((book, i) => {
            return <BookCard key={i} book={book} darkMode={darkMode} />
          })
          :
          fetchedData && <NotFoundText>404 Not Found.</NotFoundText>
        }
      </AllBooks>
    </Container>
  )
}

export default BookContainer;
