import styles from "./main.module.css";
export const Main = () => {
  return (
    <main>
      <div className={styles.cont}>
        <div className={styles.section_valute}>
          <h2 className={styles.name_valute}>EXCHANGER</h2>
          <div className={styles.sect_valut}>
            <select name="BANKS" id="valutes" className={styles.select_changer}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="PLN">PLN</option>
            </select>
            <input type="text"  className={styles.input_valt} placeholder="5"/>
          </div>
          <div className={styles.line}></div>
          <div className={styles.sect_valut}>
            <input type="text"  className={styles.input_valt} placeholder="100"/>
            <select name="UAN" id="UA" className={styles.select_changer}>
              <option value="UAN">UAN</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
};
