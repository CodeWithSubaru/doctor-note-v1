"use client";
import React, { useEffect, useRef, useState } from "react";
import Img from "./img";
import RevealedUp from "./revealedUp";

function Footer() {
  const [isAnimationRevealed, setAnimationRevealed] = useState<boolean>(false);
  const footerRef = useRef<HTMLDivElement>(null);

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

    const footerElement = footerRef.current;
    if (footerElement) observer.observe(footerElement);

    return () => {
      if (footerElement) observer.unobserve(footerElement);
    };
  }, []);

  return (
    <>
      <div ref={footerRef} className="footer bt">
        <div className="footer-content stack stack-horizontal flex-1 max-width items-start gap-8">
          <RevealedUp delay={6} isAnimationRevealed={isAnimationRevealed}>
            <div className="stack links">
              <div className="link-title">
                <Img
                  src="/assets/footer-logo.webp"
                  alt="footer-logo"
                  width={165}
                />
              </div>
              <p>
                <strong> Support</strong> (Mon-Fri, 9am-6pm EST)
              </p>
              <p>
                <strong> Email: </strong> help@urgentsupport.co
              </p>
            </div>
          </RevealedUp>

          <RevealedUp delay={7} isAnimationRevealed={isAnimationRevealed}>
            <div className="stack links">
              <h4 className="link-title">Customer service</h4>
              <a href="">Contact Us</a>
              <a href="">Refund Requests</a>
              <a href="">Frequently Asked Questions</a>
            </div>
          </RevealedUp>

          <RevealedUp delay={8} isAnimationRevealed={isAnimationRevealed}>
            <div className="stack links">
              <h4 className="link-title"> Policies</h4>
              <a href=""> Terms Of Service</a>
              <a href=""> Refund Policy</a>
              <a href=""> Privacy Policy</a>
              <a href=""> Disclaimer Policy</a>
              <a href=""> Intellectual Property Policy</a>
              <a href=""> Jurisdiction Policy</a>
              <a href=""> Limitation of Liability Policy</a>
              <a href=""> Indemnification Policy</a>
            </div>
          </RevealedUp>

          <RevealedUp delay={9} isAnimationRevealed={isAnimationRevealed}>
            <div className="stack links">
              <h4 className="link-title"> Company Details</h4>
              <p> COMPANY NAME & ADDRESS</p>
              <p>
                Company registration <br />
                number: 000000
              </p>
            </div>
          </RevealedUp>
        </div>
      </div>

      <RevealedUp delay={9} isAnimationRevealed={isAnimationRevealed}>
        <div className="max-width stack items-center py-30 bt px-50">
          <small className="copyright">© 2025, My Doctors Note</small>
        </div>
      </RevealedUp>
    </>
  );
}

export default Footer;
