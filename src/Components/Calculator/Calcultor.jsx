import React,{useState}from 'react'
import "./Calculator.css"
import calculator2 from "../../assets/calculator2.png"

    const Calcultor = () => {
        const [bmi, setBmi] = useState();
        const [info, setInfo] = useState();
        const [height, setHeight] = useState();
        const [weight, setWeight] = useState();
        const handleBmi = () => {
          let val = (
            [Number(weight) / Number(height) / Number(height)] * 10000
          ).toFixed(1);
          setBmi(val);
          if (val < 18.5) {
            setInfo("Under Weight");
          } else if (val > 18.5 && val <= 24.9) {
            setInfo("Healthy");
          } else if (val > 24.9 && val < 30) {
            setInfo("Overweight");
          } else {
            setInfo("Obese");
          }
        };
        return (
        <div className='cal-container'>
          <div className="cal-left">
            <h1><span className='stroke-text'>BMI</span> Calculator</h1>
            <div className="input-value">
            <input
              type="text"
              onChange={(e) => setHeight(e.target.value)}
              placeholder="height in cm"
            />
            <input
              type="text"
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight in kg"
            />
            <button className='btn btn-j' onClick={handleBmi}>Calculate</button>
            </div>
            <div className="result">
            <h1>{bmi}</h1>
            <h2>{info}</h2>
            </div>
        </div>
        <div className="cal-right">
                <img src={calculator2} alt="" srcset="" />
        </div>
    </div>
        );
      };
      
      export default Calcultor;
  