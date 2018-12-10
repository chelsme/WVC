import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div>
				<h2>Contact Us</h2>
				{/* <form name="contact" method="POST" netlify>
					<input type="text" name="name" placeholder="Name" required />
					<input type="email" name="email" placeholder="Email" required />
					<input type="tel" name="phone" placeholder="Phone Number" required />
					<textarea rows="5" cols="50" name="message" placeholder="Message..."
						required></textarea>
					<button type="submit">Send Message</button>
				</form> */}


				<form name="contact" method="post">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<label>Your Name: <input type="text" name="name" /></label>
					</p>
					<p>
						<label>Your Email: <input type="email" name="email" /></label>
					</p>
					<p>
						<label>Message: <textarea name="message"></textarea></label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>

			</div>
		)
	}
}