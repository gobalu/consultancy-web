import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './ScrollArrow.scss';

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <Icon
      className="scrollTop"
      icon="bi:arrow-up-circle-fill"
      onClick={scrollTop}
      height="40%"
    />
  );
};

export default ScrollArrow;
