import React from 'react';
import FancyButton from './FancyButton'

export default class ForwardRef extends React.Component {
  constructor(props) {
    super(props);

    this.fancyButton = React.createRef();
    this.handleButtonClick = () => {
      this.fancyButton.current.focus();
      console.log(this.fancyButton.current)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>
          click to focus FancyButton.
        </button>
        <FancyButton ref={this.fancyButton}/>
      </div>
    )
  }
}
