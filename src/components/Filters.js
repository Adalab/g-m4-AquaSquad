import React from "react";
import "../stylesheets/components/Filters.scss";

const renderName = data => {
  return data.map((user, index) => {
    return (
      <option value={user.name} key={index}>
        {user.name}
      </option>
    );
  });
};

const renderChapter = data => {
  return data.map((user, index) => {
    return (
      <option value={user.chapter_name} key={index}>
        {user.chapter_name}
      </option>
    );
  });
};

const Filters = props => {
  const { data } = props;

  return (
    <form className="gestor__wrap--filter">
      <select className="gestor__wrap--selectfilter" name="user">
        <option>Usuario</option>
        {renderName(data)}
      </select>

      <select className="gestor__wrap--selectfilter" name="chapter">
        <option>Chapter</option>
        {renderChapter(data)}
      </select>

      <select className="gestor__wrap--selectfilter" name="project">
        <option>Proyecto</option>
        <option value="Liquid Squad">Liquid Squad</option>
        <option value="Wadus project">Wadus project</option>
      </select>
    </form>
  );
};

export default Filters;
