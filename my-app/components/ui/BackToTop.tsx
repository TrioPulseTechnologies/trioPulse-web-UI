"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <span
                className="
    breathing-ring
    absolute
    left-1/2
    top-1/2
    h-12
    w-12
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    border-4
    border-black
    blur-[1px]
  "
            />

            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="
      relative
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-black
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:scale-110
      cursor-pointer
    "
            >
                <FaArrowUp className="h-4 w-4" />
            </button>
        </div>
    );
}