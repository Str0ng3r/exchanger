import styles from "./header.module.css";
import axios from "axios";

import { setEur,setPln,setUsd } from "../../redux/contactSlice";
import { useEffect, useState } from "react";
export const Header = () => {
  const [headerVal, setHeaderVal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
        );
        setHeaderVal((prevHeaderVal) => {
          if (JSON.stringify(prevHeaderVal) !== JSON.stringify(response.data)) {
            console.log(response.data);
            return response.data;
          }
          return prevHeaderVal;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [headerVal]);

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
