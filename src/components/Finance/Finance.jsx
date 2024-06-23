import React from 'react';
import './Finance.css';
import { FinanceData } from '../../dummydata';
const Finance = () => {
  const data = FinanceData; 
  return (
    
    <div className="main-frame-f">
      <div className="content-container-f">
        <div className="title-frame-f">
          <b className="title-style-f">{data.title}</b>
        </div>
        <div className="content-container2-f">
          <div className="overview-our-private-container-f">
            <p className="overview-f">Overview</p>
            <br/>
            <p className="our-private-tutoring-course-is1-f">
              <span className="our-private-tutoring2-f">{data.overview.description}</span>
            </p>
            <br/>
            <p className="overview-f">Course Features</p>
            <br/>
            {data.overview.features.map((feature, index) => (
              <p key={index} className="our-private-tutoring-course-is-f">
                <span className="span9-f">{feature.title}</span>
                <span className="our-private-tutoring2-f">{feature.description}</span>
              </p>
            ))}
            <br/>
            <p className="overview-f">Benefits of Admission Guidance</p>
            <br/>
            {data.BenefitsofAdmissionGuidance.map((step, index) => (
              <p key={index} className="our-private-tutoring-course-is-f">
                <span className="span9-f">{step.title}</span>
                <span className="our-private-tutoring2-f">{step.description}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="rightrectangle-f">
        <div className="rightrectangle-content-f">
          <button className="button-Enroll-f">
            <b>Enroll Now</b>
          </button>
          <div class="content-of-card-f">
          <img className="knowledge-sharing-icon2-f"alt=""src="/images/knowledge-sharing@2x.png"/>
          <div className="instructional-paradigm2-f">Mode : Online</div>
          <img className="time-icon2-f" alt="" src="/images/time@2x.png" />
          <div className="duration-102-f">Duration :  Through Admission Cycle</div>
          <img className="exchange-rupee-icon2-f" alt=""src="/images/exchange-rupee@2x.png"/>
          <div className="pricing-dynamic2-f">Pricing : 2000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;