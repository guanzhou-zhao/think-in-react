import React from 'react';

const ThemeContext = React.createContext("dard");

export default class AppUseContext extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="light">
        <h2>App component</h2>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar(props) {
  return (
    <div>
      <h3>....Toolbar component </h3>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends React.Component {
  render() {
    return (
      <div>
        <h4>........ThemeButton component</h4>
        <button>Button inside ThemeButton component with theme {this.context}</button>
      </div>
    )
  }
}
ThemeButton.contextType = ThemeContext;
