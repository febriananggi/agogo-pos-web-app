import React from 'react'
import NumberFormat from 'react-number-format';


const CartTotal = (props) => {
  return (
    <tfoot>
      <tr className="table-spacer"><td></td></tr>
      <tr className="cart-subtotal">
        <td scope="row">Sub Total</td>
        <td className="subtotal-price"><NumberFormat value={props.cartStore.state.totalAmount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} /></td>
      </tr>
      <tr className="cart-subtotal">
        <td scope="row">Biaya Tambahan</td>
        <td className="subtotal-price"><NumberFormat value={props.cartStore.state.expenseAmount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} /></td>
      </tr>
      <tr className="cart-subtotal">
        <td scope="row">Diskon</td>
        <td className="subtotal-price"><NumberFormat value={props.cartStore.state.discountAmount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '}  /></td>
      </tr>
      <tr className="table-spacer"><td></td></tr>
      <tr className="cart-total">
        <th className="header grand-total-label">Sisa Pembayaran</th>
        <th className="header text-right grand-total">
          <NumberFormat value={props.cartStore.state.grandTotalAmount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} />,-
        </th>
      </tr>
    </tfoot>
  )
}

export default CartTotal