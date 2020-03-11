import React from 'react';
import { Header, LeftSideBar } from '../../../../containers';
import { Layouts, NoInternetConnection } from '../../../../components';

const Orders = () => (
  <Layouts.Main>
    <LeftSideBar />
    <div className="main-container">
      <NoInternetConnection>
        <Header hideToggleRightSideBar>
          <h1 className="weight--medium title--xl title-page">
            Orders
          </h1>
        </Header>
        <div className="main-container__content main-container__content--profile">
          <h3>Orders container</h3>
        </div>
      </NoInternetConnection>
    </div>
  </Layouts.Main>
);

export default Orders;
