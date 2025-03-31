import React from "react";
import { Link } from "react-router";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-100 border-t shadow-md p-4 max-w-7xl">
        <div className="flex flex-row justify-between p-3">
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="font-extrabold text-slate-950 text-xl">RENTLIFY</p>
            <p className="font-medium text-slate-500 text-base">
              The ultimate platform for renting homes and vehicles...
            </p>
          </div>
          <p className="flex flex-row justify-center items-center gap-4 font-medium p-2">
            Rent out your property
            <Link
              to="/host"
              className="border-2 px-6 py-2 rounded-md bg-slate-500 text-lg"
            >
              Host
            </Link>
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 justify-items-start gap-7 font-medium text-base p-4 border-t-2">
          <div className="flex flex-col gap-2">
            <Link to="/house" className="hover:underline">
              Homes
            </Link>
            <Link to="/vehicle" className="hover:underline">
              Vehicle
            </Link>
            <Link to="/host" className="hover:underline">
              Host
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/house" className="hover:underline">
              Profile
            </Link>
            <Link to="/vehicle" className="hover:underline">
              Wishlist
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/help-center" className="hover:underline">
              Help Center
            </Link>
            <Link to="/report" className="hover:underline">
              Report
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p>Follow us on</p>
            <div className="flex gap-4 text-4xl">
              <a href="https://x.com/MdsamarAtib">
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
              <a href="https://www.linkedin.com/in/mdsamaratib/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/md_samar_atib/">
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
            </div>
          </div>
        </div>
        <span className="flex justify-center border-t p-2">
          &copy; 2025 Rentlify.ltd
        </span>
      </footer>
    </div>
  );
};

export default Footer;
