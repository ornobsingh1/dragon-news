import React from "react";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Fond Us On</h2>

      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="facebook-new"
          />
          Facebook
        </button>
        <button className="btn bg-base-100 justify-start join-item">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/twitter-circled--v1.png"
            alt="twitter-circled--v1"
          />
          Twitter
        </button>
        <button className="btn bg-base-100 justify-start join-item">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/instagram-new.png"
            alt="instagram-new"
          />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
