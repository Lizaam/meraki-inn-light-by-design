import React from 'react';

// Stylesheets
import './card-icons.component.scss';

// Assets
import Beaded from '../../../assets/images/icons/beaded.png';
import Retro from '../../../assets/images/icons/retro.png';
import Crystals from '../../../assets/images/icons/crystals.png';

const CardIcons = (props) => {
  const icons = [];

  const differentStylesText = (style) => {
    switch (style.toLowerCase()) {
      case 'beaded':
        return <span>Beaded Style Design</span>
      case 'crystals':
        return <span>Shiny Crystal Design</span>
      case 'retro':
        return <span>Retro Feel Design</span>
      default:
        return <span>Custom Designs</span>
    }
  }
  
  for (var i = 0; i < 5; i++) {
    switch (props.product.info.style) {
      case 'beaded':
        icons.push(<img src={Beaded} alt="..." key={i} />);
        break;
      case 'retro':
        icons.push(<img src={Retro} alt="..." key={i} />);
        break;
      case 'crystals':
        icons.push(<img src={Crystals} alt="..." key={i} />);
        break;
      default:
        return false;
    }
  }

  if (props.showAdditionalText) {
    return (
      <React.Fragment>
        <span className="card-icon">{differentStylesText(props.product.info.style)} | {icons}</span>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <span className="card-icon">{icons}</span>
      </React.Fragment>
    );
  }
};

export default CardIcons;