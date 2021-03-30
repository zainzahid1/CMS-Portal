import React,{Component} from 'react';
import companyImage from '../../assets/images/logo1.png'
import classes from './MainPage.module.css';

class Mainpage extends Component {

 
    render(){
    return (
        <div className="container">
          <div ><img className={classes.companyImage} src={companyImage} alt="company imagee"></img></div>
          <div style={{textAlign: "center",
                 marginTop: 80, 
                 border: "3px solid black",
                 padding: "20px", fontFamily: "'Comfortaa', cursive",
                  fontWeight: "bold"}}>
                <h1 >Welcome to EZILINE!
                 <br/>
                 </h1>
                 <h3 style={{color: "red"}}>Please Login to continue...</h3>
               </div>
          
        </div>
    );
    }
};

export default Mainpage;



