
import React, {Component} from 'react';

class App2 extends Component {
    constructor(){
    super()
this.state={
    email:"",
    password:""
}
this.handlechange=this.handlechange.bind(this)
this.submithandler=this.submithandler.bind(this)
    }
submithandler(){
console.log("hello")
    fetch('http://localhost:4000/login', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify( {
     "email":this.state.email,
     "password":this.state.password
     })
    }).then(res=>res.text()).then(data=>alert(data))
   };
handlechange(event){

    
    const{name,value,checked,type}=event.target
   event.target.type=="checkbox" ? this.setState({[event.target.name]: event.target.checked}) : this.setState({
     [event.target.name]: event.target.value

    })}
render(){

    return(
     <div>
         <title>Login V1</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*===============================================================================================*/}	
        <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
        {/*===============================================================================================*/}	
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="css/util.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        {/*===============================================================================================*/}
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
              </div>
              <form className="login100-form validate-form">
                <span className="login100-form-title">
                  Member Login
                </span>
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" value={this.state.email} name="email" placeholder="Email" onChange={this.handlechange}/>
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" value={this.state.password} name="password" placeholder="password" onChange={this.handlechange} />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" type="button" onClick={this.submithandler}>
                    Login
                  </button>
                  </div>
              </form>
       
                
            </div>
          </div>
        </div>
        {/*===============================================================================================*/}	
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
{this.state.email}
{this.state.password}

     </div>
     
    )}}
    export default App2;