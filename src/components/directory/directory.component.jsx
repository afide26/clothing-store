import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../../pages/menu-item/menu-item.component";

import { getSections } from "../../data/directory.data.js";
class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: []
    };
  }

  componentDidMount() {
    this.setState({
      sections: getSections()
    });
  }
  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem
            key={id}
            imageUrl={imageUrl}
            title={title.toUpperCase()}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
