import React from 'react';
import './admission.css';
import { AdmissionData } from '../../dummydata';
const Admission = () => {
  const data = AdmissionData; 
  return (
    
    <div className="main-frame-a">
      <div className="content-container-a">
        <div className="title-frame-a">
          <b className="title-style-a">{data.title}</b>
        </div>
        <div className="content-container2-a">
          <div className="overview-our-private-container-a">
            <p className="overview-a">Overview</p>
            <br/>
            <p className="our-private-tutoring-course-is1-a">
              <span className="our-private-tutoring2-a">{data.overview.description}</span>
            </p>
            <br/>
            <p className="overview-a">Course Features</p>
            <br/>
            {data.overview.features.map((feature, index) => (
              <p key={index} className="our-private-tutoring-course-is-a">
                <span className="span9-a">{feature.title}</span>
                <span className="our-private-tutoring2-a">{feature.description}</span>
              </p>
            ))}
            <br/>
          </div>
        </div>
      </div>
      <div className="rightrectangle-a">
        <div className="rightrectangle-content-a">
          <button className="button-Enroll-a">
            <b>Enroll Now</b>
          </button>
          <div class="content-of-card-a">
          <img className="knowledge-sharing-icon2-a"alt=""src="/images/knowledge-sharing@2x.png"/>
          <div className="instructional-paradigm2-a">Mode : Online</div>
          <img className="time-icon2-a" alt="" src="/images/time@2x.png" />
          <div className="duration-102-a">Duration :  Through Admission Cycle</div>
          <img className="exchange-rupee-icon2-a" alt=""src="/images/exchange-rupee@2x.png"/>
          <div className="pricing-dynamic2-a">Pricing : 2000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;