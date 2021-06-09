import React, { Component } from 'react'
import styled from 'styled-components'

interface IProps {
  onClose: any,
  width: number,
  height: string,
  children: object,
  className: string,
  closeOnEsc: boolean,
  customStyles: object,
  closeOnOutSideClick: boolean
}

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 101;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(51,51,51,0.62);
`;

const Wrapper: any = styled.div`
  width: ${(props: any) => isNaN(props.width) ? props.width : props.width + 'px'};
  height: ${(props: any) => isNaN(props.height) ? props.height : props.height + 'px'};
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

const disableBackgroundScroll = (state: boolean) => {
  let elem: any = document.getElementById(`body-section`)
  if (!!state) {
    elem.style.overflow = 'hidden'
  } else {
    elem.style.overflow = 'unset'
  }
}

class PopUp extends Component<IProps> {
  private winWrapper: React.RefObject<HTMLInputElement>;
  static defaultProps = {
    className: '',
    width: 'auto',
    height: 'auto',
    customStyles: {},
    closeOnEsc: false,
    closeOnOutSideClick: true
  }

  constructor(props: any) {
    super(props);
    this.winWrapper = React.createRef()
  }

  componentDidMount = () => {
    disableBackgroundScroll(true);
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    disableBackgroundScroll(false);
    document.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (event: any) => {
    const { closeOnOutSideClick }: IProps = this.props;
    const elemWrapper = this.winWrapper;
    if (!!elemWrapper && elemWrapper.current !== null && !elemWrapper.current.contains(event.target)) {
      !!closeOnOutSideClick && this.handleClose();
    }
  }

  handleKeyDown = (e: any) => {
    const { closeOnEsc, onClose } = this.props
    if ((e.keyCode === 27 || e.key === "Escape") && !closeOnEsc) {
      onClose()
    }
  }

  handleClose = () => this.props.onClose()
  render() {
    const { height, width, children, className, customStyles }: IProps = this.props
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
