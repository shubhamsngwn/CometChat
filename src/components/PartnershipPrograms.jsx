import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaTools, FaRocket } from "react-icons/fa";

export default function PartnershipPrograms() {
  return (
    <section className="left-0 w-full bg-white px-6 md:px-20 py-20 text-black">
      {/* Section Header */}
      <div className="text-left mb-16">
        <p className="text-purple-600 font-semibold text-lg mb-2">
          Our Programs
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Types of partnerships <br className="hidden md:block" />
          programs
        </h2>
      </div>
      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-30 gap-x-30">
        {/* Card 1 */}
        <div className="flex flex-col gap-4 items-start border border-black rounded-xl p-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-semibold text-xl">Affiliate partner program</h3>
          <p className="text-gray-700 text-base leading-relaxed text-left">
            Bring value to your customers with a world-class in-app messaging
            tool that increases user-to-user engagement and retention. Get
            incentivized for referring CometChat to any of your customers.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 items-start border border-black rounded-xl p-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl text-left">
            <FaTools />
          </div>
          <h3 className="font-semibold text-xl">Technology partner program</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Development teams can use our plug and play solution to build top
            class chat solutions for their clients using our SDKs and APIs. It's
            simple, safe and secure!
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 items-start border border-black rounded-xl p-4">
          <div className="w-12 h-12 flex items-center justify-center text-left rounded-full bg-purple-100 text-purple-600 text-xl">
            <FaRocket />
          </div>
          <h3 className="font-semibold text-xl">Start up growth program</h3>
          <p className="text-gray-700 text-left text-base leading-relaxed">
            We help incubators, accelerators, and co-working spaces foster an
            ecosystem of start-ups. This program also enables VCs to accelerate
            the growth of their portfolio companies.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-25">
          <p className="text-orange-500 text-xl text-center">FAQ's</p>
          <p className="text-6xl text-center">
            We want to help you <br />
            with all your doubts
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <Accordion
            flush
            className="mt-5 flex justify-center align-center flex-col"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                This is a frequently asked question?
              </Accordion.Header>
              <Accordion.Body className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate ducimus voluptate adipisci mollitia minima soluta
                numquam corporis vitae nisi perspiciatis.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                This is a frequently asked question?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                nulla eum, assumenda corporis enim aliquam quisquam recusandae
                ipsa sit ab.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                This is a very long frequently asked question about our services
                with more than one line?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis cum id sequi similique nulla dolorem.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                This is a frequently asked question?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                sit suscipit fugiat ullam perferendis aperiam laudantium omnis
                qui cupiditate autem dignissimos laboriosam consequuntur,
                repudiandae reprehenderit!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>This is a question?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                omnis!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>This is a question?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
                eligendi minus nemo sapiente mollitia nobis dolorum repudiandae
                sed perspiciatis vel?
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
