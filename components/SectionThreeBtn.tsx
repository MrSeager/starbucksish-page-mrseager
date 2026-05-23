//Icons
import { IoStarSharp } from "react-icons/io5";

interface SectionThreeBtnProps{
    option: number;
    setOption: (option: number) => void;
    numb: number;
}

export default function SectionThreeBtn({ option, setOption, numb }: SectionThreeBtnProps) {
    return(     
        <button
            type="button"
            onClick={() => setOption(numb)}
            className={`cursor-pointer flex gap-0 md:gap-1 text-[18px] md:text-[23px] font-semibold border-b border-b-3 py-3 px-2 md:px-10
                        duration-300 hover:text-[#008248]
                        ${option === numb ? "border-[#008248]" : "border-transparent"}`}
        >
            {numb}<IoStarSharp size={15} className="mt-1.5 md:mt-2.5 text-[#cfab65]" />
        </button>
    );
}