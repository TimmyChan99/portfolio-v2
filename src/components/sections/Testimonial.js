import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'About Me',
    paragraph: "I'm a full-stack web developer and React and Rails enthusiast with a love for clean code and accessible design. Pair-programming and remote work aficionado. Fluent in multiple languages, frameworks, and technologies, and capable of ramping up quickly and efficiently."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="card-container">
                  <h4> { `< Languages /> ` }</h4>
                 
                 <ul className='skils-list'>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/js.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>JavaScript</small>
                   </li>
                   <li className="skill-container">
                        <Image
                         src={require('./../../assets/images/ruby.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>Ruby</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/html.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>HTML</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/css.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>CSS</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/sql.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>SQL</small>
                   </li>
                 </ul>
                
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <div className="card-container">
                  <h4>{`< Frameworks & Libraries />`}</h4>
                
                 <ul className='skils-list'>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/react.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>React</small>
                   </li>
                   <li className="skill-container">
                        <Image
                         src={require('./../../assets/images/rails.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>Rails</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/redux.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>Redux</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/jest.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>Jest</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/swagger.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>Swagger</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/capybara.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>Capybara</small>
                   </li>
                 </ul>
                
                </div>
                  
                
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <div className="card-container">
                  <h4>{`< Tools & Skills />`}</h4>
                
                 <ul className='skils-list'>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/github.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>GitHub</small>
                   </li>
                   <li className="skill-container">
                        <Image
                         src={require('./../../assets/images/git.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>Git</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/postgresql.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>PostgreSQL</small>
                   </li>
                   <li className="skill-container">
                       <Image
                         src={require('./../../assets/images/sass.svg')}
                         alt="Features tile icon 01"
                         width={64}
                         height={64} />
                       <small>Sass</small>
                   </li>
                 </ul>
                
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
