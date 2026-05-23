'use client';
//Components
import { useState } from "react";
import SectionThreeBtn from "./SectionThreeBtn";
import SectionThreeItem from "./SectionThreeItem";

export default function SectionThree() {
    const [option, setOption] = useState<number>(25);

    return(
        <div className="flex flex-col items-center pt-10 bg-[#f1f8f6]">
            <h3 className="text-[30px] font-semibold mb-5">Get your favorites for free</h3>
            <div className="shadow-lg flex justify-center gap-5 w-full">
                <SectionThreeBtn 
                    option={option}
                    setOption={setOption}
                    numb={25}
                />
                <SectionThreeBtn 
                    option={option}
                    setOption={setOption}
                    numb={50}
                />
                <SectionThreeBtn 
                    option={option}
                    setOption={setOption}
                    numb={150}
                />
                <SectionThreeBtn 
                    option={option}
                    setOption={setOption}
                    numb={200}
                />
                <SectionThreeBtn 
                    option={option}
                    setOption={setOption}
                    numb={400}
                />
            </div>
            <div className="h-[20rem] md:h-[17rem] flex items-center justify-center bg-[#d4e9e2] w-full">
                <SectionThreeItem 
                    option={option} 
                    numb={25}
                    text={'$1 off a drink customization, including an espresso shot, syrup or cold foam.'}
                />
                <SectionThreeItem 
                    option={option} 
                    numb={50}
                    text={'New! Up to $2 off your order'}
                />
                <SectionThreeItem 
                    option={option} 
                    numb={150}
                    text={'Brewed coffee or tea (hot or iced), bakery item, packaged snacks and more. Up to $6 value.'}
                />
                <SectionThreeItem 
                    option={option} 
                    numb={200}
                    text={'Handcrafted drink (like a latte or cold brew) or hot breakfast. Up to $10 value.'}
                />
                <SectionThreeItem 
                    option={option} 
                    numb={400}
                    text={'Select Starbucks® merchandise. Up to $20 value.'}
                />
            </div>
        </div>
    );
}