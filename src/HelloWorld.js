import React from "react";
import _JSXStyle from "styled-jsx/style";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1 className="hello">
          Hello <span className="hello__red">World!</span>
        </h1>
        <style jsx>{`
          .hello {
            color: pink;
            &__red {
              color: red;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default HelloWorld;
