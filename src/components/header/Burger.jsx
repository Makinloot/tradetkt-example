import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Burger = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  // close burger menu if clicked outside burger
  useEffect(() => {
    const handleClass = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setShow(false);
    };

    document.addEventListener("mousedown", handleClass);
    return () => document.removeEventListener("mousedown", handleClass);
  }, []);

  return (
    <div className="burger" ref={menuRef}>
      <div className="burger-btn" onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={show ? faXmark : faBars} />
      </div>
      <nav
        className={
          show ? "burger-menu flex-col active" : "burger-menu flex-col"
        }
      >
        <Link to="/">home</Link>
        <Link to="/search">search</Link>
        <Link to="#">news</Link>
        <Link to="#">about</Link>
        <Link to="#">contact</Link>
      </nav>
    </div>
  );
};

export default Burger;
