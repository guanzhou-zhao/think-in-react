import React from 'react';
import FancyButton from './FancyButton'

export default class ForwardRef extends React.Component {

  render() {
    return (
      <div>
        <button>
          click to focus FancyButton.
        </button>
        <FancyButton />
      </div>
    )
  }
}
