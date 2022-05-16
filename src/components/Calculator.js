import React from 'react';
import './style.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <section>
        <div className="btn-rows">
          <div id="result" className="grid-item">0</div>

          <button type="button" className="grid-item" name="AC">AC </button>
          <button type="button" className="grid-item" name="+/-"> +/- </button>
          <button type="button" className="grid-item" name="%"> % </button>
          <button type="button" className="grid-item orange" name="÷"> ÷ </button>
          <button type="button" className="grid-item" name="7"> 7 </button>
          <button type="button" className="grid-item" name="8"> 8 </button>
          <button type="button" className="grid-item" name="9"> 9 </button>
          <button type="button" className="grid-item orange" name="x"> x </button>
          <button type="button" className="grid-item" name="4"> 4 </button>
          <button type="button" className="grid-item" name="5"> 5 </button>
          <button type="button" className="grid-item" name="6"> 6 </button>
          <button type="button" className="grid-item orange" name="-"> - </button>
          <button type="button" className="grid-item" name="1"> 1 </button>
          <button type="button" className="grid-item" name="2"> 2 </button>
          <button type="button" className="grid-item" name="3"> 3 </button>
          <button type="button" className="grid-item orange" name="+"> + </button>
          <button type="button" className="grid-item zero" name="0"> 0 </button>
          <button type="button" className="grid-item" name="."> . </button>
          <button type="button" className="grid-item orange" name="="> = </button>
        </div>
      </section>
    );
  }
}

export default Calculator;
