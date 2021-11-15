import React from 'react';
import Project from '../Project';
import Design from '../Design';


function Portfolio() {
    return (
        <section className="mt-5">
            <h1>Portfolio</h1>
            <h2>Developer Projects</h2>
            <Project />
            <h2>Graphic Design Projects</h2>
            <Design />
        </section>
    );
}
export default Portfolio;