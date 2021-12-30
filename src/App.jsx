import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyRow from "./CurrencyRow";

// Запрослар кандай жунатилиши back-end да курсатилган
const base_url =
  "http://api.exchangeratesapi.io/v1/latest?access_key=923e80250cd728d6b5bd33f25e6c571f";

function App() {
  const [currency, setCurrency] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    async function getData() {
      await axios({
        method: "get",
        url: base_url,
      }).then((res) => {
        setCurrency(res.data.rates);
        setDate(res.data.date);
      });
    }
    getData();
  }, []);

  return (
    <div className="App">
      <span
        style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "100px" }}
      >
        Convert
      </span>{" "}
      &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 
      <span>{date}</span>
      <br /><br /><br />
      <CurrencyRow currency={currency} />
    </div>
  );
}

export default App;
