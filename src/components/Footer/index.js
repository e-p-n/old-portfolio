import React from 'react';


function Footer() {
    return (
        <footer className="footer bg-secondary text-center text-dark fixed-bottom">
            <div className="container p-3 pb-0">
                <section>
                    {/* <!-- Linkedin --> */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/eric-normann-b8a4991b2/" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-linkedin-in"></i
                    ></a>

                    {/* <!-- Github --> */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://github.com/e-p-n" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-github"></i
                    ></a>
                    {/* Facebook  */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://www.facebook.com/eric.normann" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-facebook-f"></i
                    ></a>

                    {/* Twitter */}
                    <a className="btn btn-outline-dark btn-floating m-1" href="https://twitter.com/Eric_Gobsmact" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-twitter"></i
                    ></a>
                </section>
            </div>

            <div className="bg-primary p-2 text-light">
                &copy; 2021 Copyright: Eric Normann
            </div>

        </footer>
    );
}

export default Footer;