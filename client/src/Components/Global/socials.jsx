import React from "react";

const Socials = () => {
  return (
    <div className="d-flex gap-3 mt-4">
      <a
        aria-label="Go to Instagram website"
        title="Instagram.com"
        className="text-white"
        href="https://www.instagram.com"
      >
        <i className="fa-brands fa-instagram fs-5" />
      </a>
      <a
        aria-label="Go to Twitter website"
        title="Twitter.com"
        className="text-white"
        href="https://www.twitter.com"
      >
        <i className="fa-brands fa-twitter fs-5" />
      </a>
      <a
        aria-label="Go to Tiktok website"
        title="Tiktok.com"
        className="text-white"
        href="https://www.tiktok.com"
      >
        <i className="fa-brands fa-tiktok fs-5" />
      </a>
    </div>
  );
};

export default Socials;
