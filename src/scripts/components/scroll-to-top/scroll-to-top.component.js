import React from 'react';

// Styles
import './scroll-to-top.component.scss';
import '../../../styles/_global.scss';

// Libraries
import $ from 'jquery';

const ScrollToTop = () => {
  const animateScrollToTop = () => {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  }

  $(window).on('scroll', (event) => {
    event.currentTarget.scrollY > 500 ? $('#back-to-top').addClass('show-scroll-button') : $('#back-to-top').removeClass('show-scroll-button');
  });

  return (
    <div 
      id="back-to-top" 
      className="btn btn-light btn-lg back-to-top"
      role="button"
      onClick={animateScrollToTop}
    >
      <i className="fa fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;