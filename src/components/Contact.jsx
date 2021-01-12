import React from 'react'

export default function Contact() {
    return (
        <section id="three">
            <h2>Get In Touch</h2>
            <p>Please reach out to me for any work related to Web & Mobile Development.</p>
            <div className="row">
                {/* <div className="col-8 col-12-small">
                    <form method="post" action="#">
                        <div className="row gtr-uniform gtr-50">
                            <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                            <div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                            <div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                        </div>
                    </form>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li>
                    </ul>
                </div> */}
                <div className="col-8 col-12-small">
                    <ul className="labeled-icons">
                        <li>
                            <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
										E-8/18, Sahakar Nagar,
										Trilanga, Bhopal, M.P.<br />
										India, 462039
									</li>
                        <li>
                            <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
										+91-810-950-1628
									</li>
                        <li>
                            <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                            <a href="#">ayush.gupta.1197@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
