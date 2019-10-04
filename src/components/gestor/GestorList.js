import React from "react";
import { Link } from "react-router-dom";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";
// import { Link } from "react-router-dom";

const renderList = (data, userName, project, holidaysData, acceptHolidays) => {
  const holidaysDate = holidaysData.holidays;

  return data
    .filter(user => {
      return user.name.includes(userName);
    })
    .filter(user => {
      return user.project.includes(project);
    })
    .map((user, index) => {
      return (
        <Link to="/gestor/details">
          <ListGestorItem
            user={user}
            holidays={holidaysDate[index]}
            key={index}
            acceptHolidays={acceptHolidays}
          />
        </Link>
      );
    });
};

const GestorList = props => {
  const {
    action,
    data,
    userName,
    getUserName,
    project,
    getProject,
    holidaysData,
    acceptHolidays
  } = props;

  return (
    <div className="gestormain col-12">
      <div className="mainwrap__gestor row">
        <AsideBar btnChange={<Button name="Cambiar a Solicitudes" />} />
        <div className="mainwrap col-9">
          <div className="requestscontainer">
            <h2 className="mainwrap__title">Solicitudes</h2>
            <button className="reset-btn" onClick={action}>
              Reset
            </button>
          </div>
          <Filters
            data={data}
            getUserName={getUserName}
            getProject={getProject}
          />
          <ListGestorStatus />
          <ul>
            {renderList(data, userName, project, holidaysData, acceptHolidays)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GestorList;
