import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.css";
const ScrollToTop = () => {
  const [scroll, setScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const checkScrollTop = () => {
    if (window.scrollY > 400) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  });

  return (
    <>
      {scroll ? (
        <FaArrowUp className={styles.scrollToTop} onClick={scrollToTop} />
      ) : null}
    </>
  );
};

export default ScrollToTop;
