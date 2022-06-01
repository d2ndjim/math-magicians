import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  };

  const { total, next, operation } = state;

  return (
    <>
      <h4 className="calculator-text">Lets do some Math!</h4>
      <section>
        <div className="btn-rows">
          <div id="result" className="grid-item">
            {total}
            {operation}
            {next}
          </div>

          <button type="button" className="grid-item" name="AC" onClick={handleClick}>AC </button>
          <button type="button" className="grid-item" name="+/-" onClick={handleClick}> +/- </button>
          <button type="button" className="grid-item" name="%" onClick={handleClick}> % </button>
          <button type="button" className="grid-item orange" name="÷" onClick={handleClick}> ÷ </button>
          <button type="button" className="grid-item" name="7" onClick={handleClick}> 7 </button>
          <button type="button" className="grid-item" name="8" onClick={handleClick}> 8 </button>
          <button type="button" className="grid-item" name="9" onClick={handleClick}> 9 </button>
          <button type="button" className="grid-item orange" name="x" onClick={handleClick}> x </button>
          <button type="button" className="grid-item" name="4" onClick={handleClick}> 4 </button>
          <button type="button" className="grid-item" name="5" onClick={handleClick}> 5 </button>
          <button type="button" className="grid-item" name="6" onClick={handleClick}> 6 </button>
          <button type="button" className="grid-item orange" name="-" onClick={handleClick}> - </button>
          <button type="button" className="grid-item" name="1" onClick={handleClick}> 1 </button>
          <button type="button" className="grid-item" name="2" onClick={handleClick}> 2 </button>
          <button type="button" className="grid-item" name="3" onClick={handleClick}> 3 </button>
          <button type="button" className="grid-item orange" name="+" onClick={handleClick}> + </button>
          <button type="button" className="grid-item zero" name="0" onClick={handleClick}> 0 </button>
          <button type="button" className="grid-item" name="." onClick={handleClick}> . </button>
          <button type="button" className="grid-item orange" name="=" onClick={handleClick}> = </button>
        </div>
      </section>
    </>

  );
}

export default Calculator;
