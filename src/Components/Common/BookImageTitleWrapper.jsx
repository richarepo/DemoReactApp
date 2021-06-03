import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 60px;
  height: 90px;
  margin-top: 7px;
  border-radius: 10px;
`;

const TitleAndAuthorWrapper = styled.div`
  margin-left: 15px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const Author = styled.div`
  font-size: 16px;
  margin-top: -13px;
  color: #8F8F8F;
`;

function BookImageTitleWrapper(props) {
  const { data } = props;
  return (
    <Container className="list-wrapper">
      <Image src={data.image} />
      <TitleAndAuthorWrapper>
        <Title>{data.title} </Title>
        <Author>{data.author} </Author>
      </TitleAndAuthorWrapper>
    </Container>
  )
}

export default BookImageTitleWrapper
