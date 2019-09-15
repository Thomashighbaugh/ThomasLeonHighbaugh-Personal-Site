import React from 'react';
import Layout from '../components/Layout';
import Obfuscate from 'react-obfuscate';
import PageTransition from 'gatsby-plugin-page-transitions';
import SEO from '../components/SEO';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Resume extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="[resume]"
          description="created from the output of JSONresume into HTML adapted into JSX, this is the live resume of TLH"
        />
        <Card>
          <div id="resume">
            <h1 className="card-title">Thomas Leon Highbaugh</h1>
            <h2 className="card-title-description"> Web Developer &amp;&amp; Freelance IT Professional
            </h2>
            <div id="content" className="card-body offset-2">
            <Row className="row">
              <Col className="col" id="basics">
              <section id="basics">
              <div className="col-4">
                <h2 className="card-subtitle">Contact</h2>
              </div>
              <div className="contact">
                <strong>Website:</strong>
                <a href="http://thomasleonhighbaugh.me">
                  thomasleonhighbaugh.me
                </a>
              </div>
              <div className="contact">
                <strong>Email: </strong>
                <Obfuscate email="thighbaugh@zoho.com" />
              </div>
              <div className="contact">
                <strong>Phone: </strong>
                <Obfuscate tel="510-907-0654" />
              </div>
              <div className="profiles content-block">
                <h2 className="card-subtitle">
                  Internet Profiles
                </h2>
                <a
                  href="http://linkedin.com/in/thomas-leon-highbaugh"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Thomashighbaugh"
                >
                  GitHub
                </a>
                <a

                  href="https://dribbble.com/thighbaugh"
                >
                  Dribbble
                </a>
                <a href="https://gitlab.com/thighbaugh">
                  GitLab
                </a>
                <a
                  href="https://instagram.com/tlh-resurgens"
                >
                  Instagram
                </a>
                <a href="https://gitlab.com/thighbaugh">
                  Blog{' '}
                </a>
                <a href="https://gitlab.com/thighbaugh">
                  Gallery{' '}
                </a>
              </div>
            </section>
              </Col>
              <Col className="col" id="summary">
                <h3 className="card-subtitle">Summary</h3>
                <p>
                  A self-taught software developer with an eye for design
                  and a passion for Linux, looking for a team to cultivate skills while contributing to.
                </p>
              </Col>
            </Row>
              <Row className="row" id="work">
                <h2 className="card-subtitle">
                  Work
                </h2>
                <Col className="col">
                  <h3 className="work-name">Freelance</h3>

                  <div className="work-position">Web Developer</div>

                  <div className="work-date">
                    <span className="startDate">2018-03-15</span>
                    <span className="endDate">- present</span>
                  </div>
                  <ul className="highlights">
                    <li>
                      Designing and coding websites for customers from the
                      ground up
                    </li>
                    <li>
                      Developing customer relationships and responding to
                      customer inquiries
                    </li>
                    <li>
                      Keeping ahead of industry trends while continuing
                      education about web-related technologies
                    </li>
                    <li>
                      Vigilant market research and analysis of the
                      competition
                    </li>
                  </ul>
                  <div className="work-website">
                    <a
                      href="https://thomasleonhighbaugh.me"
                    >
                      https://thomasleonhighbaugh.me
                    </a>
                  </div>
                </Col>
                <Col className="col">
                  <h3 className="work-name">Freelance</h3>

                  <div className="work-position">
                    Computer Repair Technician
                  </div>

                  <div className="work-date">
                    <span className="startDate">2018-02-18</span>
                    <span className="endDate">- present</span>
                  </div>


                  <ul className="highlights">
                    <li>
                      Troubleshooting PCs that are not performing as
                      expected
                    </li>
                    <li>
                      Educating customers about routine PC maintanence and
                      security
                    </li>
                    <li>
                      Designing and implementing PC builds based on customer
                      budgets and desired use cases
                    </li>
                    <li>
                      Marketing and customer relationship development to
                      maintain stream of work
                    </li>
                    <li>
                      Learning and keeping tabs on personal and commercial
                      electronic markets
                    </li>
                    <li>
                      Market research to keep abilities in sync with
                      customer needs
                    </li>
                  </ul>
                  <div className="work-website">
                    <a
                      href="https://thomasleonhighbaugh.me"
                    >
                      https://thomasleonhighbaugh.me
                    </a>
                  </div>

                </Col>
                <Col className="col">
                  <h3 className="work-name">Pet Food Express: Blackhawk</h3>

                  <div className="work-position">Assistant Manager</div>

                  <div className="work-date">
                    <span className="startDate">2012-05-13</span>
                    <span className="endDate">- 2018-04-19</span>
                  </div>



                  <ul className="highlights">
                    <li>
                      Educating customers about holistic pet foods and how
                      to appropriately use them
                    </li>
                    <li>
                      Staff development and consultation to ensure corporate
                      standards are complied with
                    </li>
                    <li>
                      Setting mood of the staff and maintaining a
                      customer-first atmosphere
                    </li>
                    <li>
                      Assisting store manager in daily cash and store
                      operations
                    </li>
                    <li>Ensuring store is tidy and stocked at all times</li>
                    <li>
                      Managing customer comments and concerns with
                      sensitivity and promptness
                    </li>
                  </ul>
                  <div className="work-website">
                    <a
                      href="https://petfoodexpress.com"
                    >
                      https://petfoodexpress.com
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </Layout>
    );
  }
}

export default Resume;
