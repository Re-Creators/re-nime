import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

function Navbar() {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);
  const props = useSpring({ opacity: goingUp ? 1 : 0, top: goingUp ? 0 : -20 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return (
    <animated.nav
      className="fixed top-0 inset-x-0 h-navbar bg-primary flex justify-center shadow-lg z-50 "
      style={props}
    >
      <div className="w-full max-w-navbar flex items-center">
        <Link to="/">
          <img src="/renime-logo.svg" alt="" />
        </Link>
        <div className="flex justify-center w-full gap-5 text-white items-center">
          <Link to="/" className="p-4 hover:text-active">
            Browse
          </Link>
          <Link to="/" className="p-4 hover:text-active">
            Social
          </Link>
          <Link to="/" className="p-4 hover:text-active">
            Forum
          </Link>
          <Link to="/" className="p-4 ml-16 hover:text-active">
            Login
          </Link>
          <Link to="/" className="px-4 py-1 inline bg-blue-500 rounded-md">
            Sign Up
          </Link>
        </div>
      </div>
    </animated.nav>
  );
}

export default Navbar;
