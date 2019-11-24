import React, { Component, PropTypes } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from 'reactstrap';
import SocialIcons from './SocialIcons';
class SocialCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      cardTitle,
      cardSubtitle,
      cardText,
      cardText2,
      cardText3,
      cardLink,
      cardLinkLabel,
    } = this.props;
    return (
      <Card className="socialCard">
        <CardHeader>
          <CardTitle>[social]</CardTitle>
          <CardSubtitle>
            use the icons below to check out my social media profiles!
          </CardSubtitle>
          <hr />
        </CardHeader>
        <CardBody className="socialBody">
          <SocialIcons />
        </CardBody>
      </Card>
    );
  }
}
export default SocialCard;
