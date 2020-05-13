import React from "react";

class HelloWorld extends React.Component {
  helloTo = ['World','Friend','React'];
  state = {
      who: 'world'
  };

  handleButtonClick = (props) => {
    console.log(props)
    this.setState({
        who: props
    })
  }
  
  renderButtons() {
    console.log('clicked')
    return this.helloTo.map((to, index) => (
      <button key={index} onClick={() => this.handleButtonClick(to)}>
        {to}
      </button>
    ))
  }

  render() {
    return (
        <div>
          <p>Hello, {this.state.who}</p>
          
          {this.renderButtons()}
        </div>
    )
    }
}

export default HelloWorld;