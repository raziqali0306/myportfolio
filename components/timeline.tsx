import Quote from "./quote";
import { MdExpandLess, MdWorkOutline } from 'react-icons/md'
import { HiOutlineCake } from 'react-icons/hi';
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";

const quote = "The way we spend our Time, Defines who we are.";

type IconType = 'school' | 'graduation' | 'born' | 'work';

interface Entry {
    date: string,
    description: string,
    type: IconType,
}

function Timeline() {

    const Content: Array<Entry> = [
        { date: 'September 1 2023', description: 'Promoted at Inncircles (Product Developer)', type: 'work' },
        { date: '2023', description: 'Post Graduation (CSE)', type: 'graduation' },
        { date: 'March 8 2023', description: 'Joined Inncircles (Developer Intern)', type: 'work' },
        { date: 'November 14 2022', description: 'Joined Apxor Technology and Solutions (ASDE Intern)', type: 'work' },
        { date: 'June 3 2022', description: 'Joined Ezlens Eyewear Pvt.Ltd (Developer Intern)', type: 'work' },
        { date: 'May 31 2019', description: 'Graduated Higher Secondary', type: 'school' },
        { date: 'March 31 2017', description: 'Graduated High School', type: 'school' },
        { date: 'June 3 2002', description: 'Born', type: 'born' },
    ]

    const hScroll = (val: number) => {
        const timelineContent = document.getElementById("timeline-content");
        if (timelineContent !== null) {
            timelineContent.scrollLeft += val;
        }
    };

    return (
        <>
            <div className="pt-28 w-10/12 md:w-9/12 mx-auto ">
                <Quote quote={quote} />
                <p className="tracking-wide font-bold opacity-60 w-fit mx-auto text-4xl mb-20">Timeline</p>
                <div className="inline-flex w-full lg:px-20">
                    <div className="-rotate-90 shrink-0 mt-3 w-fit h-full cursor-pointer" onClick={() => {
                        hScroll(-200);
                    }}>
                        <MdExpandLess className="h-8 w-8" />
                    </div>
                    <div className="snap-x snap-mandatory inline-flex overflow-scroll w-full -mx-1" id="timeline-content">
                        {
                            Content.map((item, index) => (
                                <div className="snap-start h-96 w-1/2 sm:w-1/3 md:w-1/4 shrink-0 relative hover:text-2xl hover:tracking-wide" key={index}>
                                    <div className="bg-gray-700 h-0.5 absolute top-6 mt-1 -translate-y-1/2 w-full"></div>
                                    <div className="absolute left-1/2 -translate-x-1/2 top-3 text-white bg-gray-700 h-8 w-8 rounded-full overflow-hidden">
                                        {
                                            item.type === 'born' ?
                                                <HiOutlineCake className="h-8 w-8 p-2" />
                                                : item.type === 'school' ?
                                                    <FaSchool className="h-8 w-8 p-2" />
                                                    : item.type === 'graduation' ?
                                                        <FaGraduationCap className="h-8 w-8 p-2" />
                                                        : item.type === 'work' ?
                                                            <GiSuitcase className="h-8 w-8 p-2" />
                                                            : null

                                        }
                                    </div>
                                    <div className={"absolute top-11 w-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-gray-700 to-white " + (!(index & 1) ? ' h-12 ' : ' h-28 ')}></div>
                                    <div className={"absolute w-full text-center top-24 " + (!(index & 1) ? ' top-24 ' : ' top-40 ')}>
                                        <p className="text-xl font-medium transition-all duration-500">{item.date}</p>
                                        <p className="text-lg font-light tracking-normal hover:tracking-normal ">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="rotate-90 shrink-0 mt-3 w-fit h-full cursor-pointer" onClick={() => {
                        hScroll(200);
                    }}>
                        <MdExpandLess className="h-8 w-8" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline;
