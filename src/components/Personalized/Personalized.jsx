import React from 'react';
import './Personalized.css';
import { personalizedData } from '../../dummydata';


const Personalized = () => {
  const data = personalizedData; 
  return (
    
    <div className="main-frame-p">
      <div className="content-container-p">
        <div className="title-frame-p">
          <b className="title-style-p">{data.title}</b>
        </div>
        <div className="content-container2-p">
          <div className="overview-our-private-container-p">
            <p className="overview-p">Overview</p>
            <br/>
            <p className="our-private-tutoring-course-is1-p">
              <span className="our-private-tutoring2-p">{data.overview.description}</span>
            </p>
            <br/>
            <p className="overview-p">Course Features</p>
            <br/>
            {data.overview.features.map((feature, index) => (
              <p key={index} className="our-private-tutoring-course-is-p">
                <span className="span9-p">{feature.title}</span>
                <span className="our-private-tutoring2-p">{feature.description}</span>
              </p>
            ))}
            <p className="blank-line8-p">Subjects Offered</p>
            <ol>
              {data.subjectsOffered.map((subject, index) => (
                <li key={index} className="our-private-tutoring-course-is2-p">
                  {subject}
                </li>
              ))}
            </ol>
            <br/>
            <p className="overview-p">Enrollment Process</p>
            <br/>
            {data.enrollmentProcess.map((step, index) => (
              <p key={index} className="our-private-tutoring-course-is-p">
                <span className="span9-p">{step.title}</span>
                <span className="our-private-tutoring2-p">{step.description}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="rightrectangle-p">
        <div className="rightrectangle-content-p">
          <button className="button-Enroll-p">
            <b>Enroll Now</b>
          </button>
          <div class="content-of-card-p">
          <img className="knowledge-sharing-icon2-p"alt=""src="/images/knowledge-sharing@2x.png"/>
          <div className="instructional-paradigm2-p">Mode : Online and Offline</div>
          <img className="time-icon2-p" alt="" src="/images/time@2x.png" />
          <div className="duration-102-p">Duration : 10 months</div>
          <img className="exchange-rupee-icon2-p" alt=""src="/images/exchange-rupee@2x.png"/>
          <div className="pricing-dynamic2-p">Pricing : Dynamic Pricing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalized;