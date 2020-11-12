import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="contact-section">
                <h2>{this.props.tittle}</h2>
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