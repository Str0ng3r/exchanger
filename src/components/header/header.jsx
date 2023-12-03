import styles from "./header.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setEur,
  setPln,
  setUsd,
  setCzk,
  setGel,
  setRub,
} from "../../redux/contactSlice";
import { useEffect, useState } from "react";
export const Header = () => {
  const [headerVal, setHeaderVal] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
        );
        dispatch(setEur(response.data[31].rate));
        dispatch(setPln(response.data[32].rate));
        dispatch(setUsd(response.data[24].rate));
        dispatch(setCzk(response.data[3].rate));
        dispatch(setGel(response.data[55].rate));
        dispatch(setRub(response.data[17].rate));
        setHeaderVal((prevHeaderVal) => {
          if (JSON.stringify(prevHeaderVal) !== JSON.stringify(response.data)) {
            return response.data;
          }
          return prevHeaderVal;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [headerVal, dispatch]);

  return (
    <header>
      <div className={styles.cont}>
        <h2 className={styles.logo_text}>
          <span className={styles.logo_span}>EX</span>changer
        </h2>
        <div className={styles.cont_valutes}>
          {headerVal !== null && (
            <h2 className={styles.valute_text}>
              {headerVal[24].cc}|{headerVal[24].rate}{" "}
            </h2>
          )}
          {headerVal !== null && (
            <h2 className={styles.valute_text}>
              {headerVal[31].cc}|{headerVal[31].rate}{" "}
            </h2>
          )}
        </div>
      </div>
    </header>
  );
};
