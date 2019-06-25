import React, { useState } from 'react';
import InfoSection from '../common/InfoSection';
import LeftSideBar from '../common/SideBar';

const ContactPage = (props) => {

    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        let temp = formValues;
        temp[event.target.id] = event.target.value;
        let message = 'Hello Brenda, My name is ' + temp.firstName + ' ' + temp.lastName + '.  ';
        message = message + 'I am interested in learning more about how you can help me with my real estate needs.  ';
        let type = '';
        if (temp.type === 'both') {
            type = 'sell my current house, and purchase another home.  ';
        } else if (temp.type === 'selling') {
            type = 'sell my current house.  ';
        } else {type = 'buy a home.  '};
        message = message + 'I need to ' + type + 'My phone number is ' + temp.phoneNumber + ', ';
        message = message + 'and my email address is ' + temp.email + '.  ' + temp.howHelp + '  '
        message = message + 'I look forward to hearing from you.';
        temp['message'] = message;
        setFormValues(temp);
        console.log(temp);
    };

    const handleSubmit = (event) => {
        
        window.open('mailto:bshakir@ilistrealty.net?subject=Need_Your_Help&body=' + formValues.message);
        // alert('Submit pressed.  ' + message);
        const sendMessage = async () => {
            const response = await fetch('sendmail.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow',
                referrer: 'no-referrer',
                body: JSON.stringify(formValues)
            });
            const values = await response.json();
            console.log(values);
        };

        sendMessage();
        event.preventDefault();
    };

    let contents = 
        <div className="container-fluid">
            <h2>Contact Us</h2>
            <form className="pl-4" onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label className="col-form-label">First Name: </label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter first name"
                            onChange={handleChange}></input>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Last Name: </label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter last name"
                            onChange={handleChange}></input>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Phone Number: </label>
                    <input type="text" className="form-control" id="phoneNumber" placeholder="(615) 555-1212"
                            onChange={handleChange}></input>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Email Address: </label>
                    <input type="email" className="form-control" id="email" placeholder="abc@gmail.com"
                            onChange={handleChange}></input>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2"></legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="type" value="buying"
                                        onChange={handleChange}></input>
                                <label className="form-check-label" >Buying A House</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="type" value="selling"
                                        onChange={handleChange}></input>
                                <label className="form-check-label" >Selling A House</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="type" value="both"
                                        onChange={handleChange}></input>
                                <label className="form-check-label" >Both</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group">
                    <label >Please Tell Me How I Can Help You:</label>
                    <textarea className="form-control" id="howHelp" rows="3"
                                onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Send Message</button>
            </form>
        </div>;

    return (
        <div className="container-fluid row p-0 m-0">
            <LeftSideBar logo={props.logo} />
            <InfoSection text={contents} />
           
        </div>
    );
};

export default ContactPage;
