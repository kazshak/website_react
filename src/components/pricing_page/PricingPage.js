import React from "react";
import InfoSection from "../common/InfoSection";
import LeftSideBar from "../common/SideBar";

const PricingPage = props => {
  let contents = (
    <div className="container-fluid">
      <h2>Services</h2>
      <h3>Pricing Options</h3>
      <h3>
        <span style={{ color: "red" }}>Option 1:</span> $499 Up-front Listing Fee
      </h3>
      <ul>
        <ul>
          <li>List your property for up to 6 months</li>
          <li>Your listing will appear on:</li>
          <ul>
            <li>RealTracs Multiple Listing Service for Realtors</li>
            <li>
              <a href="searchframeset.html">RealTracs MLS for Buyers</a>
            </li>
            <li>
              <a href="http://www.realtor.com" target="_blank" rel="noopener noreferrer">
                Realtor.com
              </a>
            </li>
            <li>
              <a
                href="http://www.homefinder.com/tennessean/tenness/index_map.jhtml"
                target="_blank" rel="noopener noreferrer"
              >
                Tennessean.com
              </a>
            </li>
          </ul>
          <li>2 color photos on MLS/Realtor.com</li>
          <li>iList Realty FOR SALE sign</li>
          <li>Option to lease lock box</li>
          <li>
            <a href="http://homes.realtor.com/prop/1087191269" target="_blank" rel="noopener noreferrer">
              Click here to see a sample iList listing on Realtor.com
            </a>
          </li>
        </ul>
      </ul>
      <p>
        If you accept an offer from a buyer without an agent, you do not pay
        buyers agent commission. You Only pay the $499 flat fee
      </p>
      <h3>
        <span style={{ color: "red" }}>Option 2:</span> $499 Up-front Fee + 1%
        of sales price at closing
      </h3>
      <ul>
        <ul>
          <li>List your property until it sells.</li>
          <li>Your listing will appear on: </li>
          <ul>
            <li>RealTracs MLS for REALTORS</li>
            <li>
              <a href="searchframeset.html">RealTracs MLS for Buyers</a>
            </li>
            <li>
              <a href="http://www.realtor.com/" target="_blank" rel="noopener noreferrer">
                Realtor.com
              </a>
            </li>
            <li>
              <a
                href="http://www.homefinder.com/tennessean/tenness/index_map.jhtml"
                target="_blank" rel="noopener noreferrer"
              >
                Tennessean.com
              </a>{" "}
              and others
            </li>
          </ul>
          <li>Comparative Market Analysis</li>
          <li>6 color photos on MLS/Realtor.com</li>
          <li>
            <a href="960Lakeview_Flyer.pdf">
              Flyer for you to print out (see example){" "}
            </a>
          </li>
          <li>Lock box</li>
          <li>iList Realty FOR SALE Sign</li>
          <li>Provide Disclosure and Contract Forms</li>
          <li>
            <a href="http://homes.realtor.com/prop/1087191269" target="_blank" rel="noopener noreferrer">
              Click here to see a sample iList listing on Realtor.com
            </a>
          </li>
        </ul>
      </ul>
      <h3>
        <span style={{ color: "red" }}>Option 3:</span>  No Up-front Fee. 1 ½%
        of sales price at closing
      </h3>
      <ul>
        <ul>
          <li>List your property for 90 days or more </li>
          <li>Your listing will appear on :</li>
          <ul>
            <li>RealTracs for REALTORS</li>
            <li>
              <a href="searchframeset.html">RealTracs for Buyers</a>
            </li>
            <li>
              <a href="http://www.realtor.com/" target="_blank" rel="noopener noreferrer">
                Realtor.com
              </a>
            </li>
            <li>
              <a
                href="http://www.homefinder.com/tennessean/tenness/index_map.jhtml"
                target="_blank" rel="noopener noreferrer"
              >
                Tennessean.com
              </a>{" "}
              and others
            </li>
          </ul>
          <li>Comparative Market Analysis</li>
          <li>10 color photos on MLS/ 6 on Realtor.com</li>
          <li>
            <a href="960Lakeview_Flyer.pdf">
              Flyer for you to print out (see example)
            </a>{" "}
          </li>
          <li>Flyer box</li>
          <li>Free lock box</li>
          <li>iList Realty FOR SALE Sign</li>
          <li>Provide disclosure forms</li>
          <li>Negotiate Contracts</li>
          <li>
            <a href="http://homes.realtor.com/prop/1087191269" target="_blank" rel="noopener noreferrer">
              Click here to see a sample iList listing on Realtor.com
            </a>
          </li>
        </ul>
      </ul>
      <p>
        Listing commission must be paid regardless of where buyer comes from. 
        Option 3 is an Exclusive Right To Sell Agreement.
      </p>
      <p>
        If you sell your property or contract to lease-option to any person that
        has been introduced directly or indirectly by a licensed broker or agent
        within 180 days after the mutual release from this agreement you will
        have to pay full commission
      </p>
    </div>
  );

  return (
    <div className="container-fluid row p-0 m-0">
      <LeftSideBar logo={props.logo} />
      <InfoSection text={contents} />
    </div>
  );
};

export default PricingPage;
