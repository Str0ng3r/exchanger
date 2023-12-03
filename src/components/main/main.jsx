import { useState } from "react";
import styles from "./main.module.css";
import { useSelector } from "react-redux";
export const Main = () => {
  const [currentVal, setCurrentVal] = useState("USD");
  const [countVal, setCountVal] = useState(0);
  const [uaVal, setUaVal] = useState(0);

  const coursePLN = useSelector((state) => state.pln);
  const courseUSD = useSelector((state) => state.usd);
  const courseEUR = useSelector((state) => state.eur);
  const courseCZK = useSelector((state) => state.czk);
  const courseGEL = useSelector((state) => state.gel);
  const courseRUB = useSelector((state) => state.rub);
  return (
    <main>
      <div className={styles.cont}>
        <div className={styles.section_valute}>
          <h2 className={styles.name_valute}>EXCHANGER</h2>
          <div className={styles.sect_valut}>
            <select
              name="BANKS"
              id="valutes"
              onChange={(evt) => {
                setCurrentVal(evt.currentTarget.value);

                if (evt.currentTarget.value === "USD") {
                  const result = countVal * courseUSD;
                  setUaVal(result.toFixed(2));
                } else if (evt.currentTarget.value === "EUR") {
                  const result = countVal * courseEUR;
                  setUaVal(result.toFixed(2));
                } else if (evt.currentTarget.value === "PLN") {
                  const result = countVal * coursePLN;
                  setUaVal(result.toFixed(2));
                } else if (evt.currentTarget.value === "CZK") {
                  const result = countVal * courseCZK;
                  setUaVal(result.toFixed(2));
                } else if (evt.currentTarget.value === "GEL") {
                  const result = countVal * courseGEL;
                  setUaVal(result.toFixed(2));
                } else if (evt.currentTarget.value === "RUB") {
                  const result = countVal * courseRUB;
                  setUaVal(result.toFixed(2));
                }
              }}
              className={styles.select_changer}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="PLN">PLN</option>
              <option value="CZK">CZK</option>
              <option value="GEL">GEL</option>
              <option value="RUB">RUB</option>
            </select>
            <input
              type="number"
              value={countVal}
              className={styles.input_valt}
              placeholder="5"
              onChange={(evt) => {
                setCountVal(evt.currentTarget.value);
                if (currentVal === "USD") {
                  const result = evt.currentTarget.value * courseUSD;
                  setUaVal(result.toFixed(2));
                } else if (currentVal === "EUR") {
                  const result = evt.currentTarget.value * courseEUR;
                  setUaVal(result.toFixed(2));
                } else if (currentVal === "PLN") {
                  const result = evt.currentTarget.value * coursePLN;
                  setUaVal(result.toFixed(2));
                } else if (currentVal === "CZK") {
                  const result = evt.currentTarget.value * courseCZK;
                  setUaVal(result.toFixed(2));
                } else if (currentVal === "GEL") {
                  const result = evt.currentTarget.value * courseGEL;
                  setUaVal(result.toFixed(2));
                } else if (currentVal === "RUB") {
                  const result = evt.currentTarget.value * courseRUB;
                  setUaVal(result.toFixed(2));
                }
              }}
            />
          </div>
          <div className={styles.line}></div>
          <div className={styles.sect_valut}>
            <input
              type="number"
              value={uaVal}
              onChange={(evt) => {
                setUaVal(evt.currentTarget.value);
                if (currentVal === "USD") {
                  const result = evt.currentTarget.value / courseUSD;
                  setCountVal(result.toFixed(2));
                } else if (currentVal === "EUR") {
                  const result = evt.currentTarget.value / courseEUR;
                  setCountVal(result.toFixed(2));
                } else if (currentVal === "PLN") {
                  const result = evt.currentTarget.value / coursePLN;
                  setCountVal(result.toFixed(2));
                } else if (currentVal === "CZK") {
                  const result = evt.currentTarget.value / courseCZK;
                  setCountVal(result.toFixed(2));
                } else if (currentVal === "GEL") {
                  const result = evt.currentTarget.value / courseGEL;
                  setCountVal(result.toFixed(2));
                } else if (currentVal === "RUB") {
                  const result = evt.currentTarget.value / courseRUB;
                  setCountVal(result.toFixed(2));
                }
              }}
              className={styles.input_valt}
              placeholder="100"
            />
            <select name="UAN" id="UA" className={styles.select_changer}>
              <option value="UAN">UAN</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
};
