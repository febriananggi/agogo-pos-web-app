import { Container } from 'unstated'

class ModalsContainer extends Container {

  state = {
    page: 'splashscreen',
    modal: false,
    modalType: 'reguler',
    modalSize: 'sm'
  };

  setCurrentPage = (page) => {
    console.log("CURRENT PAGE")
    console.log(page)
    this.setState({
      page: page
    })
  }

  toggleModal = (type, size) => {
    this.setState({
      modalType: type,
      modalSize: size
    },
    () => {
      this.setState({
        modal: !this.state.modal
      });
    })
  } 
  
}

export default ModalsContainer