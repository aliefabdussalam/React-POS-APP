import { Component } from "react";
import Nav from '../components/Nav'
import Section from '../components/Section'
import Aside from '../components/Aside'


class Home extends Component{
    constructor (props){
        super(props)
        this.state = {
            products:[{
                picture : 'https://d.newsweek.com/en/full/1001693/coffee-espresso-stock.jpg',
                id : 1,
                nameproduct : "Espresso",
                price : 10000
                },
                {
                id : 2,
                picture : 'https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_315919556-scaled.jpeg',
                nameproduct : "Coffee Latte",
                price   : 15000
                },{
                id : 3,
                picture : 'https://www.thespruceeats.com/thmb/SyX_yUyCFOtuqWC2QFrM25JTmsA=/4413x2942/filters:fill(auto,1)/how-to-make-cappuccinos-766116-hero-01-a754d567739b4ee0b209305138ecb996.jpg',
                nameproduct : "Cappucino",
                price   : 5000
                },{
                id : 4,
                picture : "https://blog.fnp.ae/wp-content/uploads/2018/06/RedVelvetCake-Recipe.jpg",
                nameproduct : "Red Velvet Latte ",
                price   : 33000
                },{
                id : 5,
                picture : 'https://www.chocomonamour.fr/sites/default/files/styles/uc_product_full/public/choco_rhum_ouvert.jpg?itok=Q2sXRiab',
                nameproduct : "Choco Rhum",
                price   : 28000
                },{
                id : 6,
                picture : 'https://www.hothungama.com/wp-content/uploads/2017/11/Black-Forest-Cake.jpeg',
                nameproduct : "Black Forest",
                price   : 30000
                },{
                id : 7,
                picture : 'https://images.media-allrecipes.com/userphotos/5816671.jpg',
                nameproduct : "Chicken Katsu Dabu Dabu",
                price   : 60000
                },{
                id : 8,
                picture : 'https://s3-eu-west-1.amazonaws.com/straus/media/products2/2f79d5db1af54e1c80042589663673ac.jpg',
                nameproduct : "Salmon Truffle Teriyaki",
                price   : 60000
                },{
                id : 9,
                picture : 'http://4.bp.blogspot.com/-Mu1Qn23rj98/T5hdervfIMI/AAAAAAAAAlM/2ixB45ekbcw/s1600/DSC_2219.jpg',
                nameproduct : "Wiener Schnitzel",
                price   : 69000
                }],
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
            const newcart = checkdata(data)
            cart.splice([newcart],1)
            updatecart()
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