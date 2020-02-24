import React, { useContext } from 'react';
import classes from './InputContainer.module.scss';
import Container from '../Container/Container';
import svgSearch from '../../assets/search-solid.svg';
import { DarkmodeContext } from '../../context/context';

const InputContainer = props => {
  const { isDark } = useContext(DarkmodeContext);

  const inputContainerClasses = [
    classes.InputContainerBox,
    !isDark ? classes.InputContainerBoxLight : classes.InputContainerBoxDark
  ];

  const inputClasses = [
    classes.InputContainerInput,
    !isDark ? classes.InputContainerInputLight : classes.InputContainerInputDark
  ];

  const selectClasses = [
    classes.InputContainerSelect,
    !isDark
      ? classes.InputContainerSelectLight
      : classes.InputContainerSelectDark
  ];

  return (
    <Container>
      <div className={classes.InputContainer}>
        <div className={inputContainerClasses.join(' ')}>
          <input
            className={inputClasses.join(' ')}
            type="text"
            value={props.inputValue}
            placeholder="Search for country..."
            onChange={e => props.inputChange(e)}
          />
          {/* <button onClick={props.clicked}> */}
          <svg>
            <use xlinkHref={`${svgSearch}#iconSearch`}></use>
          </svg>
          {/* </button> */}
        </div>

        <select
          className={selectClasses.join(' ')}
          onChange={props.selectChange}
          value={props.selectValue}
        >
          <option className={classes.InputContainerSelectItem} value="0">
            Filter by Region
          </option>
          <option value="africa">Africa </option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </Container>
  );
};

export default InputContainer;
