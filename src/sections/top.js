import React, { Component } from 'react';

export default class Top extends Component {
	render() {
		return (
			<div>
				<div>
					<h2>Quality Eyewear at Affordable Prices</h2>
					<p>At Waltham Vision Care we provide comprehensive eye exams, contact lens evaluations and treatment of
						most eye conditions. Dr. Lerner has many years of experience fitting specialty contact lenses for
						people who require prescriptions for astigamatism or bifocals. We also provide quality eyeglasses
						and
						contact lenses at competitive prices.
                </p>
					<p>We accept VSP, EyeMed, Tufts, BlueCross, Medicare, Medicaid, MassHealth, Neighborhood Health Plan,
						Harvard Pilgrim, and many other insurance plans. When calling to make an appointment please inquire
						about your particular plan.
                </p>
				</div>
				<img alt='Dr. Lerner' src="images/drlerner.jpg" />
			</div>
		)
	}
}