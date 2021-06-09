import styled from 'styled-components';

interface IProps {
  setView: any,
  darkMode: string,
  listView: boolean,
  toggleDarkMode: any
}

const Container: any = styled.div`
  width: 100%;
  background-color: ${(props: any) => props.darkMode ? '#000' : '#fff'};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props: any) => props.darkMode ? '1px solid #fff' : '1px solid #000'};
  .selected-view {
    color: black;
    border-radius: 4px;
    background: whitesmoke;
  }
  .listlabel {
    margin: 0px 5px;
  }
  .hover-view {
    :hover {
      color: black;
      border-radius: 4px;
      background: whitesmoke;
    }
  }
  .fa {
    padding: 7px;
    font-size: 23px;
    cursor: pointer;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

const Text: any = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: ${(props: any) => props.size};
  color: ${(props: any) => props.darkMode ? '#FFF' : ' #000'};
`;

function NavBar(props: IProps) {
  return (
    <Container darkMode={props.darkMode}>
      <Text darkMode={props.darkMode} size='24px' >Book Library</Text>
      {props.darkMode
        ? <i className="fa fa-adjust" aria-hidden="true" onClick={props.toggleDarkMode} style={{ cursor: 'pointer', color: '#fff' }} />
        : <i className="fa fa-adjust" aria-hidden="false" id="adjust" onClick={props.toggleDarkMode} style={{ cursor: 'pointer', color: '#000' }} />
      }
      <div onClick={() => props.setView(true)} className={`listlabel ${props.listView ? "selected-view" : "hover-view"}`}><i className="fa fa-bars " aria-hidden="true"></i> </div>
      <div onClick={() => props.setView(false)} className={`gridlabel ${!props.listView ? "selected-view" : "hover-view"} `}><i className="fa fa-th-large " aria-hidden="true"></i> </div>
    </Container>
  )
}

export default NavBar
