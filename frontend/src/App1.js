import React, {Component} from 'react';

class App1 extends Component {
  constructor(){
    super()
this.state={
    fullname:"",
    email:"",
    Gender:"",
    contactno:"",
    password:""
}
this.handlechange=this.handlechange.bind(this)
this.submithandler=this.submithandler.bind(this)

}
submithandler(){

    fetch('http://localhost:4000/signup', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify( {"fullname": this.state.fullname,
     "contactno":this.state.contactno,
     "email":this.state.email,
     "password":this.state.password,
     "Gender":this.state.Gender})
    })
   };
handlechange(event){

    
    const{name,value,checked,type}=event.target
   event.target.type=="checkbox" ? this.setState({[event.target.name]: event.target.checked}) : this.setState({
     [event.target.name]: event.target.value

    })}
  render(){
      return(
        <div>
         {/* Required meta tags*/}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Colorlib Templates" />
        <meta name="author" content="Colorlib" />
        <meta name="keywords" content="Colorlib Templates" />
        {/* Title Page*/}
        <title>Au Register Forms by Colorlib</title>
        {/* Icons font CSS*/}
        <link href="/signup/vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all" />
        <link href="/signup/vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
        {/* Font special for pages*/}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
        {/* Vendor CSS*/}
        <link href="/signup/vendor/select2/select2.min.css" rel="stylesheet" media="all" />
        <link href="/signup/vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all" />
        {/* Main CSS*/}
        <link href="/signup/css/main.css" rel="stylesheet" media="all" />
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
          <div className="wrapper wrapper--w790">
            <div className="card card-5">
              <div className="card-heading">
                <h2 className="title">Registraion for Tutor</h2>
              </div>
              <div className="card-body">
                <form method="POST">
                  <div className="form-row m-b-55">
                    <div className="name">Name</div>
                    <div className="value">
                      <div className="row row-space">
                        <div className="col-2">
                          <div className="input-group-desc">
                            <input className="input--style-5" type="text" value={this.state.fullname} name="fullname" placeholder="fullname" onChange={this.handlechange}/>
                        
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Password</div>
                    <div className="value">
                      <div className="input-group">
                        <input className="input--style-5" type="password" value={this.state.password} name="password" placeholder="password" onChange={this.handlechange} />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Email</div>
                    <div className="value">
                      <div className="input-group">
                        <input className="input--style-5" type="email" value={this.state.email} name="email" placeholder="email" onChange={this.handlechange}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-row m-b-55">
                    <div className="name">Phone</div>
                    <div className="value">
                      <div className="row row-refine">
                        
                        <div className="col-9">
                          <div className="input-group-desc">
                            <input className="input--style-5" type="text" value={this.state.contactno} name="contactno" placeholder="contactno" onChange={this.handlechange} />
                            <label className="label--desc">Phone Number</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="form-row p-t-20">
                    <label className="label label--block">Gender</label>
                    <div className="p-t-15">
                      <label className="radio-container m-r-55">Male
                        <input type="radio" defaultChecked="checked" value="M" name="Gender" checked={this.state.Gender=="M"} onChange={this.handlechange} />
                        <span className="checkmark" />
                      </label>
                      <label className="radio-container">Female
                        <input type="radio" name="exist" value="F" name="Gender" checked={this.state.Gender=="F"} onChange={this.handlechange}/>
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn--radius-2 btn--red" type="button" onClick={this.submithandler}>Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Jquery JS*/}
        {/* Vendor JS*/}
        {/* Main JS*/}
        {/* This templates was made by Colorlib (https://colorlib.com) */}
        {/* end document*/}
        
    </div>


      )
  }
}
export default App1;