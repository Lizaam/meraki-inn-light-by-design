import React from 'react';
import './scroll-to-top.component.scss';
import '../../../styles/_global.scss';
import $ from 'jquery';

const ScrollToTop = () => {
  const AnimateScrollToTop = () => {
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
      onClick={AnimateScrollToTop}
    >
      <i className="fa fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;