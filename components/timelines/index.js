import React from "react";
import Timeline from "./timeline";

function Timelines() {
  return (
    <section className="section-timelines">
      <div className="xl:container xl:mx-auto section-timelines-container">
        <h2>Work experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
          <Timeline
            duration="2021 &#8212; Present(2 years)"
            title="Full-stack Developer"
            company="WHITESOFT"
          >
            <ul>
              <li>
                &#x2022; Created site layout and user interface using REACTJS
                and Material UI practices.
              </li>
              <li>
                &#x2022; Built and styled 3+ new mobile-friendly websites and
                transitioned the old site into a mobile-friendly version0
              </li>
              <li>
                &#x2022; Developed code fixes and enhancements for inclusion in
                future code releases and patches.
              </li>
            </ul>
          </Timeline>

          <Timeline
            duration="Apr 2020 &#8212; Dec 2020"
            title="Full-stack Developer"
            company="AIA"
          >
            <ul>
              <li>
                &#x2022; Analyzed requirements and designed, developed, and
                implemented software applications for multiple websites.
              </li>
              <li>
                &#x2022; Evaluated potential software products based on new and
                existing system development and migration requirements.
              </li>
              <li>
                &#x2022; Provided continued maintenance and development of bug
                fixes and patch sets for existing web applications
              </li>
            </ul>
          </Timeline>

          <Timeline
            duration="Mar 2019 &#8212; 2020 (1year)"
            title="Web Developer"
            company="UPWORK"
          >
            <ul>
              <li>
                &#x2022; Translate requirements into complicated but clean and
                efficient code.
              </li>
              <li>&#x2022; Develop schedules and determine milestones.</li>
              <li>
                &#x2022; Polish the game, maintain code, fix bugs, and iron out
                occurring problems.
              </li>
            </ul>
          </Timeline>
        </div>
      </div>
    </section>
  );
}

export default Timelines;
