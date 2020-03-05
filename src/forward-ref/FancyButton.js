import React from 'react';
import './FancyButton.css'
class FancyButton extends React.Component {
  render() {
    const {forwardedRef, ...rest} = this.props;

    return (
      <button ref={forwardedRef} {...rest} className="fancy">
        FancyButton
      </button>
    )
  }
}

export default React.forwardRef((props, ref) => {
  return <FancyButton {...props} forwardedRef={ref} />
})
