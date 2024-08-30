import { useState, useEffect } from 'react';
import './Calculator.css';

interface Height {
  cm: number;
  ft: number;
  in: number;
}

interface Weight {
  kg: number;
  st: number;
  lbs: number;
}

const Calculator: React.FC = () => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState<Height>({ cm: 0, ft: 0, in: 0 });
  const [weight, setWeight] = useState<Weight>({ kg: 0, st: 0, lbs: 0 });
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('Enter your height and weight and you’ll see your BMI result here');
  const [idealWeightRange, setIdealWeightRange] = useState<string>('');

  useEffect(() => {
    calculateBmi();
    calculateIdealWeightRange();
  }, [height, weight, unit]);

  const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(e.target.value as 'metric' | 'imperial');
    setBmi(null);
    setMessage('Enter your height and weight and you’ll see your BMI result here');
    setIdealWeightRange('');
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let val = parseFloat(value);

    // Clamp the input values to the correct max values
    if (name === 'cm') {
      val = Math.min(val, 272); // Max height in cm
    } else if (name === 'ft') {
      val = Math.min(val, 9); // Max feet
    } else if (name === 'in') {
      val = Math.min(val, 11); // Max inches
    }

    setHeight(prevState => ({ ...prevState, [name]: val }));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let val = parseFloat(value);

    // Clamp the input values to the correct max values
    if (name === 'kg') {
      val = Math.min(val, 635); // Max weight in kg
    } else if (name === 'st') {
      val = Math.min(val, 100); // Max stones
    } else if (name === 'lbs') {
      val = Math.min(val, 13); // Max lbs in a stone
    }

    setWeight(prevState => ({ ...prevState, [name]: val }));
  };

  const calculateBmi = () => {
    let calculatedBmi: number | null = null;
    if (unit === 'metric') {
      if (height.cm && weight.kg) {
        const heightInMeters = height.cm / 100;
        calculatedBmi = weight.kg / (heightInMeters * heightInMeters);
      }
    } else {
      if (height.ft && height.in !== undefined && weight.st !== undefined && weight.lbs !== undefined) {
        const heightInInches = (height.ft * 12) + height.in;
        const weightInLbs = (weight.st * 14) + weight.lbs;
        calculatedBmi = (weightInLbs * 703) / (heightInInches * heightInInches);
      }
    }

    if (calculatedBmi !== null) {
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
      if (calculatedBmi < 18.5) {
        setMessage('Your BMI suggests you are underweight.');
      } else if (calculatedBmi < 24.9) {
        setMessage('Your BMI suggests you\'re a healthy weight.');
      } else if (calculatedBmi < 29.9) {
        setMessage('Your BMI suggests you are overweight.');
      } else {
        setMessage('Your BMI suggests you are obese.');
      }
    }
  };

  const calculateIdealWeightRange = () => {
    if (unit === 'metric' && height.cm) {
      const heightInMeters = height.cm / 100;
      const minWeight = 18.5 * (heightInMeters * heightInMeters);
      const maxWeight = 24.9 * (heightInMeters * heightInMeters);
      setIdealWeightRange(`${minWeight.toFixed(1)}kg - ${maxWeight.toFixed(1)}kg`);
    } else if (unit === 'imperial' && (height.ft || height.in)) {
      const heightInInches = (height.ft * 12) + height.in;
      const minWeight = (18.5 * heightInInches * heightInInches) / 703;
      const maxWeight = (24.9 * heightInInches * heightInInches) / 703;
      const minStones = Math.floor(minWeight / 14);
      const minPounds = Math.round(minWeight % 14);
      const maxStones = Math.floor(maxWeight / 14);
      const maxPounds = Math.round(maxWeight % 14);
      setIdealWeightRange(`${minStones}st ${minPounds}lbs - ${maxStones}st ${maxPounds}lbs`);
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>Enter your details below</h2>
      <div className="unit-category">
        <label>
          <input
            className='option'
            type="radio"
            name="unit"
            value="metric"
            checked={unit === 'metric'}
            onChange={handleUnitChange}
          />
          Metric
        </label>
        <label>
          <input
            className='option'
            type="radio"
            name="unit"
            value="imperial"
            checked={unit === 'imperial'}
            onChange={handleUnitChange}
          />
          Imperial
        </label>
      </div>

      {unit === 'metric' ? (
        <div className="input-group">
          <div className="input-item">
            <input
              type="number"
              placeholder="0"
              name="cm"
              value={height.cm || ''}
              onChange={handleHeightChange}
            />
            <span>cm</span>
          </div>
          <div className="input-item">
            <input
              type="number"
              placeholder="0"
              name="kg"
              value={weight.kg || ''}
              onChange={handleWeightChange}
            />
            <span>kg</span>
          </div>
        </div>
      ) : (
        <div className='input-group2'>
          <div className="input-imperial">
            <div className="input-item">
              <input
                type="number"
                placeholder="0"
                name="ft"
                value={height.ft || ''}
                onChange={handleHeightChange}
              />
              <span>ft</span>
            </div>
            <div className="input-item">
              <input
                type="number"
                placeholder="0"
                name="in"
                value={height.in || ''}
                onChange={handleHeightChange}
              />
              <span>in</span>
            </div>
          </div>
          <div className="input-imperial">
            <div className="input-item">
              <input
                type="number"
                placeholder="0"
                name="st"
                value={weight.st || ''}
                onChange={handleWeightChange}
              />
              <span>st</span>
            </div>
            <div className="input-item">
              <input
                type="number"
                placeholder="0"
                name="lbs"
                value={weight.lbs || ''}
                onChange={handleWeightChange}
              />
              <span>lbs</span>
            </div>
          </div>
        </div>
      )}

      <div className="result">
        {bmi ? (
          <>
            <h2>Your BMI is ... <h1>{bmi}</h1></h2>
            <p>{message} Your ideal weight is between {idealWeightRange}</p>
          </>
        ) : (
          <>
            <h2>Welcome!</h2>
            <p>{message}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Calculator;
