import React from 'react';


function About() {
    return (
        <section className="mt-5">
            <div className="row">
                <h1 id="about">About me</h1>
            </div>
            <div className="row">

            <div className="col about-img pl-0">
                <img src="https://e-p-n.github.io/portfolio-1/assets/images/eric.jpg" alt=""></img>

            </div>

            <div className="col-8">

                <p>I have been a graphic designer for more than twenty years, working in both print and web. My experience with web design ignited my interest in programming, which led me to teaching myself the basics of HTML, CSS, JavaScript and even a little bit about some more advanced scripting languages like PHP and the now outdated ColdFusion. I recently decided to take my interest in programming more seriously and have enrolled in the Full Stack Web Development Bootcamp at U of T.</p>    

                <p>My wife Tina and I could not be prouder of our son Aleks, who is finishing his last year of high school and was recently accepted to the Film Production program at York University. He has turned me into a camera operator, sound man, craft services manager and even an occasional actor for his short films.</p>

                <p>We also have two dogs, Pixel and Pudding who are always there to brighten our day.</p>
            </div>

            </div>
        </section>
    );
}

export default About;