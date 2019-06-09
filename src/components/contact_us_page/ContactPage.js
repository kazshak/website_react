import React from 'react';
import InfoSection from '../common/InfoSection';
import LeftSideBar from '../common/SideBar';

const ContactPage = (props) => {
    let contents = 
        <div className="container-fluid">
            <h2>Contact Us</h2>
            <form className="pl-4">
                <div className="form-group row">
                    <label for="firstName" className="col-form-label">First Name: </label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter first name"></input>
                </div>
                <div className="form-group row">
                    <label for="lastName" className="col-form-label">Last Name: </label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter last name"></input>
                </div>
                <div className="form-group row">
                    <label for="phoneNumber" className="col-form-label">Phone Number: </label>
                    <input type="text" className="form-control" id="phoneNumber" placeholder="(615) 555-1212"></input>
                </div>
                <div className="form-group row">
                    <label for="email" className="col-form-label">Email Address: </label>
                    <input type="email" className="form-control" id="firstName" placeholder="abc@gmail.com"></input>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2"></legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="type1" value="buying"></input>
                                <label className="form-check-label" for="type1">Buying A House</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="type2" value="selling"></input>
                                <label className="form-check-label" for="type2">Selling A House</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="type3" value="both"></input>
                                <label className="form-check-label" for="type1">Both</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group">
                    <label for="howHelp">Please Tell Me How I Can Help You:</label>
                    <textarea className="form-control" id="howHelp" rows="3"></textarea>
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
