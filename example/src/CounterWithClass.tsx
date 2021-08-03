import React from 'react';

class Counter extends React.Component<{}, { count: number }> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 1,
    };

    debugger;
  }

  add1 = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    debugger;
    return (
      <div className="Counter">
        <button type="button" onClick={this.add1}>
          useContext : {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
