import React from 'react';
import CustomTextInput from './CustomTextInput'

class AutoFocusTextInput extends React.Component {

  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return(
      <>
        <CustomTextInput ref={this.textInput}/>
        <p>ref updates before componentDidMount or componentDidUpdate lifecycle methods. Ref to a class Component.</p>
      </>
    )
  }
}

export default AutoFocusTextInput;
