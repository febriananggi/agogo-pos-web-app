import React from 'react'
import { Input } from 'reactstrap';
import NumberFormat from 'react-number-format';

const CartItem = (props) => {
  return (
    <tr>
      <td scope="row">{props.title}</td>
      <td className="item-delete text-right">
        <i className="fas fa-backspace btn-delete-item" onClick={() => props.cartStore.onRemoveFromCart(props.idx)} />
      </td>
      <td className="item-qty text-center">
        <Input 
          className={props.cartStore.state.activeItem === props.idx ? 'btn btn-danger focus' : 'btn btn-danger'}
          id={"qty"+props.id} 
          name={"qty"+props.id} 
          type="number" 
          size="sm" 
          placeholder={props.qty} 
          onClick={() => props.cartStore.setSelectedQtyID(props.idx, props.id, props.qty)}
        />
        {/* <input id="input1" onFocus={this.setActiveInput} value={this.state.input['input1'] || ""}/>
        <input id="input2" onFocus={this.setActiveInput} value={this.state.input['input2'] || ""}/> */}

        {/* <Button onClick={() => props.cartStore.onUpdateItem(props.id)}> + </Button> */}
      </td>
      <td className="text-right">
        <NumberFormat value={props.cartStore.sumTotalAmountPerItem(props.idx)} displayType={'text'} thousandSeparator={true}  />
      </td>
    </tr>
  )
}

export default CartItem