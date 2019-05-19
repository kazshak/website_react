import React from 'react';
import InfoSection from '../common/InfoSection';
import LeftSideBar from '../common/SideBar';

const HowToBuyPage = (props) => {
    let contents = 
        <div className="container-fluid">
            <h2>What Do I Need To Consider When Buying A House?</h2>
            <h3>1. Should We Buy Now Or Wait?</h3>
            <p>Despite years of dire warnings from some economists that the housing boom is about to end, it hasn’t. Actually, last year, 
                prices rose even more--about 11 percent nationally; even states that suffered the lowest growth in housing values, 
                including Indiana, Ohio, and Texas, saw increases of almost 4 percent. </p>
            <p>You can not time the real-estate market. If you need a house and can afford one, you should buy. You minimize the risk 
                of overpaying if you can commit to living in the same home for at least three to seven years. The longer you stay, the 
                greater the likelihood that you will recover from any market downturn. Try to keep your housing expenses, including principal, 
                interest, taxes, and insurance, to no more than 28 to 31 percent of your income. </p>
            <h3>2. What Is A Buyer's Agent?</h3>
            <p>90 percent of buyers use a real-estate agent during their search. Though agents may spend hours showing houses to buyers, 
                they collect a commission from the seller and must work on his or her behalf to get the highest sale price.  As a result,  
                buyers sometimes ask for a “buyer’s agent” who works exclusively for them, not sellers, helping to negotiate the house price, 
                the terms of the sale, and contract contingencies. The buyer’s agent may charge a percentage of the purchase price, a flat 
                fee, or an hourly rate. You may feel that you need a buyer’s agent to get you through the complicated home-buying process. 
                But you take a risk. If the seller refuses to pay the commission, you could be on the hook. When selecting a buyer's agent 
                or a real-estate agent, be sure to discuss all commission arrangements up-front, so that you don't have any surprises later.</p>
            <h3>3. Mortgage Broker Or Bank?</h3>
            <p>Mortgage brokers, middlemen who shop for home buyers among banks, now dominate the market. Because brokers can choose from 
                programs from many banks, they may be able to offer a variety of deals that are not available at your own bank: first-time-buyer 
                programs, for example; low- or no-down-payment loans for police, firefighters, or teachers; and low-cost mortgages for 
                energy-efficient homes.</p>
            <p>However, the bulk of a broker’s compensation comes from fees paid by the lender. Here’s a simplified example: Let’s say that 
                a lender offers a broker a 30-year, fixed-rate mortgage at a 5.625 percent annual interest rate and 1.5 points. For selling 
                the loan as is, the broker gets 0.5 point. The broker can pass along the deal to the borrower and collect his 0.5 percent, or 
                up the loan’s interest rate to 6 percent and get a yield-spread premium of 0.75 percent in return for getting the bank a 
                higher income stream. Generally, the consumer has no clue that the loan is costlier than it should be.</p>
            <p> If you think a mortgage broker can get you a better deal, you should first familiarize yourself with other offerings. You can 
                find them in newspapers and the internet. You should also make inquiries at banks in your community. Arm yourself with your 
                three credit reports and your credit scores when you ask about rates. That way, you’ll be able to tell if a rate you’re offered 
                is out of line. When shopping for a loan, standardize the comparison by using the same variables such as down payment, points, 
                and type of loan.</p>
            <h3>4. Get Pre-Qulified Or Pre-Approved</h3>
            <p>Any lender will be able to provide you with a pre-qualification letter after spending only a minimum amount of time with you. 
                A pre-approval, on the other hand, will require more information and evaluation on the part of the lender. Regardless of which 
                letter you attain, having either will make you appear better prepared to close on a house. Seller's often consider the quality 
                of the buyer when they decide to negotiate. If the seller does not think you are serious, they may choose to not spend much time 
                with you. A pre-qualification or pre-approval letter from a lender is a strong selling point for most sellers.</p>
        </div>;

    return (
        <div className="container-fluid row p-0 m-0">
            <LeftSideBar logo={props.logo} />
            <InfoSection text={contents} />
           
        </div>
    );
};

export default HowToBuyPage;
