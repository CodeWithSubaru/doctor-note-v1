"use client";
import React, { useEffect, useRef, useState } from "react";
import Img from "./img";
import MidDot from "./mid-dot";
import FadeIn from "./fadeIn";

function Cta() {
  const [isAnimationRevealed, setAnimationRevealed] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationRevealed(true);
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.1, // Trigger when 50% of the element is visible
      }
    );

    const buttonElement = btnRef.current;
    if (buttonElement) observer.observe(buttonElement);

    return () => {
      if (buttonElement) observer.unobserve(buttonElement);
    };
  }, []);

  return (
    <section>
      <div className="py-30">
        <article className="cta max-width">
          <div className="cta-inner grid ">
            <div className="img-container">
              <Img
                src="/assets/100-percent-guarantee.svg"
                alt="100-percent-guarantee"
                className="w-100 h-100"
              />
            </div>

            <div className="stack">
              <h2>Money Back Guarantee!</h2>
              <p className="lead mb-20">
                We will refund 100% of your payment, in case you&aposre not 100%
                satisfied with our service.
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className="max-width-mobile py-30">
        <h1 className="fs-48 dark">
          Get Peace of Mind <br /> With{" "}
          <span className="primary">My Doctors Note</span>
        </h1>

        <div className="center mb-16">
          <Img
            src="/assets/line-black.svg"
            alt="swiggle-line"
            className="w-45"
          />
        </div>

        <p className="lead lead-lg accent mb-20">
          My Doctor’s Note provides a fast, hassle-free solution for obtaining
          excuse notes. Focus on your recovery while we take care of the
          paperwork, delivering your note in minutes.
        </p>
      </div>

      <div className="max-width grid grid-cols-6 gap-16 items-start card-m">
        <div className="stack gap-16">
          <article className="card-sm">
            <h3 className="fw-600 mb-24">
              Trusted by Thousands Across the USA
            </h3>
            <ul className="stack gap-20 items-center mb-22 accent">
              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong> Professional & Reliable –</strong> Includes key
                  medical absence details in a format widely recognized by
                  workplaces..
                </div>
              </li>

              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong>Essential Information Included -</strong> Clearly
                  structured while protecting your privacy.
                </div>
              </li>
              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong>Instant & Hassle-Free – </strong> No appointments, no
                  waiting. Receive your document within seconds via email.
                </div>
              </li>
            </ul>
            <div className="grid grid-cols-3 justify-items-center items-center mb-20">
              <Img src="/assets/walmart.svg" alt="walmart" className="w-80" />
              <Img src="/assets/fedex.svg" alt="fedex" className="w-65" />
              <Img
                src="/assets/starbucks.webp"
                alt="starbucks"
                className="w-80"
              />
            </div>
          </article>
          <article className="card-sm-2">
            <h3 className="fw-600 mb-24">
              Customer Support That Puts You First
            </h3>
            <ul className="stack gap-20 items-center mb-28 accent">
              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong> Adjustable to Your Needs –</strong> Easily modify
                  details to match your situation.
                </div>
              </li>
              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong> Always Here for You – </strong>Get assistance
                  whenever you need it, day or night.
                </div>
              </li>
              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong> Real People, Real Support –</strong> Our team is here
                  to help, every step of the way.
                </div>
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-32 items-center">
              <Img
                src="/assets/people.png"
                alt="people"
                className="people w-100"
              />
              <h3 className="accent accent-secondary mb-0 w-100 fs-22">
                We&apos;re ready to help!
              </h3>
            </div>
          </article>
        </div>

        <div className="stack gap-16">
          <article className="card-sm-2">
            <h3 className="fw-600"> Get Your Note In Under 1 Minute</h3>
            <ul className="stack gap-20 items-center accent mb-28">
              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong> Skip the Wait – </strong>No appointments, no delays.
                  Get what you need instantly, anytime.
                </div>
              </li>

              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong> Available 24/7 –</strong> No need to schedule weeks
                  in advance. Access your document on demand, day or night.
                </div>
              </li>

              <li className="stack stack-horizontal gap-10 items-center">
                <MidDot />
                <div>
                  <strong> Instant Email Delivery – </strong>Receive your note
                  directly in your inbox, ready to use.
                </div>
              </li>
            </ul>
          </article>

          <article className="center space-37 w-full card-sm-2">
            <h3 className="fw-600 mb-32"> The Best Price In The Market</h3>
            <del className="accent fs-30 fw-600 mb-37"> $42.99</del>
            <h1 className="dark fs-70 fw-600 mb-37"> $29.99</h1>
            <p className="fs-24 fw-700 accent-secondary tracking-tighter lh-43 w-100">
              30% Discount - Limited Time!
            </p>
          </article>
        </div>
      </div>

      <div className="get-now-action stack mt-32">
        <FadeIn isAnimationRevealed={isAnimationRevealed} delay={1}>
          <div className="get-now-inner-action max-width-mobile-xs">
            <button ref={btnRef} className="btn mb-16">
              <p>Get your Doctors Note Now</p>
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
            <ul className="lead">
              <li>
                <Img
                  src="/assets/safeguard-icon.svg"
                  width={32}
                  height={33}
                  alt="guarantee"
                />
                <span className="dark accent-primary">
                  {" "}
                  100% Risk-Free Money Back Guarantee
                </span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Cta;
