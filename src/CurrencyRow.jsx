import React, { useMemo, useState } from "react";

export default function CurrencyRow(props) {

  const [baseSelected, setBaseSelected] = useState();
  const [countBase, setCountBase] = useState();

  const [secondSelected, setSecondSelected] = useState();
  const [secondCount, setSecondCount] = useState();


  useMemo(() => {
    const result = ((100 * props.currency[secondSelected]) / (100 * props.currency[baseSelected])) * countBase
    setSecondCount(parseFloat(result.toFixed(2)))

  }, [countBase, baseSelected, secondSelected])

 


  return (
    <div className="currency__container">

      <input type="text" onChange={e => setCountBase(e.target.value)}/>
      <select onChange={(e) => setBaseSelected(e.target.value)}>
        {Object.keys(props.currency).map((country, index) => {
          return <option value={country} key={index}> {country} </option>;
        })}
      </select>
      <br />
      <br />   
      <br /> 
        
      
      <select onChange={(e) => {setSecondSelected(e.target.value)} }>
        {Object.keys(props.currency).map((country, index) => {
          return <option value={country} key={index}> {country} </option>;
        })}
      </select>
        <br /><br /><br />
      {secondCount ? <span style={{border:'none'}}>{secondCount}</span> : null}

    </div>
  );
}
