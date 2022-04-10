//import './AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Very important for Styling
import Menu from './NavBar';

function AboutMe() {
  return (
    <html>
      <body>
         <Menu />
         <div className="about">
           <div className="msg">
             <h1>A life of a programmer</h1>
             <p>Before I talk about me, I want to talk about this app.</p>
             <p>The app was build with <b>express</b> as a backend and <b>react</b> front.</p>
             <p>App is also web mobile friendly!</p>
             <p>All routes were created and files fetch as required by the app.</p>
           </div>

           <div className="msg">
             <h2>Me</h2>
             <p>Just a programmer trying to work in <b>Full stack.</b></p>
             <p>I have always loved to see what I built.</p>
             <p><b>Skills</b>: React, Java, Express, embedded, C++</p>
           </div>
         </div>
      </body>
  </html>
  );
}

export default AboutMe;
