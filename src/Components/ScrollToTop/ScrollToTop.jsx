import React from "react";
import Style from "./ScrollToTop.module.scss";
import { IoMdRocket } from "react-icons/io";
function ScrollToTopButton({ handleScrollToTop, showScrollToTopButton }) {
    return (
        <div style={{ border: "none" }}>
            <button onClick={() => handleScrollToTop()}
                className={showScrollToTopButton ? Style.scrollToTop : Style.hideScrollToTopButton}
            ><IoMdRocket className={Style.rocket} />
            </button>
        </div>
    );
}

export default ScrollToTopButton;