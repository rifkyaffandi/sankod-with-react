import React, { Component } from "react";

export default class Card2 extends Component {
  render() {
    return (
      <div>
        <h3 style="text-align: center;">Daftar Santren Kilat Koding</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://lh5.googleusercontent.com/e6ixy5iFrGuPwlZFn0oU0vPgqMT9zPKdmswiBbZJEVpSbH6L2gVlcKAKFAoz7n31T45ZsSx8tQ=w1191"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Santren Kilat #1 (Comming Soon)
                  </h5>
                  <p className="card-text">4 Hari Intensif Belajar Laravel</p>
                  <p className="card-text card-footnote-left">
                    by Santren Koding
                  </p>
                  <p className="card-text card-footnote-right">
                    Kuota Terbatas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" align="center" style="margin-top: 30px">
              <a href="#">
                <button type="button" className="btn btn-outline-success">
                  Lihat Seluruh Santren Kilat
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
