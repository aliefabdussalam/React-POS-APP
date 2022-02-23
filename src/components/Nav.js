import React from 'react'
import "./Nav.css"
import { FaBars, FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class Nav extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            id: 11,
            nameproduct : '',
            picture : '',
            price : '',
            category: 'Coffee',
            openModal : false,
            clicked :  false
        }  
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }
    onCloseModal = ()=>{
        this.setState({openModal : false})
    }
    setID = ()=>{
        this.setState({
            id : Math.floor(Math.random() * 100) + 11
        })
    }
    setName = (e)=>{
        this.setState ({
            nameproduct : e.target.value
        })
    } 
    setPrice = (e) =>{
        this.setState ({
            price : e.target.value
        })
    }
    setImage = (e) =>{
        this.setState ({
            picture : e.target.value
        })
    }
    setCat = (e) =>{
        this.setState ({
            category : e.target.value
        })
    }
    render(){
        const {id,nameproduct,picture,price,category} = this.state
        const handleSubmit = (e)=>{
            this.setID()
            e.preventDefault();
            const data = {id,nameproduct,picture,price,category} 
            this.props.action(data)
            alert("produk berhasil ditambahkan")
        }
        return(
                <div>
                    <div className={this.props.navbar==='history'?'navbarlg':this.props.navbar ==='product'?'navbarmd':'navbarcart'}>
                        {
                            this.props.navbar === 'history' || this.props.navbar === 'product'?(
                                <nav>
                                    <div className = "menu-toogle" >
                                        <FaBars onClick={this.handleClick} />
                                    </div>
                                    <div className='title'>{this.props.title}</div>
                                    {
                                        this.props.navbar==='product'?(
                                                <div className = 'search-box'>
                                                    <Link to="#" href="">
                                                        <FaSearch />
                                                    </Link>
                                                </div>
                                        ):null
                                    }
                                </nav>
                                
                            ):(
                                <div className = "cart" >{this.props.title}<span>{this.props.data}</span></div>
                            )
                        }
                    </div>
                    {/* Sidebar */}
                    <div className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <div className = 'nav-menu-items ' onClick={this.handleClick}>
                                <div className='menu-bars'>
                                    <FaBars className = 'nav-toogle' />
                                </div>
                                <ul className='listMenuBars'>
                                    <li>
                                        <Link to='/' className='nav-text'> 
                                            <img src="https://drive.google.com/uc?id=1T9wh25M_jo6DD9dgjs_FMhpBm-QjA5ve" alt="" className='icon' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/History' className='nav-text'> 
                                            <img src="https://drive.google.com/uc?id=11TH00YSzZwOIiC7kyUioAjrGWnZhSxGj" alt="" className='icon' />
                                        </Link>
                                    </li>
                            <li className='nav-text'>
                                        
                                        <img onClick={this.onClickButton} src='https://drive.google.com/uc?id=1Z1ROjAYY_j41LaUWT99QDbGCa15m_It7' alt="" className='icon' />
                                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                                            <h2 className='h2'>Add Item</h2>
                                            <form className='modalForm' onSubmit={handleSubmit}>
                                                <label for="" className='modalLabel'>Name </label>
                                                <input type="text" className='modalInput' onChange={this.setName} name="" /><br />
                                                <label for="" className='modalLabel'>Image </label>
                                                <input type="text" className='modalInput'  onChange={this.setImage} name=""/><br />
                                                <label for="" className='modalLabelPrice'>Price</label>
                                                <input type="text" className='modalInput'  onChange={this.setPrice} name=""/><br />
                                                <label for="" className='modalLabelPrice'>Category</label>
                                                <select onChange={this.setCat} className='modalInput'>
                                                    <option value="Coffee">Coffee</option>
                                                    <option value="Main Course">Main Course</option>
                                                </select>
                                                
                                                <div className='btn'>
                                                    <button className='close'onClick={this.onCloseModal} type="">Close</button>
                                                    <button className='submit' type="" onClick={this.onCloseModal}>Submit</button>
                                                </div>
                                                
                                            </form>
                                        </Modal> 
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
        )
    }

}
export default Nav 