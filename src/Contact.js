import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="contact-section">
                <h3>Keep in touch!</h3>
                <p>Phone number: 0990 987 678</p>
                <p>Our mail: seoninja@ninja.com</p>
                <form>
                    <label>
                        <input type="text" value="Name"/>
                        <input type="text" value="Surname"/>
                        <input type="text" value="Company name"/>
                        <input type="text" value="Phone number"/>
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
            </div>
        )
    }
}

export default Contact; 