import React from "react";
import { Jumbotron } from "reactstrap";
import "./style.css";

const JumBo = () => {
  return (
    <div>
      <Jumbotron className="App">
        <h1 className="display-3">Belajar Jadi Asyik!</h1>
        <p className="lead">
          Kegiatan intensif belajar Programming dan Qur'an bersama Santren
          Koding.
        </p>
        <br />
        <a
          className="btn btn-success btn-lg"
          href="https://santrenkoding.org"
          role="button"
          style={{ margin: "auto" }}
        >
          Mulai Belajar
        </a>
      </Jumbotron>
    </div>
  );
};

export default JumBo;
