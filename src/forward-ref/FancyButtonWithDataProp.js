import React from 'react';
import FancyButton from './FancyButton'

function withDataProp(Component) {
  return class extends React.Component {

    componentDidMount() {
      console.log("wrapped withDataProp")
    }

    render() {
      const {forwardedRef, ...rest} = this.props;
      return (
        <Component data="123" {...rest} ref={forwardedRef}/>
      )
    }
  }
}

const FancyButtonWithDataProp = withDataProp(FancyButton);

export default React.forwardRef((props, ref) => {
  return <FancyButtonWithDataProp {...props} forwardedRef = {ref} />
});
