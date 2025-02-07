import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>

        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://www.pexels.com/photo/sun-301599/" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>

          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://www.pexels.com/photo/crossaint-and-paper-cups-13119652/"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>

          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://www.pexels.com/photo/crossaint-and-paper-cups-13119652/"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>

          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://www.pexels.com/photo/crossaint-and-paper-cups-13119652/"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
