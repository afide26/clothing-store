import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCollections } from "../../data/collections.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    this.setState({
      collections: getCollections()
    });
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
