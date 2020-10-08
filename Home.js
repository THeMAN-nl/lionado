import React from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";
function Home() {
    return (
        <div className="App">
      

      <section className="hero ">
        <section className="white-text archivo-black align-text flex-row">
         <Link to="/"> <h4>Lionado</h4></Link>
          <div className="flex-row header-pages">
            <h4>Service</h4>
            <h4>About</h4>
          </div>
        </section>

        <div className="align-text hero-text" >
          <h4 className=" roboto light-grey no-margin">  Web Design Company</h4> 
          <h1 className=" white-text archivo-black no-margin">Bring your dream business to life</h1>
          <p className="roboto light-grey "> Results based designs</p>

        </div>

        <div className="call-to-action ">
        <input className=" white-text archivo-black button yellow-bg" type="button" value="Book free consultation"/> 
        </div>
      </section>
      
      <section className="section-spacing column">
        
        <div className="money-tree"> </div>

        <div className=" align-text column-text">
          <div>
            <h6 className="roboto light-grey no-margin"> How websites make money</h6>
            
          </div>
          <h3 className="archivo-black ">Put your website to work</h3>
          <h6 className="roboto light-grey ">Still doubting if your business will make you enough money?
          Dont worry a website can build multiple income streams. Here are just some ideas </h6>
          <ul className="roboto light-grey ">
            <li>Advertisement</li>
            <li>Convert visitors into clients</li>
            <li>Donations/sponors</li>
            <li>Sell goods</li>
            <li>Paywall</li>
          </ul>

        </div>
      </section>

      <section className="section-spacing align-text">
        <h6 className="centerd roboto big-text light-grey no-margin">Why is having a website important? </h6>
        <h1 className="centerd big-text archivo-black no-margin">No website means losing business</h1>

       <div className="cards" >

          <div className="card">
            <div className="world-svg no-margin" ></div>
            <h1 className="archivo-black no-margin">Worldwide reach</h1>
            <p></p>
          </div>

          <div className=" card">
            <div className=" people-svg no-margin" ></div>
            <h1 className="archivo-blackno-margin"> It Shows Your Professionalisml</h1>
            <p></p>
          </div>
        </div>

        {/* <div className="cards second-row" >
          <div className="no-margin yellow-bg card ">
            <h1 className="no-margin biggest-text white-text">Don't dream your life, live your dream</h1>
            <p></p>
          </div>

          <div className="yellow-bg card">
            <h1 className="no-margin biggest-text white-text">You don't have to be great to start, but you have to start to be great</h1>
            <p></p>
          </div>
        </div> */}

      </section>

      <section className="section-spacing column">
        
        <div className="m-a"> </div>

        <div className=" align-text column-text">
          <div>
            <h6 className="roboto light-grey no-margin"> why hire a web designer?</h6>
            
          </div>
          <h3 className="archivo-black ">Hi I'm Mark-Anthony</h3>
          <h6 className="roboto light-grey ">I'm here to help make your dream businesss a reality, so that you can truly live the life you always wanted. I can help you if: </h6>
          <ul className="roboto light-grey ">
            <li>You're not sure how to improve your website</li><br/>
            <li>You tried building your website by yourself but felt overwhelmd</li><br/>
            <li>You have no time to mantain an website</li><br/>
            
          </ul>
          
            <input className=" white-text archivo-black button yellow-bg" type="button" value="Book free consultation"/> 
          
        </div>
      </section>


      <section className="section-spacing align-text">
        <h6 className="centerd roboto big-text light-grey no-margin"> Packaging and what it includes</h6>
        <h1 className="centerd big-text archivo-black no-margin">Services</h1>

       <div className="cards" >

          <div className="grey-bg white-text card">
          <div className="price no-margin" >€200</div>
            <h1 className="archivo-black no-margin">3 Weeks Web Design sprint </h1>
            <ul className="roboto  ">
              <li>Fast new web design  </li><br/>
              <li>Streamlined process</li><br/>
              <li>Strong online appearance </li><br/>
              <li>Free up 10+ hours per week </li><br/>
              <li>Goal focused design</li><br/>
              
            </ul>
          </div>

          <div className="yellow-bg white-text card">
            <div className="price no-margin" >€50<span className="per-month">p/m</span></div>
            <h1 className="archivo-black no-margin">Continuously Website Mantenaince</h1>
            <ul className="roboto ">
              <li>collecting new data  </li><br/>
              <li>Free up 10+ hours per week</li><br/>
              <li>Refine website design based of new data </li><br/>
              <li>Keep the website up to date</li><br/>
              <li>Never outdated website</li><br/>
              <li>No big stressful overhauls</li><br/>
          </ul>
            
          </div>
        </div>

      </section>


      <section className=" section-spacing lion-focus-text centerd " >
        <h1 className="archivo big-text ">Lion focus philosophy</h1>
        <h6 className=" align-text roboto big-text light-grey ">All choices are made with your goal in mind. A lion on the hunt does not get distracted, because it is focused on 1 target. To increase chances of success, lions in a group all hunt with focus on the same target. Just like the group of lions, I make all design elements work together. This ensures that your goal is realized.</h6>
      </section>

      
      Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
    )
}

export default Home
