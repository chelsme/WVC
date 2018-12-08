import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div>
				<h2>Contact Us</h2>
				<form name="contact" method="POST" netlify>
					<input type="text" name="name" placeholder="Name" required />
					<input type="email" name="email" placeholder="Email" required />
					<input type="tel" name="phone" placeholder="Phone Number" required />
					<textarea rows="5" cols="50" name="message" placeholder="Message..."
						required></textarea>
					<button type="submit">Send Message</button>
				</form>
			</div>
		)
	}
}