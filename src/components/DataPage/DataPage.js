import React from 'react';
import PropTypes from 'prop-types';
import './DataPage.css';
import SideNav from "../SideNav/SideNav";
import Last24HourChart from "../Last24HourChart/Last24HourChart";

const DataPage = () => (
  <div className="DataPage" data-testid="DataPage">
      <div className="sidenav"><SideNav></SideNav></div>
      <div className="chart" ><Last24HourChart title="active watt last 24 hours"></Last24HourChart></div>
  </div>
);

DataPage.propTypes = {};

DataPage.defaultProps = {};

export default DataPage;
