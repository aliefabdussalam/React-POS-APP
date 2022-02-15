import { Component } from "react";
import Nav from '../components/Nav'
import Section from '../components/Section'
import Aside from '../components/Aside'


class Home extends Component{
    constructor (props){
        super(props)
        this.state = {
            products:[{
                nameproduct: 'espresso',
                id :1,
                price: 10000,
                priceStyle: 'Rp. 10.000',
                qty: 1,
                picture: "./photo/firdaus-roslan-pN769u0KHNA-unsplash.png",
            },
            {
                nameproduct: 'coffee latte',
                id :2,
                price: 15000,
                priceStyle: 'Rp. 15.000',
                qty: 1,
                picture: "./photo/bear.png",
            },
            {
                nameproduct: 'cappucino',
                id :3,
                price: 5000,
                priceStyle: 'Rp. 5.000',
                qty: 1,
                picture: "./photo/firdaus-roslan-pN769u0KHNA-unsplash.png",
            },
            {
                nameproduct: 'red velvet',
                id :4,
                price: 33000,
                priceStyle: 'Rp. 33.000',
                qty: 1,
                picture: "./photo/redvelvet.png",
            },
            {
                nameproduct: 'chocorum',
                id :5,
                price: 28000,
                priceStyle: 'Rp. 28.000',
                qty: 1,
                picture: "./photo/chocorum.png",
            },
            {
                nameproduct: 'black forest',
                id :6,
                price: 30000,
                priceStyle: 'Rp. 30.000',
                qty: 1,
                picture: "./photo/blackforest.png",
            },
            {
                nameproduct: 'chicken katsu',
                id :7,
                price: 60000,
                priceStyle: 'Rp. 60.000',
                qty: 1,
                picture: "./photo/chickenkatsu.png",
            },
            {
                nameproduct: 'salmon truffle',
                id :8,
                price: 60000,
                priceStyle: 'Rp. 60.000',
                qty: 1,
                picture: "./photo/salmon.png",
                
            },
            {
                nameproduct: 'Wiener Schnitzel',
                id :9,
                price: 69000,
                priceStyle: 'Rp. 69.000',
                qty: 1,
                picture: "./photo/wiener.png",
            },],
            cart : []
        }
    }
    render(){
        const {products, cart} = this.state
        // update data cart
        const updatecart = ()=>{
            this.setState({
                cart : cart
            })
        }
        // update data product
        const updateproduct = () =>{
            this.setState({
                products : products
            })
        }

        // check data array cart
        const checkdata  = (data) =>{
            // eslint-disable-next-line array-callback-return
            const find = cart.find((e) => {
                if (e.id === data){
                    return e
                }
            })
            return find
        }

        // menambahkan quantity product dengan button plus
        const addqty = (data) =>{
            const find = cart.findIndex((e=> e.id === data))
            cart[find].qty +=1
        }
        const btnAdd = (data) =>{
            addqty(data)
            updatecart()
        }

        // mengurangi quantity product dengan button plus
        const btnRemove = (data) =>{
            const remove = cart.findIndex((e=> e.id === data))
            cart[remove].qty <= 1 ? (
                cart.splice([remove],1)
            ): (cart[remove].qty -=1 )
            updatecart()
        }

        // menghapus data di array cart berdasarkan id
        const remove = (data) =>{
            const filter =  cart.filter(x => x.id !== data)
            this.setState({
                cart : filter
            })
        }
        // menghapus semua data di array cart
        const removeAll = () =>{
            this.setState({cart: []});
        }
        // menambahkan data baru ke array product
        const onAddProduct = (result) =>{
            products.push(result)
            updateproduct()
        }
         // menambahkan data baru ke array cart
        const onAdd = (data) =>{
            // eslint-disable-next-line array-callback-return
            const find = products.find((e) => {
                if(e.id === data){
                    return e
                }
            })
            const check = checkdata(data)
            // console.log (check)
            if (check === undefined){
                const qty = {
                    ...find, qty : 1
                }
                cart.push(qty)
            }else {
                addqty(data)
            }
            updatecart()
        }
        const length = cart.length
        return(
            <div>
                <div>
                    <Nav title="Food Items" navbar={'product'}  cartdata = {length} action={onAddProduct} />
                    <Section section='home' data = {products} action={onAdd} />
                </div>
                <div>
                    <Nav title="Cart" navbar={'cart'} />
                    <Aside data = {cart} qtyAdd={btnAdd} qtyRemove={btnRemove} onRemove={remove} removeAll= {removeAll}  />
                </div>
                
            </div>
        )
    }
} 
export default Home