import React from 'react'

class CustomTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput}/>
        <button onClick={this.focusTextInput}>
          Click to focus
        </button>
      </div>
    )
  }
}

export default CustomTextInput;
