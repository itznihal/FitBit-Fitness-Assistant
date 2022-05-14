import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import img1 from "../images/dd.jpg";
import img2 from "../images/bitmoji22.png";
import princy from "../images/princy.png"

import "./exerciselist.css";

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  

  render() {
    return (

      <>



{/* Hero Section */}




{/* Hero Section  */}


<section id="hero">
    <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1 className="mb-4 pb-0"><span>FITBIT</span> The Best<br/> Fitness Hub</h1>
      <p className="mb-4 pb-0">Meet simple Schedule Tracker , Give Simple Schedule a try today!</p>
      <a href="https://www.youtube.com/watch?v=XtyLfJa3clI" className="glightbox play-btn mb-4"></a>
      <a href="#about" className="about-btn scrollto">Get Strated</a>
    </div>
  </section>




{/* EVENET SCHEDULE */}
<section id="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            <h2>About FitBit</h2>
            <p>Our platform provides User to create his/her account to set an track schedule according to fitness goals also recommended schedus are provided by us. User can set up his/her schedule according to their requirements set exercise into schedule according to their requirements and exercise plans are recommended by our platform according to physique point of view.</p>
          </div>
          <div className="col-lg-6">
          <h2>More..</h2>
            <p>All sechedules which users set ups are displays in our Exercises Section user can easily use it which trainning. And also if user want to change their schedule and delete their old schedule all facilities provided by our platform.</p>
          </div>
          
        </div>
      </div>
    </section>





{/* BOOTSSTRAP EXERCISE LIST */}
<div className="container-fluid nav_bg exxerciselistcls">
        <div className='row'>
          <div className='col-10 mx-auto'>


{/* BOOTSTRAP */}
<section id="schedule" className="section-with-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Logged Exercise</h2>
          <p>Exercise Schedules of Users</p>
        </div>

        <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
          <li className="nav-item">
            <a className="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">Exercises</a>
          </li>
         
        </ul>

        <h3 className="sub-heading">Exercises According to users</h3>

        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
<div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

            {/* <div className="row schedule-item">
              <div className="col-md-2"><time>09:30 AM</time></div>
              <div className="col-md-10">
                <h4>Registration</h4>
                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
              </div>
            </div> */}

            <div className="row schedule-item">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='tblrowcls' >
            { this.exerciseList() }
          </tbody>
        </table>
      </div>

          

          </div>
          

        

   

        </div>

      </div>

    </section>


{/* TRAINERRS SECTION */}


<section id="speakers">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Trainers</h2>
          <p>Here are some of our Trainers</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 card card-1">
            <div className="speaker" data-aos="fade-up" data-aos-delay="100">
              <img src={img2} alt="Speaker 1" className="img-fluidcls"/>
              <div className="details">
                <h3><a href="speaker-details.html">Nihal Parmar</a></h3>
                <p>itznihal143@gmail.com</p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 card card-1">
            <div className="speaker" data-aos="fade-up" data-aos-delay="100">
              <img src={princy} alt="Speaker 1" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">Princy Parmar</a></h3>
                <p>princyparmar11@gmail.com</p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay="100">
              <img src={img2} alt="Speaker 1" className="img-fluid"/>
              <div className="details">
                <h3><a href="speaker-details.html">Brenden Legros</a></h3>
                <p>Quas alias incidunt</p>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div> */}
        
        </div>
      </div>

    </section>

    


          </div> </div> </div>




      </>
    )
  }
}