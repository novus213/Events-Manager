import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NavBarMain from './NavBarMain.jsx';
import Footer from './footer.jsx';
import { editEvent } from '../actions/editEventAction';
import  getCenters  from '../actions/getCentersAction';
import { detailEvent  } from '../actions/eventAction';

/* eslint-disable */
/**
 * 
 * @class Addevents
 * @extends { React.Component }
 */
class EditEvent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      eventData: {

      }
    }
  }



  componentWillMount() {
    const { dispatch } = this.props;
    return dispatch(detailEvent(this.props.match.params.id));
  }

  componentDidUpdate() {
    if (Object.keys(this.state.eventData).length == 0) {
      this.setState({
        eventData:{
          ...this.props.event.data,
        }
      })
    const { dispatch } = this.props;
    return dispatch(getCenters());
    }
  } 
  
  
  onChange = (e) => {
    this.setState({
      eventData: {
        ...this.state.eventData,
        [e.target.name]: e.target.value
      }
    })
  }

  onSubmit = (e) => {
		e.preventDefault();
		let {eventData} = this.state;
		const { dispatch } = this.props;
		return dispatch(editEvent(eventData, this.props.match.params.id));
  }
  /* eslint-disable */
  

  /**
   * 
   * 
   * @returns {any} - 
   * @memberof Addevents
   */
  render() {
    
    const { centers, event } = this.props;
    console.log('this is the event details from the edit component', event)
  return (
    <div>
    <NavBarMain />
    <div className="container">
    <div className="row">
      <div className="container" id="add-event-header">
        <div className="row">
          <div className="col-sm-12">              
            <h1 className="text-center head-1">Edit your events </h1>
            <p className="head-para text-center">
              Are you in need of a location to host your event? 
              If yes, then why not host your events using one of 
              our numerous event centers by creating an event below?
            </p>
          </div>
        </div>
      </div>
    
      
      <div className="container">{/* <!-- Start container for Add Form --> */}
        <div className="row">
          <div className="col-sm-12">
            <form method="POST" className="form-horizontal" onSubmit={this.onSubmit} role="form"  action="#">{/* <!-- ADD FORM --> */}
              <div className="form-group">
                <label htmlFor="add-event" className=" home-para">Name of Event:</label>
                <input className="form-control" onChange={this.onChange}  name="title" id="form-event1" type="text" value={this.state.eventData.title} />
              </div>
              <div className="form-group">
                <label htmlFor="add-event" className=" home-para">Date of event:</label>
                <input className="form-control" onChange={this.onChange}  name="date" type="text" id="form-event2"placeholder="YY/MM/DD" value={this.state.eventData.date} />
              </div>              
              <div className="form-group">
                <label htmlFor="add-event" className=" home-para">Time:</label>
                <input className="form-control" onChange={this.onChange}  name="time" type="text" id="form-event7"placeholder="hh:mm AM/PM" value={this.state.eventData.time} />
              </div>
              <div className="form-group">
                <label htmlFor="event-centers" className=" home-para">Center:</label>
                <select className="form-control" id="event-center1" onChange={this.onChange}  name="center" >
                  <option className="home-para" value={this.state.eventData.center}>Choose an event center</option>
                  {(centers.map((center) => {
                    
                    return (<option key={center.id} value={center.id} className="home-para">{center.name}</option>)
                  }))}
                  
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="event-details"  className=" home-para">Events description:</label>
                <textarea className="form-control" onChange={this.onChange} id="form-event4" rows="8" name="description" placeholder="brief details about the event" value={this.state.eventData.description}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="event-centers" className=" home-para">Event type:</label>                
                <input className="form-control" onChange={this.onChange}  name="type" type="text" id="event-center2" placeholder="What kind of event is it, 'public' or 'private'?" value={this.state.eventData.type} />          
              </div>
              <div className="form-group">
                <label htmlFor="add-event" className=" home-para">Upload an Image of your event below:</label>
                <input type="file" className="form-control-file" onChange={this.onChange}  aria-describedby="fileHelp" /> 
              </div>  
          
              <button type="submit" className="btn btn-primary btn-sm" id="save-event">Save and create event  <span><i className="fa fa-paper-plane" aria-hidden="true"></i></span></button>
            </form>          
          </div>{/* <!-- End Container ADD EVENTS FORM --> */}
        </div>
      </div>
  </div>{/* <!-- End container for the Head section --> */}
  </div>
  <Footer />
  </div>
  );
}
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => dispatch(action)
  }
};
const mapStateToProps = (state) => {
  return {
    addevents: state.eventReducer,
    status: state.userReducer,
    centers: state.centerReducer,
    event: state.detailsEventReducer
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);