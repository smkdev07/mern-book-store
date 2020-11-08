import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import { Nav } from 'react-bootstrap';

export interface Step {
  name: string;
  path: string;
  isActive: boolean;
}

export interface StepsProps {
  steps: Step[];
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <Nav className="justify-content-center mb-4">
      {steps.map((step) =>
        step.isActive ? (
          <Nav.Item key={step.name}>
            <LinkContainer to={step.path}>
              <Nav.Link>{step.name}</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        ) : (
          <Nav.Item key={step.name}>
            <Nav.Link disabled>{step.name}</Nav.Link>
          </Nav.Item>
        )
      )}
    </Nav>
  );
};

export default Steps;
