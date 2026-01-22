import React, { useEffect, useRef } from "react";
import './cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    // Handle mouse movement
    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    };

    // Handle mouse down
    const handleMouseDown = () => {
      cursor.classList.add("click");
    };

    // Handle mouse up
    const handleMouseUp = () => {
      cursor.classList.remove("click");
    };

    // Handle link hover
    const handleLinkHover = (e) => {
      if (e.target.tagName === "A") {
        cursor.classList.add("hover");
      }
    };

    const handleLinkLeave = (e) => {
      if (e.target.tagName === "A") {
        cursor.classList.remove("hover");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      <div className="cursor-ring one">
        <div className="cursor-dot"></div>
      </div>
      <div className="cursor-ring two">
        <div className="cursor-dot"></div>
      </div>
      <div className="cursor-ring three">
        <div className="cursor-dot"></div>
      </div>
    </div>
  );
};

export default Cursor;