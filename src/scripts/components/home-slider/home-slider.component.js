import React, { useState, useEffect } from 'react';
import './home-slider.component.scss';
import '../../../styles/swiper.css';
import Swiper from 'react-id-swiper';
import HomeSliderImage1 from '../../../assets/images/hotel.jpg';
import HomeSliderImage2 from '../../../assets/images/kitchen.jpg';

const HomeSliderComponent = () => {
	var home_slider_index = 0;
	var reach_end_timeout = undefined;
	const [captionTransition, captionTransitionState] = useState(null);

	const params = {
		containerClass: 'swiper-container home-slider-component',
		speed: 500,
		lazy: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		a11y: false,
		on: {
			slideNextTransitionEnd: function () {
				const slides_length = this.slidesGrid.length;
				home_slider_index++;

				if (home_slider_index >= slides_length)
					home_slider_index = 0;

				captionTransitionState(home_slider_index);
			},

			slidePrevTransitionEnd: function () {
				if (reach_end_timeout > 0) {
					clearTimeout(reach_end_timeout);
				}

				home_slider_index--;

				if (home_slider_index === -1)
					home_slider_index = 0;

				captionTransitionState(home_slider_index);
			},
			
			reachEnd: function () {
				const _this = this;

				reach_end_timeout = setTimeout(function () {
					_this.slideTo(0)
				}, 5000);
			}
		}
	}

	useEffect(() => {
		captionTransitionState(home_slider_index);
	}, [home_slider_index]);

	return (
		<Swiper {...params}>
			<div
				style={{ 
					'backgroundImage': `url(${HomeSliderImage1})`,
					'backgroundRepeat': 'no-repeat',
					'backgroundSize': 'cover'
				}}>
				<div className="d-flex flex-column w-50 text-center slide-caption">
					<div className={`${captionTransition === 0 ? "animate-caption-container caption-container caption-container-1" : "caption-container caption-container-1"}`}>
						<p>Elegant design styling for any event that you desire.</p>
						<h2 className="font-weight-light">Event Style Lighting</h2>
					</div>
				</div>
			</div>
			<div
				style={{ 
					'backgroundImage': `url(${HomeSliderImage2})`,
					'backgroundRepeat': 'no-repeat',
					'backgroundSize': 'cover'
				}}>
				<div className="d-flex flex-column w-50 text-center slide-caption">
					<div className={`${captionTransition === 1 ? "animate-caption-container caption-container caption-container-2" : "caption-container caption-container-2"}`}>
						<p>Home designs to brighten up your personal space.</p>
						<h2 className="font-weight-light">Home Style Lighting</h2>
					</div>
				</div>
			</div>
		</Swiper>
	)
}

export default HomeSliderComponent;