import "./styles.css";

import { Component, useState } from "react";
class CounterCl extends Component {
  state = {
    y: 0
  };
  render() {
    const { startingNumber } = this.props;
    const { y } = this.state;
    return (
      <>
        <h1>0</h1>
        <h2> starting number: {startingNumber}</h2>
        <h2> state : {y} </h2>
        <button
          onClick={() => {
            this.setState({
              y: this.state.y + 1
            });
          }}
        >
          Increament
        </button>
      </>
    );
  }
}

function CounterF(props) {
  const { startingNumber } = props;

  const [x, setX] = useState(0);

  return (
    <>
      <h1> 0</h1>
      <h2>startting number: {startingNumber}</h2>
      <h2> state : {x} </h2>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>functional components</h1>
      <CounterF startingNumber={42} />
      <h2>class components</h2>
      <CounterCl startingNumber={42} />
    </div>
  );
}
