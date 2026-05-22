//Components
import { ReactNode } from "react";

interface SectionTwoItemProps {
    numb: number;
    head: string;
    par: ReactNode;
}

export default function SectionTwoItem({ numb, head, par }: SectionTwoItemProps) {
    return(
        <div className="flex flex-col items-center gap-4 group/itm">
            <span 
                className="relative border border-2 border-[#008248] rounded-full px-4 py-2 duration-300
                            text-xl font-semibold flex items-center justify-center
                            group-hover/itm:scale-110"
            >
                {numb}
                <span 
                    className="absolute bg-[#d4e9e2] w-0 h-0 -z-5 rounded-full
                                group-hover/itm:w-full group-hover/itm:h-full duration-300" 
                />
            </span>
            <h3 className="font-semibold text-lg">{head}</h3>
            {par}
        </div>
    );
}