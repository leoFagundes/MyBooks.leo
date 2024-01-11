import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 10px;
  right: 15px;
  z-index: 3;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    cursor: ${(props) => (props.visible ? "pointer" : "default")};
    filter: drop-shadow(0 0 10px #ffffff4b);

  }
`;

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollUpContainer visible={isVisible} onClick={scrollToTop}>
      <FaArrowUp size={25} color={"#fff"} />
    </ScrollUpContainer>
  );
}
