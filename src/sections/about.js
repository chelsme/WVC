import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<div>
					<h2>About Us</h2>
					<p>Whether your eyewear prescription needs are for eyeglasses, sunglasses, contact lenses, or no lenses
						at
						all (frames only), Waltham Vision Care is at your service. The practice was started in 1952 by Dr.
						Leon
						Ginsburg. In 1992 Dr. Lee Lerner took over the practice when Dr. Ginsburg retired. In 1995 we moved
						to
						our current location at 381 Moody Street in Waltham. We are continually updating and have some of
						the
						most modern computerized equipment avaliable.
                </p>
					<p>We have a pricing structure that is very easy to understand, fair, and with no bait-and-switch
						gimmicks.
						We believe people expect and want us to share our knowledge with them; they also expect to receive
						quality for their money. Waltham Vision Care is unmatched for providing the highest quality
						products
						with honest, straight forward service. We have managed to blend the sharing of our knowledge with
						our
						ability to bring you eyewear with a "no-gimmick" pricing structure.
                </p>
				</div>
				<div id='staffPics'>
					<img alt='Dottie' src="images/dottie.jpg" />
					<img alt='Amanda' src="images/amanda.jpg" />
					<img alt='Elly' src="images/elly.jpg" />
				</div>
			</div>
		)
	}
}