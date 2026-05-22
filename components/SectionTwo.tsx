//Components
import Link from "next/link";
import SectionTwoItem from "./SectionTwoItem";

export default function SectionTwo() {
    return(
        <div className="flex flex-col items-center text-center gap-5
                        text-[#1e3932]
                        py-15">
            <h2 className="text-[30px] font-semibold">Getting started is easy</h2>
            <p>Earn Stars and get rewarded in a few easy steps.</p>
            <div className="grid md:grid-cols-3 gap-5 lg:gap-15 px-5 lg:px-25">
                <SectionTwoItem 
                    numb={1}
                    head={"Create an account"}
                    par={<p>
                            To get started, 
                            <Link 
                                href={'/'} 
                                className="text-[#008248] underline ms-1 duration-300 hover:text-[#d4e9e2]"
                            >
                                join now
                            </Link>. You can also 
                            <Link 
                                href={'/'} 
                                className="text-[#008248] underline text-nowrap mx-1 duration-300 hover:text-[#d4e9e2]"
                            >
                                join in the app
                            </Link> to get access to the full range of Starbucks Rewards benefits.
                        </p>}
                />
                <SectionTwoItem 
                    numb={2}
                    head={"Order and pay how you'd like"}
                    par={<p>
                            Use cash, credit/debit card or save some time
                            and pay right through the app. You&apos;ll collect Stars
                            all ways. 
                            <Link 
                                href={'/'} 
                                className="text-[#008248] underline ms-1 duration-300 hover:text-[#d4e9e2]"
                            >
                                Learn how
                            </Link>
                        </p>}
                />
                <SectionTwoItem 
                    numb={3}
                    head={"Earn Stars, get Rewards"}
                    par={<p>
                            As you earn Stars, you can redeem them for
                            Rewards - like free food, drinks, and more. Start
                            redeeming with as little as 25 Stars!
                        </p>}
                />
            </div>
        </div>
    );
}