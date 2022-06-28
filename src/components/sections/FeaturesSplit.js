import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'My works',
    paragraph: '_____________________'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  React • Redux • JavaScript • CSS • Jest
                  </div>
                <h3 className="mt-0 mb-12">
                COVID-19 Tracker
                  </h3>
                <p className="m-0">
                Covid-19 Tracker is a mobile web application that provides the user the new cases of Covid-19 for each country and also the regions within the country by getting all the data and the statistics from Narrativa.
                  </p>
                  <br />
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="https://timmychan99.github.io/covid19-tracker/">
                        Live version
                      </Button>
                      <Button tag="a" color="dark" wideMobile href="https://github.com/TimmyChan99/covid19-tracker">
                        Source Github
                      </Button>
                    </ButtonGroup>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/covid19-2.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Ruby on Rails • React • Redux • JavaScript • Ruby
                  </div>
                <h3 className="mt-0 mb-12">
                Car rental app
                  </h3>
                <p className="m-0">
                This webapp is allows users to get list of cars, cars details, reserve a car and check their reservations list. If the user is the admin that give them the authorization to delete from or add a new car to the list of car. Users need to sign up or sign in to access the API endponits. They can sign up or sign in using the API endpoints.
               </p>
               <br />
               <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button tag="a" color="primary" wideMobile href="https://car-renta.herokuapp.com/">
                      Live version
                    </Button>
                    <Button tag="a" color="dark" wideMobile href="https://github.com/TimmyChan99/Car-rental-app-back-end">
                      Source Github
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/cars.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Ruby on Rails • Ruby • Sass • HTML • RSpec
                </div>
                <h3 className="mt-0 mb-12">
                  myBudget
                  </h3>
                <p className="m-0">
                myBudget is a mobile web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what.
                </p>
                <br />
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" color="primary" wideMobile href="https://mybudget-railsapp.herokuapp.com/">
                        Live version
                      </Button>
                      <Button tag="a" color="dark" wideMobile href="https://github.com/TimmyChan99/Budget-app/">
                        Source Github
                      </Button>
                    </ButtonGroup>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/budget.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
