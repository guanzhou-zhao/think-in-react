import React from 'react';

export default class JsxInDepthChildren extends React.Component {
  render() {
    return (
      <Button style={{color: "#ffffff", textTransform:"uppercase", background: "#ed3330", padding: "20px", borderRadius: "5px"}}>
        children of parent
      </Button>
    )
  }
}

function Button(props) {
  return <button {...props} />
}
/*
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #ed3330;
padding: 20px;
border-radius: 5px;
display: inline-block;
border: none;
*/
