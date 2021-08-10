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
                                            <img src="https://s3-alpha-sig.figma.com/img/5f5e/9018/1589b40652d8d6e71a35f5887e117a54?Expires=1629676800&Signature=bCw5NUTC02W7WUxCcyKdGlWNOaIvhshtw2arD67AstNbrCl8goU5JSBQSaaBSNujP6jctdprsl5Jy7mzwe9J84wAHckqgsNNAF7OrySUewSY0u-im5OhGRFMCo8kMrYIlj5ebAlsUOA7gwG0QWb9kbPqZzm8~JghwOeK1N7Ungy3JogZnswfMX5CpwIty0wen0VYdlcU7KxW1eFWQ-cDqbovvYrK9-nu40w-tNaCDTXfkEnYpn7d6HmjXaZ0R7o~SGf~6MTqc5rHgrQrXA7RudCfQWqoZxyBmjyHGOe8UKdFCV-1iYeZ44ISmmMRpF3c5N7TKbxpsDvD0h9qsqVqQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className='icon' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/History' className='nav-text'> 
                                            <img src="https://s3-alpha-sig.figma.com/img/88b1/277b/5d8ce59748995fbae245b9cf2b04225b?Expires=1629676800&Signature=XsCrjwblZv9uWJQLNT~euzQdLUNX0jXTN9E5GbJHylXjOcbS3wpt-9XRe9DzXO2iAhe03dSlTcZNeqXeJxSeJQn00RkuhU1bH4CEvE3x5ooMCy-9LDYfOszXHfDhYddwVipTRDRt~GX0pUSR0YCxVwm2TWB9RWZXHv7O82ZhlFPTBBz4~MEmJQ-di3edizFy5OBWYDHOS5vfFMo0pqCafvwssFdpS2Lseo71d1Q1sn6faCVdrTZB~YJ5DarM4q~vF-vD7ZrwDcQRMMYFfqRv8YaBSwon~vo2DqnGg-~7McJC6G~NqPQ8dOrXtip-sjr8SPUYiPn5XHvo~rDtB6oGJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className='icon' />
                                        </Link>
                                    </li>
                                    <li className='nav-text'>
                                        <img onClick={this.onClickButton} src='https://s3-alpha-sig.figma.com/img/66c6/d56b/44808a713483635f2bead6c291ac6a4f?Expires=1629072000&Signature=WSBvcuGLmRCjvMNJDJkarS~fFucvvWs4IUY6~E6hKpBnOY2nm7WxZ1dy5A~1OO~hOhapEVLhdnIeptZTFMaBGsiwRyMoDDM8lz7Fbxxh48G5EsxqAVxNPD18sDPclwd4OG9F0Wwe4WK1bENgFAcZ7Xuc9HWWregTZMj1GSUdyB~I0RyGHn94bQ6YpL6lOKQAbPoXf~wQCVGIFS~ZTCcF7Eo57QhVG0blaRKRIt21Mn2vyXkZWSOfXi0RKJ4PAhn05HhI1GQCNfMBtvEkA8kdJyHNXtRkpHlqPnFlWgHFrR6WV6lgd3Z4gOvveyNiHQ8-VM4WUp-EjNBxTsVDjp6RYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt="" className='icon' />
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
                                                    <button className='submit' type="">Submit</button>
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