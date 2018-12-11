import React, { Component } from 'react';

export default class Location extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Location</h2>
          <p>Waltham Vision Care is conveniently located on the corner of Walnut Street and Moody Street. Ample public parking with easy access is available from Walnut Street as well as one hour free parking along Moody Street.
                </p>
        </div>
        <div id='hoursandmap'>
          <div id='hours'>
            <h3>Hours:</h3>
            <p>Monday - 9:00am-5:00pm</p>
            <p>Tuesday - 9:00am-6:00pm</p>
            <p>Wednesday - 9:00am-5:00pm</p>
            <p>Thursday - 9:00am-6:00pm</p>
            <p>Friday - 9:00am-5:00pm</p>
            <p>Saturday - 9:00am-1:00pm</p>
            <p>Sunday - closed</p>

            <h3>We are Closed on most federal holidays.</h3>
            <p>Waltham Vision Care</p>
            <p>381 Moody Street</p>
            <p>Waltham, MA 02453</p>
            <a id="phone" href="tel:+1-781-894-1094">(781) 894-1094</a>
          </div>
          <div>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1473.8627520271868!2d-71.23851220816377!3d42.369688879084045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382d8e0ac4a51%3A0x83fd8526046c1cc7!2sWaltham+Vision+Care!5e0!3m2!1sen!2sus!4v1519776852212" />
          </div>
        </div>
      </div>
    )
  }
}