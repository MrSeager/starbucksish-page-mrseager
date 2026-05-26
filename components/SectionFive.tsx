//Components
import Link from "next/link";
import SectionFiveItem from "./SectionFiveItem";
//Icons
import { IoStarSharp } from "react-icons/io5";

export default function SectionFive() {
    return(
        <div className="bg-[#f3f1e7] flex flex-col items-center py-15 px-5 md:px-15">
            <h5 className="text-[30px] font-semibold text-center">Cash or card, you earn Stars</h5>
            <p className="text-center my-5">
                No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up <br className="hidden md:block" />
                to (really delicious) Rewards.
            </p>
            <div className="flex flex-col gap-3 md:grid grid-cols-3 w-full py-15 border-b border-b-black/25">
                <div className="flex flex-col">
                    <h5 className="flex text-[25px] lg:text-[30px] font-semibold">1<IoStarSharp size={20} className="me-2 mt-2.5 lg:mt-3.5" /> per dollar </h5>
                    <p>Pay as you go</p>
                </div>
                <SectionFiveItem 
                    img="1.png"
                    textH="Scan and pay separatly"
                    textP={<p>
                        Use cash or credit/debit card at the 
                        register.
                    </p>}
                    classN={'h-full w-auto'}
                />
                <SectionFiveItem 
                    img="2.png"
                    textH="Save paymemt in the app"
                    textP={<p>
                        Check-out faster by saving a 
                        credit/debit card or PayPal to your 
                        account. You&apos;ll be able to order 
                        ahead or scan and pay at the
                        register
                    </p>}
                    classN={'h-full w-auto'}
                />
            </div>
            <div className="flex flex-col gap-3 md:grid grid-cols-3 w-full py-15 border-b border-b-black/25">
                <div className="flex flex-col">
                    <h5 className="flex text-[25px] lg:text-[30px] font-semibold">2<IoStarSharp size={20} className="me-2 mt-2.5 lg:mt-3.5" /> per dollar </h5>
                    <p>Add funds in the app</p>
                </div>
                <SectionFiveItem 
                    img="3.png"
                    textH="Preload"
                    textP={<p>
                        To save time and earn Stars twice
                        as fast, add money to your digital
                        Starbucks Card using any payment
                        option. Scan and pay in one step or
                        prder ahead in the app.
                    </p>}
                    classN={'h-auto w-full'}
                />
                <SectionFiveItem 
                    img="4.png"
                    textH="Register your gift card"
                    textP={<p>
                        Then use it to pay through the app.
                        You can even consolidate balances
                        from multiole cards in one place.
                    </p>}
                    classN={'h-auto w-full'}
                />
            </div>
            <div className="flex flex-col gap-3 md:grid grid-cols-3 w-full pt-15">
                <div className="flex flex-col">
                    <h5 className="flex text-[25px] lg:text-[30px] font-semibold">Up to 3<IoStarSharp size={20} className="me-2 mt-2.5 lg:mt-3.5" /> per dollar </h5>
                    <p>
                        With Starbucks Rewards
                        Visa Card
                    </p>
                </div>
                <SectionFiveItem 
                    img="5.png"
                    textH="Earn Stars even faster"
                    textP={<p>
                        Earn Stars on all purchases you
                        make with our <Link href={'/'} className="text-[#008248] ms-1 duration-300 hover:text-[#d4e9e2]"><span className="underline">credit card</span> &#x0010;</Link> in and
                        outside of Starbucks. Earn 1 Star per
                        $1 when you digitally preload your 
                        Starbucks Card with your Starbucks
                        Rewards Visa Card, and earn 2
                        Stars per $1 when you pay with that preloaded Starbucks Card.
                    </p>}
                    classN={'h-auto w-full'}
                />
            </div>
        </div>
    );
}