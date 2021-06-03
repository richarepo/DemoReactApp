import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: fixed;
height: 100%;
top: 0;
width: 100%;
background: rgba(51,51,51,0.62);
left: 0;
right: 0;
bottom: 0;
z-index: 101;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
width: ${props => isNaN(props.width) ? props.width : props.width + 'px'};
height: ${props => isNaN(props.height) ? props.height : props.height + 'px'};
position: relative;
background: #fff;
padding: 15px;
max-height: 90vh;
overflow-y: scroll;
overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0px;
  }
  border-radius: 20px;
  margin: 0px 20px;
  @media(max-width: 500px){
    border-radius: 20px;
  }
`;

const Cross = styled.i`
position: absolute;
right: 15px;
font-size: 22px;
 @media(max-width: 500px){
    right: 20px;
  }
`;

const disableBackgroundScroll = state => {
  let elem = document.getElementById(`body-section`);
  if (!!state) {
    elem.style.overflow = "hidden";
  } else {
    elem.style.overflow = 'unset';
  }
}

class PopUp extends Component {
  static defaultProps = {
    height: 'auto',
    width: 'auto',
    closeOnEsc: false,
    className: '',
    customStyles: {},
    closeOnOutSideClick: true
  }

  constructor(props) {
    super(props);
    this.winWrapper = React.createRef()
  }

  componentDidMount = () => {

    document.addEventListener('mousedown', this.handleClickOutside)
    document.addEventListener('keydown', this.handleKeyDown)
    disableBackgroundScroll(true);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
    document.removeEventListener('keydown', this.handleKeyDown)
    disableBackgroundScroll(false);
  }

  handleClickOutside = event => {
    const { closeOnOutSideClick } = this.props;
    const elemWrapper = this.winWrapper;
    if (!!elemWrapper && elemWrapper.current !== null && !elemWrapper.current.contains(event.target)) {
      !!closeOnOutSideClick && this.handleClose();
    }
  }

  handleKeyDown = e => {
    const { closeOnEsc, onClose } = this.props
    if ((e.keyCode === 27 || e.key === "Escape") && !!closeOnEsc) {
      onClose()
    }
  }

  handleClose = () => this.props.onClose()

  render() {
    const { height, width, children, className, customStyles } = this.props
    return (
      <Container className={`${className} center-flex`}>
        <Wrapper className="product-popup" ref={this.winWrapper} height={height} width={width} style={customStyles}>
          <Cross
            className="fa fa-times"
            aria-hidden="true"
            style={{ cursor: 'pointer', color: false ? "#fff" : "#8F8F8F" }}
            onClick={() => this.handleClose()}
          />
          {children}
        </Wrapper>
      </Container>
    )
  }
}

export default PopUp;