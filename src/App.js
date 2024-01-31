import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems:[],
      items: [
        {
          id: 1, title: 'Мышь',
          img: './mouse.jpg',
          desc: 'Беспроводная мышь 300 dpi',
          category: 'mouse',
          price: '9.99'
        },
        {
          id: 2, title: 'Клавиатура',
          img: './clava.jpg',
          desc: 'Беспроводная клавиатура высокой точности',
          category: 'clava',
          price: '15.99'
        },
        {
          id: 3, title: 'Принтер',
          img: './printer.jpg',
          desc: 'Лазерный принтер',
          category: 'printer',
          price: '105.99'
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }
  chooseCategory(category){
    if(category ==='all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item) {this.setState({orders: [...this.state.orders, item]})}
}
export default App;
