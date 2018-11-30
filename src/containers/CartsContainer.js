import { Container } from 'unstated'


class CartsContainer extends Container {

  state = {
    items: [],
    selectedProduct: {},
    isAdded: false,
    isCalcNumericCartOpen: false,
    inputQtyCartItem: '',
    selectedQtyID: '',
    layoutName: "default",
    onReset: false,
    activeItem: -1,
    totalAmount: 0,
    discountAmount: 0,
    expenseAmount: 0,
    grandTotalAmount: 0,
    isCashierOverlayShow: false
  };

  onAddToCart = this.onAddToCart.bind(this);
  onRemoveFromCart = this.onRemoveFromCart.bind(this);

  onAddToCart(selectedProduct) {

    let id = selectedProduct.id
    let qty = selectedProduct.qty
    let index = this.state.items.findIndex( x => x.id === id);

    if (index === -1 || id === index){
      console.log("ADD NEW")
      this.setState({
        items: [...this.state.items, selectedProduct]
      },
        () => {
          console.log('ITEMS Updated!');
          console.log(this.state.items)

          this.sumTotalAmount()

          this.setState({
            isAdded: true,
            selectedProduct: {}
          },
            () => {
              this.sumGrandTotalAmount()

              setTimeout(() => {
                this.setState({
                  isAdded: false
                });
              }, 3500);
            }
          );
        }
      );
    }else{
      let currentQty = this.state.items[index].qty
      console.log("CURRENT QTY", currentQty)

      console.log("UPDATE w/ SELECTED ID", qty, id)
      this.onUpdateItem(id, Number(currentQty) + 1)
    }
    
  }

  addSelectedProduct(idx, id, name, qty, price) {
    this.setState(
      {
        selectedProduct: {
          idx: idx,
          id: id,
          name: name,
          qty: qty,
          price: price
        }
      },
      () => {
        this.onAddToCart(this.state.selectedProduct);
      }
    );
  }

  setSelectedQtyID = (idx, id, currentQty) => {
    this.setState({
      selectedQtyID: id,
      inputQtyCartItem: currentQty,
      isCalcNumericCartOpen: true,
      onReset: true,
      activeItem: idx,
      isCashierOverlayShow: true
    });
  }

  onUpdateItem(id, newQty) {
    let index = this.state.items.findIndex( x => x.id === id);
    let currentQty = this.state.items[index].qty;
    let updateQty = currentQty + 1;
    console.log(currentQty)
    if (index === -1){
      console.log("ERROR")
      // handle error
    }else{
      this.setState({
        items: [
           ...this.state.items.slice(0,index),
           Object.assign({}, this.state.items[index], {qty: newQty}),
           ...this.state.items.slice(index+1)
        ]
      },
        () => {
          // this.sumTotalAmountPerItem(index)
          this.sumTotalAmount()
          setTimeout(() => {
            this.sumGrandTotalAmount()
          }, 10);
          this.onCloseCalc()
        } 
      );
    }
  }

  onRemoveFromCart(item) {
    const newArray = [...this.state.items];
    newArray.splice(item, 1);

    this.setState({
      items: newArray
    },
      () => {
        this.sumTotalAmount()
        setTimeout(() => {
          this.sumGrandTotalAmount()
        }, 10);
      }
    );
  }

  sumTotalAmountPerItem(idx) {
    let total = 0;
    let item = this.state.items[idx];
    total = item.price * parseInt(item.qty);
    console.log("TOTAL HARGA PER ITEM", total)
    return total
  }
  sumTotalAmount() {
    let total = 0;
    let items = this.state.items;
    for (var i = 0; i < items.length; i++) {
      total += items[i].price * parseInt(items[i].qty);
    }
    this.setState({
      totalAmount: total
    });
  }
  sumGrandTotalAmount() {
    let sumTotalAmount = this.state.totalAmount
    let otherExpenses = parseInt( this.state.expenseAmount + this.state.discountAmount )
    let grandTotalAmount = parseInt( sumTotalAmount - otherExpenses )
    this.setState({
      grandTotalAmount: grandTotalAmount
    })
  }


  // ===============
  // KEYBOARD ACTION
  // ===============
  onChange = inputQtyCartItem => {
    this.setState({
      inputQtyCartItem: inputQtyCartItem
    });
    console.log("Input changed", inputQtyCartItem);
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);
    if (button === "{enter}") {
      this.onEnter(this.state.selectedQtyID, this.state.inputQtyCartItem);
    }
  };

  onEnter = (id, newQty) => {
    console.log("Button ENTER pressed");
    this.onUpdateItem(id, newQty)
  };

  onOpenCalc = () =>{
    this.setState({
      isCalcNumericCartOpen: true
    })
  }

  onCloseCalc = () =>{
    this.setState({
      isCalcNumericCartOpen: false,
      activeItem: -1,
      isCashierOverlayShow: false
    })
  }
  
  // /END KEYBOARD ACTION


  toggleCashierOverlayShow = () => {
    this.setState({
      isCashierOverlayShow: !this.state.isCashierOverlayShow
    })
  }

}

export default CartsContainer