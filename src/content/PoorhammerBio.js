import React from 'react';

import { Row, Col } from 'reactstrap';

const PoorHammerBio = () => {
  return (
    <Row className="pt-4">
      <Col md={8} sm={12}>
        <h4>
          <a href="https://poorhammer.com">Poorhammer</a>
        </h4>
        <p>
          The Poorhammer Podcast covers a variety of content for Warhammer games and the surrounding hobbies, covering a
          variety of content from in-game strategy to army building to collecting and painting new armies. Our goal is
          to help Warhammer be approachable and welcoming to all players and hobbyists.
        </p>
      </Col>
      <Col md={4} sm={12}>
        <a href="https://poorhammer.com">
          <img className="w-100" src="/content/poorhammer-thumbnail.png" alt="PoorHammer Logo" />
        </a>
      </Col>
    </Row>
  );
};

export default PoorHammerBio;
