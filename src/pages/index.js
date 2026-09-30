import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './home.css';

function Feature({title, text, to}) {
  return (
    <Link className="hex-card" to={to}>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>Read documentation →</span>
    </Link>
  );
}

export default function Home() {
  const logo = useBaseUrl('/img/hexmovr-logo.png');
  return (
    <Layout title="HEXMovr OpenArm" description="HEXMovr motor-adapted OpenArm documentation">
      <main>
        <section className="hero-hex">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">HEXMovr × OpenArm</div>
              <h1>OpenArm<br />with HEXMovr Motors</h1>
              <p className="hero-sub">
                An independent OpenArm-compatible platform adapted for HEXMovr actuators,
                with documentation for hardware, CAN, ROS 2 and simulation.
              </p>
              <div className="hero-actions">
                <Link className="button button--primary" to="/docs/getting-started/installation">Get Started</Link>
                <Link className="button button--secondary" to="/docs/overview/project">Explore the docs</Link>
              </div>
            </div>
            <div className="hero-mark">
              <img src={logo} alt="HEXMovr" />
              <div className="hero-caption">MOTOR ADAPTATION / OPEN ROBOTICS</div>
            </div>
          </div>
        </section>

        <section className="spec-strip">
          <div><strong>7 DOF</strong><span>robotic arm</span></div>
          <div><strong>CAN</strong><span>actuator communication</span></div>
          <div><strong>ROS 2</strong><span>robot integration</span></div>
          <div><strong>URDF / MuJoCo</strong><span>simulation</span></div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div className="eyebrow">DOCUMENTATION</div>
            <h2>Hardware, software and integration documentation in one place.</h2>
          </div>
          <div className="card-grid">
            <Feature title="Overview" text="Architecture, versions, upstream relationship and project scope." to="/docs/overview/project" />
            <Feature title="Hardware" text="HEXMovr motor adaptation, electrical interfaces, mechanics and end-effector integration." to="/docs/hardware/general" />
            <Feature title="CAN API" text="Low-level motor communication, protocol mapping and programming interfaces." to="/docs/api-reference/can-api" />
            <Feature title="ROS 2" text="Controllers, launch configuration and integration with the robot description." to="/docs/ros2/overview" />
            <Feature title="Simulation" text="URDF, MuJoCo and Isaac Lab integration points." to="/docs/simulation/overview" />
            <Feature title="Tutorials" text="From the first CAN frame to joint calibration and trajectory control." to="/docs/tutorial/motor-test" />
          </div>
        </section>

        <section className="architecture-section">
          <div>
            <div className="eyebrow">SYSTEM ARCHITECTURE</div>
            <h2>Mechanical compatibility above, motor adaptation below.</h2>
            <p>
              The documentation separates the OpenArm-compatible robot model from the
              HEXMovr-specific motor, CAN and control layers. This keeps the upstream
              relationship explicit while making the adapted implementation easier to maintain.
            </p>
          </div>
          <div className="stack">
            <div>OPENARM-COMPATIBLE ROBOT MODEL</div>
            <div>HEXMovr MOTOR ADAPTER</div>
            <div>CAN / LOW-LEVEL CONTROL</div>
            <div>ROS 2 / SIMULATION / APPLICATION</div>
          </div>
        </section>

        <section className="notice-section">
          <strong>Project status</strong>
          <p>
            This site documents an independent HEXMovr adaptation. It is not the official
            OpenArm website and does not imply endorsement by Enactic, Inc.
          </p>
        </section>
      </main>
    </Layout>
  );
}
