import React from 'react';
import InfoSection from '../common/InfoSection';
import LeftSideBar from '../common/SideBar';

const AboutPage = (props) => {
    let contents = 
        <div className="container-fluid">
            <h2>About</h2>
            <p>The are many advantages of using the iList Realty Flat Fee  MLS listing service:</p>
            <ul type="disc">
                <li>
                <p>A licensed broker will list your home in the Middle Tennessee Multiple Listing Service (MLS)</p>
                </li>
                <li>
                <p>This is the same MLS that is available to all Realtors seeking homes for buyers</p>
                </li>
                <li>
                <p>Additionally, your home listing will appear across the internet on sites such as Yahoo.com, AOL, Realtor.Com,
                    RealTracs.Com, and more</p>
                </li>
                <li>
                <p>You pay a Flat Fee for listing your home with us.  You save thousands of dollars in listing commissions</p>
                </li>
                <li>
                <p>You offer a “Buyers Agent Commission” (you choose the amount, usually between 2 and 3%), that will only be 
                    payable if an agent brings you a buyer who purchases your home</p>
                </li>
                <li>
                <p>You retain the right to sell your home yourself and avoid the Buyers Agent Commission, entirely, if you find the buyer yourself</p>
                </li>
                <li>
                <p>iList can provide you, upon your request, with high impact marketing suggestions and advice on the best listing 
                    price to achieve your goal</p>
                </li>
                <li>
                <p>There are no hidden charges, and we won’t try to sell you anything.  We are focused on providing you a simple, 
                    convenient and inexpensive means to market your home to the largest number of buyers possible!</p>
                </li>
            </ul>
            <p>Led by Brenda Shakir's vision to provide Nashville and Middle Tennessee residents greater control over the process 
                of buying and selling their home, we have developed three pricing options with varying levels of broker interaction.  
                We are dedicated  to Nashville and the Middle Tennessee region.  Nashville is one of the fastest growing cities in this 
                area, and the local real estate market continues to experience substantial activity.  Major corporations are finding 
                the benefits of doing business and living in Middle Tennessee and Nashville very attractive.  We agree, and are very 
                excited about the  opportunity to provide our customers with the best home selling experience possible.</p>
        </div>;

    return (
        <div className="container-fluid row p-0 m-0">
            <LeftSideBar logo={props.logo} />
            <InfoSection text={contents} />
           
        </div>
    );
};

export default AboutPage;
