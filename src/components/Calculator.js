import React from 'react';
import calculate from '../logic/calculate';
import './style.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <section>
        <div className="btn-rows">
          <div id="result" className="grid-item">
            {total}
            {operation}
            {next}
          </div>

          <button type="button" className="grid-item" name="AC" onClick={this.handleClick}>AC </button>
          <button type="button" className="grid-item" name="+/-" onClick={this.handleClick}> +/- </button>
          <button type="button" className="grid-item" name="%" onClick={this.handleClick}> % </button>
          <button type="button" className="grid-item orange" name="÷" onClick={this.handleClick}> ÷ </button>
          <button type="button" className="grid-item" name="7" onClick={this.handleClick}> 7 </button>
          <button type="button" className="grid-item" name="8" onClick={this.handleClick}> 8 </button>
          <button type="button" className="grid-item" name="9" onClick={this.handleClick}> 9 </button>
          <button type="button" className="grid-item orange" name="x" onClick={this.handleClick}> x </button>
          <button type="button" className="grid-item" name="4" onClick={this.handleClick}> 4 </button>
          <button type="button" className="grid-item" name="5" onClick={this.handleClick}> 5 </button>
          <button type="button" className="grid-item" name="6" onClick={this.handleClick}> 6 </button>
          <button type="button" className="grid-item orange" name="-" onClick={this.handleClick}> - </button>
          <button type="button" className="grid-item" name="1" onClick={this.handleClick}> 1 </button>
          <button type="button" className="grid-item" name="2" onClick={this.handleClick}> 2 </button>
          <button type="button" className="grid-item" name="3" onClick={this.handleClick}> 3 </button>
          <button type="button" className="grid-item orange" name="+" onClick={this.handleClick}> + </button>
          <button type="button" className="grid-item zero" name="0" onClick={this.handleClick}> 0 </button>
          <button type="button" className="grid-item" name="." onClick={this.handleClick}> . </button>
          <button type="button" className="grid-item orange" name="=" onClick={this.handleClick}> = </button>
        </div>
      </section>
    );
  }
}

export default Calculator;
