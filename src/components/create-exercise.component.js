import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./createexercise.css";
import img1 from "../images/dd.jpg";



export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (

      <>
        <div className="container createexercisecls" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-6 card card-5">
    <div className='createexercisesubcls'>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>


    </div>
    </div></div>
{/* Recent Exercises */}
<section id="schedule" class="section-with-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Recommended Exercises</h2>
          <p>Here is our recommended Exercises</p>
        </div>

        <ul class="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
          <li class="nav-item">
            <a class="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">Schedules</a>
          </li>
         
        </ul>

        <h3 class="sub-heading">Schedule your workouts like you schedule your meetings</h3>

        <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

       
          <div role="tabpanel" class="col-lg-9 tab-pane fade show active" id="day-1">

            

            <div class="row schedule-item">
              <div class="col-md-2"><time>Weight Gain</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src={img1} alt="Exercise Image"/>
                </div>
                <h4>Push-pull</h4>
                <p>centered on muscle groups that perform similar actions</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>Weight Loss</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src={img1} alt="Exercise Image"/>
                </div>
                <h4>Cardio + Muscular</h4>
                <p>Burns fat along with muscular shape</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>Maintain</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src={img1} alt="Exercise Image"/>
                </div>
                <h4>Weight Tranning</h4>
                <p>Keep healthy maintain body shape </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>Fit Body</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src={img1} alt="Exercise Image"/>
                </div>
                <h4>Double Muscle</h4>
                <p>Keep Body in Shape</p>
              </div>
            </div>

         

           

          </div>
         

        

   

        </div>

      </div>

    </section>









  
    
    </>
    )
  }
}