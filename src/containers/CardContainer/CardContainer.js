import React, { useState, useEffect, useContext } from 'react';
import Card from '../../component/Card/Card';
import axios from 'axios';
import classes from './CardContainer.module.scss';
import Container from '../../component/Container/Container';
import InputContainer from '../../component/InputContainer/InputContainer';
import { Link } from 'react-router-dom';
import { IDContext } from '../../context/ID';
////////
const CardContainer = props => {
  const [region, setRegion] = useState('');
  const [apiData, setApiData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { id, setId } = useContext(IDContext);

  const getData = () => {
    axios
      .get(`https://restcountries.com/v2/all`)
      .then(res => {
        console.log(res.data);
        setApiData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (inputValue) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${inputValue}`)
        .then(res => {
          setApiData(res.data);
          setRegion('');
        })
        .catch(error => {
          console.log(error);
        });
    } else if (region) {
      axios
        .get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => {
          setApiData(res.data);
          setInputValue('');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      getData();
    }
  }, [inputValue, region]);

  const getInputValue = e => {
    setInputValue(e.target.value);
  };

  const menuValue = e => {
    setRegion(e.target.value);
    console.log(e.target.value);
  };

  const clicked = e => {
    setId(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  };

  const renderApi = apiData.map(i => {
    return (
      <Link to={`/country/${i.alpha3Code}`} key={i.name}>
        <Card
          onClick={clicked}
          value={i.alpha3Code}
          clicked={clicked}
          img={i.flag}
          title={i.name}
          pop={i.population}
          cap={i.capital}
          reg={i.region}
        />
      </Link>
    );
  });

  console.log(id);

  return (
    <Container>
      <InputContainer
        selectValue={region}
        inputValue={inputValue}
        selectChange={e => menuValue(e)}
        inputChange={e => getInputValue(e)}
      />

      <div className={classes.CardContainer}>{renderApi}</div>
    </Container>
  );
};

export default CardContainer;
