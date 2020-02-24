import React, { useContext } from 'react';
import classes from './Card.module.scss';
import { DarkmodeContext } from '../../context/context';

const Card = props => {
  const { isDark } = useContext(DarkmodeContext);

  const cardClasses = [
    classes.Card,
    !isDark ? classes.CardLight : classes.CardDark
  ];

  return (
    <button value={props.value} onClick={props.clicked}>
      <div className={cardClasses.join(' ')}>
        <div className={classes.CardImage}>
          <img src={props.img} alt="cardimage" />
        </div>
        <div className={classes.CardInfo}>
          <h2>{props.title}</h2>
          <p>
            <strong>Population:</strong>
            {new Intl.NumberFormat('en-US').format(props.pop)}
          </p>
          <p>
            <strong>Region:</strong> {props.reg}
          </p>
          <p>
            <strong>Capital:</strong> {props.cap}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Card;
