import React from 'react';
import InfoCard from './InfoCard';
import zillowlogo from './zillowlogo.png';
import realtorlogo from './realtorcom_alt.jpg';
import trulialogo from './trulialogo.png';
import realtracslogo from './realtracs_logo.jpg';


const BodySection = (props) => {
    let fullService = {
        bullets: true,
        title: "No up-front fee",
        bulletText: ["1.5% of sales price at closing", "Comprehensive pricing analysis",
                        "Up to 30 color photos", "Listed in Featured Listings", "Lockbox provided", "iList Realty For Sale sign"],
        images: false,
        imageList: [{
            image: "",
            link: ""
        }],
        scrpt: "<div style='font-weight:normal;font-size:9px;font-family:Tahoma;padding:0;margin:0;border:0;background:transparent;color:#E5E5E5;width:300px;text-align:right;padding-right:10px;' id='mlcalcRatesWidgetHolderXX'><script type='text/javascript' src='https://www.mlcalc.com/mortgage-rates/widget-wide.js'></script>Powered by <a href='https://www.mlcalc.com/mortgage-rates/' style='color:#E5E5E5;text-decoration:none'>Mortgage Rates</a></div>"
    };

    let flatFee = {
        bullets: true,
        title: "$499 Up-Front Fee Only",
        bulletText: ["List your property for up to 6 months", "30 color photos (or max allowed by MLS)", "iList Realty For Sale sign",
                        "Realtor's lockbox"],
        images: false,
        imageList: [{
            image: "",
            link: ""
        }]
    };

    let everywhere = {
        bullets: false,
        title: "",
        bulletText: [],
        images: true,
        imageList: [
            {
                image: realtorlogo,
                link: "https://www.realtor.com"
            },
            {
                image: zillowlogo,
                link: "https://www.zillow.com/"
            },
            {
                image: trulialogo,
                link: "https://www.trulia.com"
            },
            {
                image: realtracslogo,
                link: ""
            }
    ]
    };

    let mortRates = {
        bullets: false,
        title: "",
        bulletText: [],
        images: false,
        imageList: [{
            image: "",
            link: ""
        }],
        scrpt: ""
    };

    return (
        <div className="col-lg-9 bg-white">
            <div className="row">
                <InfoCard header="FULL SERVICE LISTING" contents={fullService} />
                <InfoCard header="MLS FLAT FEE LISTING" contents={flatFee} />
            </div>
            <div className="row">
                <InfoCard header="OUR LISTINGS ARE EVERYWHERE" contents={everywhere} />
                <InfoCard header="CURRENT MORTGAGE RATE" contents={mortRates} />
            </div>
            <div className="col-xs-12 mt-4">
                <h1 align="center" style={{borderTopColor: "#D70023", borderTopStyle: "inset"}}>Welcome To 
                    <span style={{color: "#D70023"}}> iList Realty</span>
                </h1>
                <p align="center" style={{marginTop: "-15px", borderBottomColor: "#D70023", borderBottomStyle: "outset"}}>
                    615.969.4118, bshakir@ilistrealty.net
                </p>
                <p >We are an innovative real estate firm, offering a full  range of services priced to meet your needs. We are located in Nashville,  Tennessee and cover all of the surrounding areas of Hendersonville, Gallatin,  Belle Meade, Bellevue, Green Hills, Forrest Hills, Brentwood, Franklin.  We offer a Flat Fee MLS listing service, and  additionally offer full service listing options at half the cost of traditional  agents.</p>
                <p >Our approach to selling your home will allow you all of the  benefits and convenience of working with a real estate agent, while offering  you the low cost of a For Sale By Owner.   We strongly believe that the real estate industry is undergoing a  dramatic change.  Buyers have access to tremendous amounts of  information via the internet that allows them to quickly decide which homes  they are most interested in seeing.  The  role of the Realtor has changed from being a real estate consultant to the  homebuyer or seller, to more of a transaction facilitator, who helps make sure  each party is able to complete the transaction smoothly.</p>
                <p >The are many advantages of using the iList Realty Flat Fee  MLS listing service:</p>
                <ul >
                    <li >
                        <p>A licensed broker will list your home in the Middle Tennessee Multiple Listing Service (MLS, RealTracs)</p>
                    </li>
                    <li >
                        <p>This is the same MLS that is available to all Realtors seeking homes for buyers</p>
                    </li>
                    <li >
                        <p>Additionally, your home listing will appear across the internet on sites such as       <a href="https://www.zillow.com/" target="_blank">Zillow.com</a>, <a href="https://www.trulia.com" target="_blank">Trulia.com</a>, <a href="https://www.realtor.com/" target="_blank">Realtor.Com</a>, <a href="searchframeset.html">RealTracs.Com</a>, and more</p>
                    </li>
                    <li >
                        <p><a href="https://www.realtor.com/realestateandhomes-detail/9003-Karen-Ct_Brentwood_TN_37027_M72074-79072" target="_blank">Click here to see a sample of an iList listing on Realtor.Com </a></p>
                    </li>
                    <li >
                        <p>You pay a Flat Fee for listing your home with us.  You save thousands of dollars in listing commissions</p>
                    </li>
                    <li >
                        <p>You offer a “Buyers Agent Commission” (you choose the amount, usually between 2 and 3%), that will only be payable if an agent brings you a buyer who purchases your home</p>
                    </li>
                    <li >
                        <p>You retain the right to sell your home yourself and avoid the Buyers Agent Commission, entirely, if there is no Buyer's Agent involved.</p>
                    </li>
                    <li >
                        <p>iList can provide you, upon your request, with high impact marketing suggestions and advice on the best listing price to achieve your goal</p>
                    </li>
                    <li >
                        <p>With our full service option, we will also provide a website for your property to enhance the marketing of your home</p>
                    </li>
                    <li >
                        <p><a href="960lakeviewcourt/main.html" target="_blank">Click here to see a sample of a property website we provide</a> </p>
                    </li>
                    <li >
                        <p>There are no hidden charges, and we won’t try to sell you anything.  We are focused on providing you a simple, convenient and inexpensive means to market your home to the       largest number of buyers possible, and get it sold in the lest amount of time!</p>
                    </li>
                </ul>
                <p >Led by Brenda Shakir's vision to provide Nashville and  Middle Tennessee residents greater control over the process of buying and  selling their home, we have developed pricing options with different levels  of broker interaction.  We are dedicated  to Nashville, Brentwood, Franklin and the Middle Tennessee region.   Nashville is one of the fastest growing cities, and the  local real estate market continues to experience substantial activity.  Major corporations find the benefits  of doing business and living in Middle Tennessee and Nashville very attractive.  We agree, and are very excited about the  opportunity to provide our clients with the best home selling experience  possible.</p>
                <p align="left" >&nbsp;</p>
                <p align="center"><a href="PricingOptions.html"><img src="images/pricingbutton_up.gif" alt="Nashville Real Estate Flat Fee" name="PricingButton" width="100" height="40" border="0" class="text" id="PricingButton" /></a></p>
                <span><p><img src="counter2042006211922/counter.php?var=803679037" border="0" alt="" /></p>
                    <p>&nbsp;</p>
                </span>
            </div>
        </div>
    );
};

export default BodySection;