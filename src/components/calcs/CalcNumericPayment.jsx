import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./CalcNumeric.scss";

class CalcNumeric extends Component {
  constructor(props){
    super(props)
  }
  state = {
    layoutName: "default",
    valueInputPayment: '',
    inputName: ''
  };
  
  render() {
    return (
      <div>
        <Keyboard
          ref={r => (this.keyboard = r)}
          layoutName={this.state.layoutName}
          layout={{
            default: ["{rp} {percentage}", "1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"]
          }}
          display={{
            '{bksp}': '<i class="fas fa-backspace"></i>',
            '{enter}': '<i class="fas fa-level-down-alt"></i>',
            '{rp}': 'Rp',
            '{percentage}': '%'
          }}
          buttonTheme={[
            {
              class: "bg-orange",
              buttons: "{enter}"
            },
            {
              class: "bg-red text-lightGrey",
              buttons: "{bksp}"
            },
            {
              class: "bg-red text-white",
              buttons: "{close}"
            }
          ]}
          inputName={this.props.cartStore.state.activeInputPayment}
          onChangeAll={inputs => this.props.cartStore.onChangePayment(inputs)}
          onKeyPress={button => this.props.cartStore.onKeyPressPayment(button)}
        />

      </div>
    );
  }
}

export default CalcNumeric