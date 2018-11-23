import React, { Component } from "react";
import { FormGroup, Input, Label } from 'reactstrap';
import LogoAgogo from "./../img/logo-agogo.png";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../sass/CalcNumeric.scss";
import '../sass/Login.scss';

var classNames = require('classnames');


class SaldoAwal extends Component {

  constructor(props) {
    super(props);
  };

  state = {
    layoutName: 'default',
    saldo: '',
    pin: '',
    keyboardSaldo: true,
    keyboardPIN: false
  };

  onFocus = whatInput => {
    if(whatInput === 'saldo'){
      this.setState({ 
        keyboardSaldo: true,
        keyboardPIN: false
      })
      console.log("What Input?", whatInput);
    }else if(whatInput === 'pin'){
      this.setState({ 
        keyboardPIN: true,
        keyboardSaldo: false
      })
      console.log("What Input?", whatInput);
    }
  };

  onChangeSaldo = saldo => {
    this.setState({
      saldo: saldo
    });
    console.log("Input Saldo changed", saldo);
  };
  onChangePIN = pin => {
    this.setState({
      pin: pin
    });
    console.log("Input PIN changed", pin);
  };

  onChangeInputSaldo = event => {
    let saldo = event.target.value;
    this.setState(
      {
        saldo: saldo
      },
      () => {
        this.keyboard.setInput(saldo);
      }
    );
  };
  onChangeInputPIN = event => {
    let pin = event.target.value;
    this.setState(
      {
        pin: pin
      },
      () => {
        this.keyboard.setInput(pin);
      }
    );
  };

  render() {

    return (
      <section className="Login">
        <div className="container">

          <div className="row">
            <div className="col login-header">
              <div className="row">
                <div className="col-9">
                  <a href="/"><i className="fas fa-arrow-left mr-5"></i></a> SALDO AWAL
                </div>
                <div className="col-3 text-right">
                  <img src={LogoAgogo} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 box-pin">
              <div className="box-inner">

                <FormGroup className="mt-4">
                  <Label for="saldo" className="text-center d-block"><h3>Masukan Saldo Awal</h3></Label>
                  <Input 
                    onFocus={() => this.onFocus('saldo') } 
                    value={this.state.saldo} 
                    onChange={e => this.onChangeInputSaldo(e)}
                    type="number" name="saldo" id="saldo" placeholder="0"  size="lg" className="text-center mt-3 mb-5" 
                  />

                  <Label for="pin" className="text-center d-block"><h3>Kode Approval</h3></Label>
                  <Input 
                    onFocus={() => this.onFocus('pin') } 
                    value={this.state.pin} 
                    onChange={e => this.onChangeInputPIN(e)}
                    type="text" name="pin" id="pin" placeholder="PIN"  size="lg" className="text-center mb-5" 
                  />

                </FormGroup>
              </div>
            </div>

            <div className={ this.state.keyboardSaldo ? "col-6 box-calc saldo" : "col-6 box-calc pin" }>
              <div className="box-inner">

                <div id="keyboardSaldo" className={ this.state.keyboardSaldo ? "d-block" : "d-none" }>
                  <Keyboard
                    ref={r => (this.keyboard = r)}
                    layoutName={this.state.layoutName}
                    layout={{
                      default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"]
                    }}
                    display={{
                      '{bksp}': '<i class="fas fa-backspace"></i>',
                      '{enter}': '<i class="fas fa-level-down-alt"></i>',
                      '{shift}': 'shift'
                    }}
                    buttonTheme={[
                      {
                        class: "bg-orange",
                        buttons: "{enter}"
                      },
                      {
                        class: "bg-black text-lightGrey",
                        buttons: "{bksp}"
                      }
                    ]}
                    onChange={saldo => this.onChangeSaldo(saldo)}
                  />
                </div>

                <div id="keyboardPIN" className={ this.state.keyboardPIN ? "d-block" : "d-none" }>
                  <Keyboard baseClass={"keyboard2"}
                    ref={s => (this.keyboard = s)}
                    layoutName={this.state.layoutName}
                    layout={{
                      default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"]
                    }}
                    display={{
                      '{bksp}': '<i class="fas fa-backspace"></i>',
                      '{enter}': '<i class="fas fa-level-down-alt"></i>',
                      '{shift}': 'shift'
                    }}
                    buttonTheme={[
                      {
                        class: "bg-orange",
                        buttons: "{enter}"
                      },
                      {
                        class: "bg-black text-lightGrey",
                        buttons: "{bksp}"
                      }
                    ]}
                    onChange={pin => this.onChangePIN(pin)}
                  />
                </div>
                
              </div>
            </div>
          
          </div>
          
        </div>
      </section>
    )
  }
}

export default SaldoAwal