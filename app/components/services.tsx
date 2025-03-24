import React from "react";
import Img from "./img";
import FadeIn from "./fadeIn";

function Services() {
  return (
    <section className="services max-width">
      <FadeIn delay={6}>
        <div className="services-top max-width-mobile">
          <h1 className="dark">
            Get An Online Doctor&apos;s Note In 3 Easy Steps
          </h1>
          <p className="lead fs-18">
            {" "}
            With our online platform we make it quick and simple for you to
            obtain a doctors note, so you can focus on rest and recovery.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={7}>
        <div className="services-items grid grid-cols-3">
          <article className="card-sm-3">
            <div className="img-container">
              <Img
                src="/assets/woman-using-cellphone.webp"
                className="w-100"
                alt="woman-using-cellphone"
              />
            </div>

            <div className="w-100">
              <h2 className="dark center">Fill In The Smart Form</h2>
            </div>
            <p className="lead accent-tertiary">
              Indicate your illness and the desired duration. It&apos;s quick
              and intuitive.
            </p>
          </article>

          <article>
            <div className="img-container">
              <Img
                src="/assets/doctors-hand-writing-in-note.webp"
                className="w-100"
                alt="woman-using-cellphone"
              />
            </div>
            <div>
              <div className="w-75">
                <h2 className="dark center">Receive Your PDF In 1 Minute</h2>
              </div>
            </div>
            <p className="lead accent-tertiary">
              After you&apos;ve completed the checkout, your pre-filled sick
              leave will be sent by email within 1 minute, and it will be ready
              on the payment confirmation page.
            </p>
          </article>
          <article>
            <div className="img-container">
              <Img
                src="/assets/doctors-hand-writing-in-note.webp"
                className="w-100"
                alt="woman-using-cellphone"
              />
            </div>
            <div>
              <div className="w-75">
                <h2 className="dark center">100% Satisfaction Guarantee</h2>
              </div>
            </div>
            <p className="lead accent-tertiary">
              Join hundreds of thousands of satisfied customers who trust us.
              Our sick leave plans are easy to use and designed to meet your
              needs quickly and efficiently!
            </p>
          </article>
        </div>
      </FadeIn>

      <FadeIn delay={8}>
        <div className="get-now-action stack">
          <div className="get-now-inner-action max-width">
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
            <ul className="lead mt-16">
              <li>
                <Img
                  src="/assets/safeguard-icon.svg"
                  width={32}
                  height={33}
                  alt="guarantee"
                />
                <span className="dark accent-primary">
                  100% Risk-Free Money Back Guarantee
                </span>
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Services;
