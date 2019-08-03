import React from 'react';
import InfoSection from '../common/InfoSection';
import LeftSideBar from '../common/SideBar';

const PrepareToSellPage = (props) => {
    let contents = 
        <div className="container-fluid">
            <h2>How Can You Sell Your House Quickly And For The Best Price?</h2>
            <h3>1. Improve Curb Appeal </h3>
            <p>At the very least, buyers visiting your home will expect a decent paint job. If the body of your house is in good shape, 
                you may just need to touch up the trim. This work will make your house stand out. A gallon of paint and a paint brush 
                don't cost much, but they can really make a difference. Exterior paint isn't just for show. A quality paint job provides 
                an important layer of protection against moisture, mildew, and the effects of the sun. </p>
            <p>Further, keep your yard tidy--it's one of the first things potential buyers see before entering your home. If your lawn 
                is in pretty good shape, there's no need to hire a landscaper. The National Association Of Realtors recommends that you 
                spend no more than 1 or 2 percent of your home's value on sprucing up landscaping before you sell. We recommend spreading 
                mulch on beds around trees, mowing grass, and trimming shrubs and walkways. And if the season is right for blooms, place 
                flowerpots around the entry and on the patio. </p>
            <h3>2. Clear The Clutter </h3>
            <p>Too much stuff makes rooms look smaller and less appealing. Keep tables and countertops clean and clear, and remove extra 
                furniture. But don't relocate your possessions to a garage, attic, or basement. All you're doing then is cluttering another 
                space and turning off potential buyers. If you plan to hold on to "Granny Imo's" armchair and your collection of coffee mugs, 
                consider renting a storage space. A 10' x 10' storage space ranges from about $40 to several hundred dollars a month, 
                depending on the region.</p>
            <h3>3. Make It Homey And Inviting</h3>
            <p>Set the stage for comfortable living. A bright, tidy home will sell a lot faster than a dingy one, Hang your guest towels 
                in the bathroom, set your dinner table with your best china, and place fresh flowers in an attractive vase. Appeal to the 
                potential buyer's sense of smell as well. Clean carpets and drapes. Empty the trash and freshen cat-litter boxes.</p>
            <h3>4. Don't Over-Decorate </h3>
            <p>Gold-plated faucets or a bathroom tiled in puce won't add to the value of your home. If your interior features splashy 
                colors, or paint appears dirty or worn, repaint with neutral colors that won't feel dated. Further, simple white or beige 
                walls provide potential homeowners with a clean slate on which they can envision their own personal touches.</p>
            <h3>5. Fit-In With The Neighborhood</h3>
            <p>Before you make changes to your home, take a hard look at houses in your neighborhood. You'll get the biggest bang for your 
                buck by keeping up with the Joneses, not by going them one better. If most houses have three baths and yours has only one 
                and a half, adding a new bathroom will boost the value of your home. The same goes for bedrooms.</p>
            <p>Elaborate and expensive window treatments featuring this season's favorite colors and tones may appear out of date next year. 
                Kitchen appliances can also go out of style--remember avocado and burnt orange refrigerators of the 1970s? Stick with the 
                basics and avoid being too trendy.</p>
            <h3>6. Price To Sell</h3>
            <p>Research prices on comparable properties in your market. Scour newspaper and Web listings, attend open houses, and, most 
                importantly, consult your real-estate broker for <a href="RequestCMA.html">sales information on comparable properties</a>.</p>
        </div>;

    return (
        <div className="container-fluid row p-0 m-0">
            <LeftSideBar logo={props.logo} />
            <InfoSection text={contents} />
           
        </div>
    );
};

export default PrepareToSellPage;
