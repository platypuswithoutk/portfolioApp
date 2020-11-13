import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="contact-section">
                <h2>Get in touch</h2>
                <div className="contact-wrapper">
                <div className="form">
                    <form>
                        <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        <label for="company">Company name</label>
                            <input type="text" id="company" placeholder="Company name..."/>
                        <label for="phone">Phone number</label>
                            <input type="text" value="Phone number"/>
                        <input type="submit" value="Send email"/>
                        </form>
                    </div>
                    <div className="company-details">
                        <h3>Ninja World SEO/SEM Agency</h3>
                        <div class="phone">
                            <i class="fas fa-phone"></i>
                            <p>+ 0990 987 678</p>
                        </div>
                        <div class="mail">
                            <i class="fas fa-at"></i>
                            <p>seoninja@ninja.com</p>
                        </div>
                        <div class="bussiness">
                            <i class="far fa-calendar-alt"></i>
                            <p>Business hour:</p>
                        </div>
                        <div id="day">
                            <p>Monday-Friday: 09:00 – 21:00</p>
                            <p>Saturday & Sunday: As Per Requirement</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact; 