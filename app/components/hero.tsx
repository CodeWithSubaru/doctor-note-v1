import React from "react";
import Img from "./img";
import FadeIn from "./fadeIn";

function Hero() {
  return (
    <section className="hero">
      <div className="center max-width">
        <div className="max-width-mobile">
          <div className="hero-inner-text stack max-width">
            <h1>
              Your Doctor&apos;s Note <br /> In 1 Minute, for $29,99!
            </h1>
            <Img
              src="/assets/line.svg"
              alt="swiggle-line"
              className="max-width swiggle-line"
            />
          </div>

          <div className="get-now-action stack">
            <div className="get-now-inner-action max-width">
              <FadeIn>
                <button className="btn">
                  <p>Get your Note Now</p>
                  <span className="arrow-icon">
                    <svg
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      data-id="508817550824440168"
                    >
                      <path
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </FadeIn>
              <ul className="lead">
                <li>
                  <Img
                    src="/assets/safeguard-icon.svg"
                    width={32}
                    height={33}
                    alt=""
                  />
                  <span> 100% Risk-Free Money Back Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
