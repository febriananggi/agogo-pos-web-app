import { Container } from 'unstated'

class ModalsContainer extends Container {

  state = {
    modal: false,
    modalType: 'reguler',
    modalSize: 'sm'
  };

  toggleModal = (type, size) => {
    this.setState({
      modalType: type,
      modalSize: size
    },
    () => {
      console.log("MODAL TYPE =>", this.state.modalType)
      this.setState({
        modal: !this.state.modal
      });
    })
  } 
  
}

export default ModalsContainer