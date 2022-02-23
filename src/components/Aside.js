import React from 'react'
import './Aside.css'
import CurrencyFormat from 'react-currency-format'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FaTrash } from "react-icons/fa";


class Aside extends React.Component{
    state={
        openModal : false
    }
    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render(){
        const {data, removeAll} = this.props
        const cartData = data.length
        const itemsPrice = data.reduce((total, product) => total + product.qty * product.price, 0);
        const ppn = itemsPrice * 10 / 100
        const inv = Math.floor(Math.random() * 1000000) + 11
        const Total = ppn + itemsPrice
        // console.log(data)
        return(
            <div className="aside">
                {
                    cartData <= 0 ?(
                        <div className='cartEmpty'>
                            {/* https://drive.google.com/uc?id=1F-ikAFiYZgzKUjKqWFen6HRLz-fcExjW */}
                            <img src="https://drive.google.com/uc?id=1F-ikAFiYZgzKUjKqWFen6HRLz-fcExjW " alt="" />
                            <h1>Your cart is empty</h1>
                            <p>Please add some items from the menu</p>
                        </div>
                    ): (
                        <div className='body-listCart'>
                            {
                                data.map((e)=>{
                                    return(
                                        <div key={e.id} className='listCart'>
                                            <div className='cartHeader'>
                                                <div className='cartImage'>
                                                    <img src={e.picture} height='100%' width='auto' alt="" /> 
                                                </div>
                                            </div>
                                            <div className='cartBody'>
                                                <div className='cartTitle'>
                                                    <h1 className='title'>{e.nameproduct}</h1>
                                                    <div className='cancel'>
                                                        <FaTrash onClick={()=>this.props.onRemove(e.id)} className="txtColor" />
                                                    </div>
                                                    
                                                </div>
                                                <div className='cartPriceQty'>
                                                    <div className='cartQty'>
                                                        <button type="" onClick= {()=>this.props.qtyAdd(e.id)}>+</button>
                                                        <div className="qtyNumber">{e.qty}</div>
                                                        <button type='' onClick= {()=>this.props.qtyRemove(e.id)}>-</button>
                                                    </div>
                                                    <div className='cartPrice'>
                                                        <CurrencyFormat className='totalPrice' value={e.price * e.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='CheckOut' >
                                <div className='total'>
                                    <div className='totalAll'>
                                        <h1>Total</h1>
                                        <CurrencyFormat className='price' value={itemsPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /><span>*</span>
                                    </div>
                                    <p>*Belum termasuk PPN</p> 
                                </div>
                                
                                <div className='button'>
                                    <button onClick={this.onClickButton} className='checkOut'  type="">CheckOut</button>
                                    <Modal  open={this.state.openModal} onClose={this.onCloseModal}>
                                        <br />
                                        <div className='invoiceTitle'>
                                            <h1 className='check'>CheckOut <span> Receipt no : #{inv} </span></h1>
                                            <h2 className='cashier'>Cashier : Michael Jordan</h2>
                                        </div>
                                        {
                                            data.map((e)=>{
                                                return(
                                                    <div key={e.id} className='invoice'>
                                                        <div className='product'>
                                                            <p>{e.nameproduct} <span>{e.qty}x</span></p>
                                                        </div>
                                                        <div className='Price'>
                                                            <CurrencyFormat className='priceproduct' value={e.price * e.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className='totalPpn'>
                                            <div className='ppnPayment'>
                                                <p className='ppn'>Ppn 10%</p>
                                                <p className='pay'>Payment : Cash</p>
                                            </div>
                                            <div className='totalPayment'>
                                                <CurrencyFormat className='' value={ppn} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                                                <p>Total : <CurrencyFormat className='' value={Total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></p>
                                            </div>
                                        </div>
                                        <div className='buttonPayment'>
                                            <button type="" className='print'>Print</button>
                                            <p>Or</p>
                                            <button type="" className='email'>Send Email</button>
                                        </div>
                                    </Modal> 
                                    <button className='Cancel' type="" onClick= {removeAll}>RemoveAll</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>
        )
    }
}
export default Aside