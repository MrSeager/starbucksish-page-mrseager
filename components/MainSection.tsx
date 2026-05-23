//Components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function MainSection() {
    return(
      <main className="max-w-[120rem] w-full shadow-lg flex flex-col text-[#1e3932]">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    );
} 