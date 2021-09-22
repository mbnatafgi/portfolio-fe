import React from "react";
import "./experience.css";
import { ReactComponent as ADJUST } from './adjust.svg';
import { ReactComponent as CGC } from './cgc.svg';
import { ReactComponent as SAUGO } from './saugo.svg';
import { ReactComponent as MUREX } from './murex.svg';
import { ReactComponent as AUB } from './aub.svg';
import { ReactComponent as GRAD } from './grad.svg';
import {context} from "../common/context";

const Date = props => {
  return (
    <svg viewBox="0 40 302.608 116.849">
      <path
        d="M-119.94,0-104.7,25.436l-42.961,4.489,42.961,4.489L-119.94,59.849-92.223,38.9l27.717,20.947L-79.751,34.413l234.7-4.489-234.7-4.489L-64.506,0-92.223,20.947Z"
        transform="translate(147.657 57)"
      />
      <text transform="translate(105.314 74)">
        <tspan x="0" y="0">
          {props.date}
        </tspan>
      </text>
    </svg>
  );
};

const Description = props => {

  let bs_classes = "col col-sm-3 col-4"

  return (
    <div className="description">
      <h3 className="title">{props.title_first}</h3>
      <div className="position row">
        <div className={bs_classes}>
          <h4>Position</h4>
        </div>
        <div className="col">
          <p>{props.title_second}</p>
        </div>
      </div>
      <div className="task row">
        <div className={bs_classes}>
          <h4>{props.task_first}</h4>
        </div>
        <div className="col">
          <p>{props.task_second}</p>
        </div>
      </div>
      <div className="stack row">
        <div className={bs_classes}>
          <h4>{props.stack_first}</h4>
        </div>
        <div className="col">
          <p>{props.stack_second}</p>
        </div>
      </div>
    </div>
  );
};

const Job = props => {
  return (
    <div className="job row">
      <div className="date col col-lg-3 col-md-4 col-sm-6 col-8">
        <Date date={props.date} />
        {props.grad}
      </div>
      <div className="info col offset-xl-1 col-xl-8 col-lg-9 col-md-8 col-12">
        <div className="logo">
          {props.logo}
        </div>
        <Description
          title_first={props.title_first}
          title_second={props.title_second}
          task_first={props.task_first}
          task_second={props.task_second}
          stack_first={props.stack_first}
          stack_second={props.stack_second}
        />
      </div>
    </div>
  )
}

const Experience = props => {

  let jobs = [
    {
      date:"Present",
      title_first:"Adjust GmbH",
      title_second:"Backend Developer",
      task_first:"Project",
      task_second:"Adjust Automate Ad Spend - Control Center Networks Service",
      stack_first:"Stack",
      stack_second:"Python - asyncio - RQ/Kafka - PostgresQL - Redis - Ansible - Github Actions",
      logo:<ADJUST />
    },
    {
      date:"2020",
      title_first:"CloudGate Consulting",
      title_second:"Backend Team Lead",
      task_first:"Project",
      task_second:"Network Configuration Manager",
      stack_first:"Stack",
      stack_second:"Python - Bash - MongoDB - OpenAPI - Docker - Kubernetes",
      logo:<CGC />
    },
    {
      date:"2019",
      title_first:"Saugo 360",
      title_second:"Backend Developer",
      task_first:"Project",
      task_second:"Fellow Tenant",
      stack_first:"Stack",
      stack_second:"Python - Django/DRF - PostgresQL - OpenAPI - MongoDB - Redis - Celery  - Docker - PayFort",
      logo:<SAUGO />
    },
    {
      date:"2018",
      title_first:"Murex Systems",
      title_second:"Software Engineering Intern",
      task_first:"Research",
      task_second:"Cloud Services / AWS",
      stack_first:"Services",
      stack_second:"EC2 - Lambda - S3 - EKS - EMR - etc.",
      logo:<MUREX/>,
      grad: <GRAD/>
    },
    {
      date:"2017",
      title_first:"American University of Beirut",
      title_second:"Work-Study-Program Associate",
      task_first:"Project",
      task_second:"Email Templates - Full-Stack",
      stack_first:"Stack",
      stack_second:"C# - .NET MVC & Entity Framework - MS SQL Server - Team Foundation Server - HTML - CSS - JavaScript",
      logo:<AUB/>
    }
  ]

  return (
    <context.Consumer>
      {(context) => (
        <React.Fragment>
          <div id="experience" className={`experience-main ${context.state.dark ? 'dark' : ''}`}>
            <div className="header light section">
              <h2>Where & What Have I Worked On?</h2>
            </div>
            <br />
            <div className="timeline container">
              {
              jobs.map(job =>
                <div key={job.date} className="entry">
                  <Job {...job}/>
                </div>
              )}
            </div>
          </div>
          <div className="grad-line"></div>
        </React.Fragment>
      )}
    </context.Consumer>
  );
};

export default Experience;
