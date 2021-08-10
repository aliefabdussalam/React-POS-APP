import { Component } from "react";
import Nav from '../components/Nav'
import Section from '../components/Section'

class Home extends Component{
    
    render(){

        return(
            <div>
                <Nav title="History" searchcart={false} navbar={'history'} />
                <Section section='history' />
            </div>
        )
    }
} 
export default Home