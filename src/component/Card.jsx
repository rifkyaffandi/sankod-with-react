import React from "react";
import "./style.css";

const bodyCard = () => {
  return (
    <div>
      <bodyCard className="bodyCard">
        <h2 className="h2-card">Daftar Kajian Koding Rutin</h2>
        <div className="container my-5">
          {/* <!-- firstRowStart --> */}
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Kajian Koding #3</h5>
                  <p className="card-text">
                    React JS dan Firebase Auth/Hosting
                  </p>
                  <p className="card-text card-footnote-left">
                    by Santren Koding
                  </p>
                  <p className="card-text card-footnote-right">
                    Kuota Terbatas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Kajian Koding #2</h5>
                  <p className="card-text">HTML, CSS, dan Bootstrap dasar</p>
                  <p className="card-text card-footnote-left">
                    by Santren Koding
                  </p>
                  <p className="card-text card-footnote-right">
                    Kuota Terbatas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Kajian Koding #1</h5>
                  <p className="card-text">Belajar Laravel Dasar</p>
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
          {/* <!-- firstRowEnd -->
    <!-- 2ndRowStart --> */}
          <div className="row center">
            <div className="col row-ke-dua button-kajian-koding">
              <a href="https://google.com">
                <button
                  type="button"
                  className=" btn btn-outline-success lihat-kajian-btn"
                >
                  Lihat Seluruh Kajian Koding
                </button>
              </a>
            </div>
          </div>
          {/* <!-- 2ndRowEnd --> */}
        </div>
        <br />
      </bodyCard>
    </div>
  );
};

export default bodyCard;
