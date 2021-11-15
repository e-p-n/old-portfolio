import React from 'react'

export default function Resume() {
    return (
        <section className="mt-5">
            <h1>
                Resume
            </h1>
            <p><a href="/links/resume.pdf" className="btn btn-info rounded-pill"> Download my <i class="fas fa-file"></i> resume</a></p>

            <h2>
                Proficiencies
            </h2>
            <h3>
                Front End
            </h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h3>
                Back End
            </h3>
            <ul>
                <li>APIs</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>Bootstrap</li>
            </ul>
        </section>


    )
}
