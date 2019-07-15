import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../../pages/collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => {
  {process.env.NODE_ENV === 'development' ? console.log(match) :null;}
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
