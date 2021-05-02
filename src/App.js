import './App.css';
import React from 'react';
import { gsap, Power0 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  return (
    <div className="App h-100vh">
      <section className='h-80vh'>
        <div className="section1-wrapper trigger1">
          <h1 className='position-h1'>iPhone 12 Pro and iPhone 12 Pro Max</h1>
          <h2 className="position-h2">It’s a leap year.</h2> 
          <Controller>
            <Scene 
              triggerElement='.trigger1'
              triggerHook={0}
              duration="50%"
            >
              {(progress) => (
                <div className='trigger2'>
                  <Tween        
                    from={{ scale: 1, transformOrigin: 'center top' }}
                    to={{ scale: 1.5, ease: Power0.easeOut, transformOrigin: 'center top', transform: 'translateY(-140px)', opacity: 0 }}
                    stagger={0.15}
                    totalProgress={progress}
                    paused
                  >
                    <div className='hero-image-wrapper'>
                      <img className="hero-img" src="/images/hero.jpg" alt=""/> 
                    </div>
                  </Tween>
                </div>
              )}
            </Scene>
          </Controller>
        </div>
      </section>

      <section className='h-80vh'>
        <div className='section2-wrapper'>
          <div className='trigger3'>
            <Controller>
              <Scene
                triggerElement='.trigger4'
                triggerHook={1}
                duration="50%"
              >
                {(progress) => (
                  <Tween
                    to={{ scale: 1, opacity: 1}}
                    from={{ scale: 2, ease: Power0.easeOut, transformOrigin: 'center', opacity: 0}}
                    stagger={0.15}
                    totalProgress={progress}
                    paused
                  >
                    <div className='image-processor-wrapper '>
                      <img src='/images/apple.png' className='apple-logo' alt=''/>
                      <p className='apple-logo-text'>A14</p>
                    </div>
                  </Tween>
                )}
              </Scene>
            </Controller>
          </div>
          <div className='trigger4'>
            <Controller>
              <Scene
                triggerElement='.trigger4'
                triggerHook={0.7}
                duration="35%"
              >
                {(progress) => (
                  <Tween
                    to={{ opacity: 1, color: '#FFFF', marginTop: "50px"}}
                    from={{ ease: Power0.easeOut, transformOrigin: 'center', opacity: 0}}
                    stagger={0.5}
                    totalProgress={progress}
                    paused
                  >
                    <p>
                      5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.
                    </p>
                  </Tween>
                )}
              </Scene>
            </Controller>
          </div>
        </div>
      </section>

      <section className='h-80vh'>
        <div className="trigger5">
          <div className="iphone-image-wrapper">
            <Controller>
              <Scene 
                triggerElement='.trigger4'
                triggerHook={0}
                duration="35%"
              >
                {(progress) => (
                  <Tween        
                    from={{ x: '-500px', opacity: 0 }}
                    to={{ ease: Power0.easeIn, opacity: 1, x: '0', duration: 2 }}
                    stagger={4}
                    totalProgress={progress}
                    paused
                  >
                    <div className="iphone-text">
                      <p className="fw-bold">iPhone 12 Pro Max</p>
                      <p className="fw-bold text-muted">6.7” Super Retina</p>
                      <p className="fw-bold text-muted">XDR display <sup>2</sup></p>
                    </div>
                  </Tween>
                )}
              </Scene>
            </Controller>
            <Controller>
              <Scene 
                triggerElement='.trigger4'
                triggerHook={0}
                duration="35%"
              >
                {(progress) => (
                  <div className='trigger5'>
                    <Tween        
                      from={{ scale: 3, transformOrigin: 'center top', opacity: 0.2 }}
                      to={{ scale: 1, ease: Power0.easeOut, transformOrigin: 'center top', opacity: 1 }}
                      stagger={0.15}
                      totalProgress={progress}
                      paused
                    >
                      <div className="iphone-image iphone1">
                        <div className="inner-phone"> 
                          <video height="500px" className='video' autoPlay muted>
                            <source src="/images/video.mp4" type="video/mp4"/>
                          </video>
                        </div>
                      </div>              
                    </Tween>
                  </div>
                )}
              </Scene>
            </Controller>
            <Controller>
              <Scene 
                triggerElement='.trigger4'
                triggerHook={0}
                duration="35%"
              >
                {(progress) => (
                  <Tween        
                    from={{ x: '500px', opacity: 0 }}
                    to={{ ease: Power0.easeIn, opacity: 1, x: 0, duration: 2 }}
                    stagger={0.15}
                    totalProgress={progress}
                    paused
                  >
                    <div className="iphone-text">
                      <p className="fw-bold">iPhone 12 Pro</p>
                      <p className="fw-bold text-muted">6.1” Super Retina</p>
                      <p className="fw-bold text-muted">XDR display <sup>2</sup></p>
                    </div>
                  </Tween>
                )}
              </Scene>
            </Controller>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
