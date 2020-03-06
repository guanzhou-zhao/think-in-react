import React from 'react';

const ThemeContext = React.createContext("dard");
ThemeContext.displayName = "ThemeContext";
const LoggedInUserContext = React.createContext({name: "guest", tag: 0});
LoggedInUserContext.displayName = "LoggedInUserContext"

export default class AppUseContext extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="light">
        <LoggedInUserContext.Provider value={{name:"Ben", tag: 1}}>
          <h2>App component</h2>
          <Toolbar />
        </LoggedInUserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

function Toolbar(props) {
  return (
    <div>
      <LoggedInUserContext.Consumer>
        {
          (loggedInUser) => <h3>....Toolbar component Hi, {loggedInUser.name}</h3>
        }
      </LoggedInUserContext.Consumer>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends React.Component {
  render() {
    return (
      <div>
        <h4>........ThemeButton component</h4>
        <ThemeContext.Consumer>
          {
            (themeValue) => <button>Button inside ThemeButton component with theme {themeValue}</button>
          }
        </ThemeContext.Consumer>
      </div>
    )
  }
}
