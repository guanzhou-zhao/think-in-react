import React from 'react'

export default class CallbackRefCustomTextInput extends React.Component {

  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputElement = element => {
      this.textInput = element;
    }
    this.focusTextInput = () => {
      if(this.textInput) this.textInput.focus();
    }
  }

  render(){
    return(
      <div>
        <input type="text" ref={this.setTextInputElement}/>
        <button onClick={this.focusTextInput}>
          Click me to focus (callback ref)
        </button>
      </div>
    )
  }
}
