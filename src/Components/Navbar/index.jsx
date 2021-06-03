import Switch from '@material-ui/core/Switch';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.darkMode ? '#000' : '#fff'};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${props => props.darkMode ? '1px solid #fff' : '1px solid #000'};
`;

const Text = styled.div`
  font-size: ${props => props.size};
  font-weight: bold;
  color: ${props => props.darkMode ? '#FFF' : ' #000'};
  width: 100%;
`;

const SwitchView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

function NavBar({ darkMode, toggleDarkMode, listView, setView }) {
  return (
    <Container darkMode={darkMode}>
      <Text size='24px' darkMode={darkMode}>Book Library</Text>
      <Wrapper>
      {darkMode
        ? <i className="fa fa-sun-o" aria-hidden="true" onClick={toggleDarkMode} style={{ cursor: 'pointer', color: '#fff' }} />
        : <i className="fa fa-moon-o" aria-hidden="false" id="moon" onClick={toggleDarkMode} style={{ cursor: 'pointer', color: '#000' }} />
      }
      <SwitchView>
        <Text size='14px' darkMode={darkMode} className="gridlabel" >Grid</Text>
        <Switch
          checked={listView}
          onChange={setView}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Text size='14px' darkMode={darkMode} className="listlabel">List</Text>
        </SwitchView>
      </Wrapper>
    </Container>
  )
}

export default NavBar
