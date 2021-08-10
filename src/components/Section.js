import React from 'react'
import './Section.css'
import CurrencyFormat from 'react-currency-format'

class Section extends React.Component{
    render(){
        const {data, section} = this.props
        return(
            <div>
            {
                section === 'history' ? (
                    <div className='history'>
                        <div className='info'>
                            <div className='infodetail pink'>
                                <h1>Today Income</h1>
                                <h2>Rp 1.000.000</h2>
                                <p>+2% Yesterday</p>
                            </div>
                            <div className='infodetail blue'>
                                <h1>Orders</h1>
                                <h2>3270</h2>
                                <p>+5% Last Week</p>
                            </div>
                            <div className='infodetail purple'>
                                <h1>This Years Income</h1>
                                <h2>Rp 100.000.000</h2>
                                <p>+10% Last  Year</p>
                            </div>
                        </div>
                        <div className='grafik'>
                            
                        </div>
                        <div className='table'>
                            <div className='tabledetail'>
                                <h1>Recent Order</h1>
                                <p>Today</p>
                                
                            </div>
                            <table className='tableData'>
                                    <tr>
                                        <th>Invoice</th>
                                        <th>Cashier</th>
                                        <th>Date</th>
                                        <th>Order</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>50</td>
                                    </tr>
                                    
                                </table>
                        </div>
                    </div>
                ):(
                    <div className='products'>
                        {
                        data.map((e,i)=>{
                            return(
                            <div key={e.id} className='listProducts' >
                                <div className='productImage'>
                                    <img src={e.picture} alt="" width="100%" height= "auto" onClick={()=>this.props.action(e.id)} />
                                </div>
                                <div className='productBody'>
                                    <h1 className='productTitle'>{e.nameproduct}</h1>
                                    <CurrencyFormat className='productPrice' value={e.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                                </div>
                            </div>
                            )
                        })
                        }
                    </div>
                )
            }
            </div>
        )
    }
}
export default Section