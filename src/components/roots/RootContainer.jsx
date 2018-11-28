import { Container } from 'unstated'

class RootContainer extends Container {

  state = {
    path: '/',
    isFull: false
  };

  activePath = (path) => {
    console.log("CURRENT PATH")
    console.log(path)
    this.setState({
      path: path
    })
  }

  goFull = () => {
    this.setState({ isFull: true });
  }

}

export default RootContainer