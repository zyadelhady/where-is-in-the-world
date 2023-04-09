import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { DarkmodeContext } from '../../context/context';
import { IDContext } from '../../context/ID';
import { Link } from 'react-router-dom';
import classes from './FullCountry.module.scss';
import Container from '../../component/Container/Container';

const FullCountry = props => {
  const { isDark } = useContext(DarkmodeContext);
  // const { id } = useContext(IDContext);
  const [apiData, setApiData] = useState([]);

  const id = props.match.params.id;
  useEffect(() => {
    // const id = props.path
    axios
      .get(`https://restcountries.com/v2/alpha/${id}`)
      .then(res => {
        console.log(res.data);
        setApiData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <Container>
      <div className={classes.FullCountry}>
        <Link to="/">back</Link>
        <div className={classes.FullCountryInfo}>
          <div className={classes.FullCountryInfoImg}>
            <img src={apiData.flag} alt="flag" />
          </div>
          <div className={classes.FullCountryInfoInfo}>
            <div className={classes.FullCountryInfoInfoTitle}>
              <h2>{apiData.name}</h2>
            </div>
            <div className={classes.FullCountryInfoInfoInfo}>
              <div className={classes.FullCountryInfoInfoInfoLeft}>
                <p>
                  <strong>Native Name:</strong>
                  {apiData.nativeName}
                </p>
                <p>
                  <strong>Population:</strong>
                  {apiData.population}
                </p>
                <p>
                  <strong>Region:</strong>
                  {apiData.region}
                </p>
                <p>
                  <strong>Sub Region:</strong>
                  {apiData.subregion}
                </p>
                <p>
                  <strong>Capital:</strong>
                  {apiData.capital}
                </p>
              </div>
              <div className={classes.FullCountryInfoInfoInfoLeft}>
                <p>
                  <strong>Top Level Domain:</strong>
                  25
                </p>

                <p>
                  <strong>Currencies:</strong>
                  {apiData.capital}
                </p>

                <p>
                  <strong>Languages:</strong>
                  {apiData.capital}
                </p>
              </div>
            </div>
            <div className={classes.FullCountryInfoInfoBorders}>
              <p>
                <strong>Border Countries:</strong>
                {apiData.capital}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FullCountry;
