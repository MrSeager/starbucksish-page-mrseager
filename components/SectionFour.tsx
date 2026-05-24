//Components
import SectionFourItem from "./SectionFourItem";

export default function SectionFour() {
    return(
        <div className="w-full flex flex-col text-center items-center gap-5 py-15 px-5">
            <h4 className="text-[30px] font-semibold">Endless Extras</h4>
            <p>
                Join Starbuks Rewards means unlocking access to exclusive benefits. Say hello to<br className="hidden md:block" />
                easy ordering, tasty Rewards and - yes, free coffee.
            </p>
            <div className="grid md:grid-cols-3 gap-5 lg:gap-15 lg:w-[85%] mt-5">
                <SectionFourItem 
                    img="ff.png"
                    textH="Fun freebies"
                    textP="Not only van you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
                />
                <SectionFourItem 
                    img="or.png"
                    textH="Order & pay ahead"
                    textP="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
                />
                <SectionFourItem 
                    img="gff.png"
                    textH="Get to free faster"
                    textP="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
                />
            </div>
        </div>
    );
}