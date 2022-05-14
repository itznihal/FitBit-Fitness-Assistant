import React, { Component } from 'react';
import axios from 'axios';
import "./createuser.css";
import img1 from "../images/dd.jpg";
import img11 from "../images/img11.png";
import img12 from "../images/img12.png";
import img13 from "../images/img13.png";
import about1 from "../images/about1.jpg";
import values3 from "../images/values-3.png";




export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <>





<div className="container-fluid createusercls">
        <div className='row'>
          <div className='col-10 mx-auto card card-5'>


          <section id="schedule" class="section-with-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Register Users</h2>
          <p>Register User Accounts Here</p>
        </div></div></section>



      <div className='innercls'>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>


      </div></div></div>




      {/* Extera */}
      <div className="container-fluid nav_bg abtcls">
        <div className='row'>
          <div className='col-10 mx-auto'>


            <section id="values" className="values">

              <div className="container" data-aos="fade-up">

                {/* <header className="section-header">
                  <h2>About Us</h2>
                  <p>Nonprofit Auction Software</p>
                </header> */}


                  <div className="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Services  provided in our platform </p>
        </div>



                <div className="row abtclssection">

                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="box">
                      <img src={about1} className="img-fluid" alt="" />
                      <h3>Create Account</h3>
                      <p>Our platform provides User to create his/her account to set an track schedule according to fitness goals also recommended schedus are provided by us </p>
                    </div>
                  </div>

                  <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                    <div className="box">
                      <img src={img12} className="img-fluid" alt="" />
                      <h3>Set Up your Schedule</h3>
                      <p>User can set up his/her schedule according to their requirements set exercise into schedule according to their requirements and exercise plans are recommended by our platform according to physique point of view.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                    <div className="box">
                      <img src={values3} className="img-fluid" alt="" />
                      <h3>Track Schedules</h3>
                      <p>All sechedules which users set ups are displays in our Exercises Section user can easily use it which trainning. And also if user want to change their schedule and delete their old schedule all facilities provided by our platform. </p>
                    </div>
                  </div>

                </div>



              </div>

            </section>


{/* WHY-US */}





    {/* END WHY US */}






            {/*  About Writtern */}
            <section id="about" className="about">
              <div className="container sectionfivecls" data-aos="fade-up">

                <div className="section-title">
                  <h2>Our Values</h2>
                  <p>What is Fitbit?</p>
                </div>

                <div className="row content ourvaluescls">
                  <div className="col-lg-6">
                    <p>
                    FitBit is designed to replace your paper workout journal. Developed nearly three years ago by a team who was disappointed by the selection of workout tracking apps, it combines the best features found in other apps with a minimalistic approach and a clean, easy-to-use interface. Give it a try. We know you'll love it!

                    </p>
                    <p>
                    We've been able to put together a great combination of simplicity, usability, and features. Because of this, FitBit has become one of the most popular workout tracking apps on the Play Store.
                    </p>

                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                    Being simple doesn't mean you have to compromise! FitBit has many features others don't have such as a summary page with stats from your previous workout, powerful graphing of both strength and cardio exercises, the ability to log supersets, cloud backup, export to Excel, and much more.
                    </p>
                  </div>
                </div>

              </div>
            </section>
            {/*  End About Section */}






          </div>
        </div>
      </div>
{/* End */}
   

    
      </>
       )
  }
}