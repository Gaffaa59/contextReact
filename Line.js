import React from "react";

class Line extends React.Component {
    constructor(props) {
      super(props);
    }
      render() {
        return (
              <div>
                    {e => e.name + " " + e.surname + " " + e.mark}
                    Имя: {this.props.name} |Фамилия: {this.props.surname} |Марка: {this.props.mark}
              </div>
        );
      }
    }

export default Line;