import Quote from "./quote";

const quote = "Be yourself, everyone else is already taken.";

function About() {
    return (
        <>
            <div className="pt-28 w-10/12 md:w-9/12 mx-auto">
                <Quote quote={quote} />
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mt-20">
                    <div className="about-left">
                        <p className="capitalize pb-10 text-3xl tracking-wide">about me</p>
                        <p className="about-text pb-6">A <span className="about-span">Computer Science</span> aspirant pursuing B.Tech (currently in VIth year) from <span className="about-span">vignan<span>&#39;</span><span className="lowercase">s</span>  institute of information technology(VIIT)</span>. Currently working as a <span className="about-span">frontend developer intern</span> at <span className="about-span">ezlens eyewear private limited</span>.</p>
                        <p className="about-text pb-6">I spend most of my leisure time on competitive programming, DSA and participate in coding contests over platforms like codechef, codeforces. Developing applications is what i like the most for now. </p>
                        <p className="about-text pb-6">I have hands-on experience in working with several languages, using which i make my most of the projects, includes Typescript & JavaScript, Python. Most of my projects are build using MERN Stack (MongoDB, ExpressJS, ReactJS and NodeJS), `NextJS and TailwindCSS`(combo which, i use and like the most in place of React.) and couple of projects using  Django as well as React-Native </p>
                        <p className="about-text pb-6">Got an offer for me? Reach me at <span className="about-text font-medium">19l31a05d2@vignaniit.edu.in</span></p>
                    </div>
                    <div className="about-right ">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-lg mb-2 capitalize tracking-wide">primary skills</p>
                                <div className="gap-1 grid mb-2">
                                    <p>C++</p>
                                    <div className="h-1 bg-gray-200 rounded-full"><div className="w-4/5 bg-green-500 h-full rounded-full"></div></div>
                                </div>
                                <div className="gap-1 grid mb-2">
                                    <p>JavaScript (JS)</p>
                                    <div className="h-1 bg-gray-200 rounded-full"><div className="w-3/4 bg-blue-500 h-full rounded-full"></div></div>
                                </div>
                                <div className="gap-1 grid mb-2">
                                    <p>Python (Py)</p>
                                    <div className="h-1 bg-gray-200 rounded-full"><div className="w-8/12 bg-yellow-500 h-full rounded-full"></div></div>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg mb-2 capitalize tracking-wide ">skills</p>
                                <p className="about-text">Git & Github,</p>
                                <p className="about-text">ReactJS, NextJS, NodeJS,</p>
                                <p className="about-text">ExpressJS, MongoDB,</p>
                                <p className="about-text">Django, TailwindCSS.</p>

                            </div>
                            <div>
                                <p className="text-lg mb-2 capitalize tracking-wide">coding profiles</p>
                                <div className="grid mb-2">
                                    <p className="about-text text-base">Codechef</p>
                                    <a className="text-blue-400" href="https://codechef.com/users/raziqali0306" target='_blank' rel="noreferrer">/@raziqali0306</a>
                                </div>
                                <div className="grid mb-2">
                                    <p className="about-text text-base">Codeforces</p>
                                    <a className="text-blue-400" href="https://codeforces.com/profile/raziqali0306" target='_blank' rel="noreferrer">/@raziqali0306</a>
                                </div>

                            </div>
                            <div>
                                <p className="text-lg mb-2 capitalize tracking-wide">languages</p>
                                <div className="gap-1 grid mb-2">
                                    <p>English</p>
                                    <div className="h-1 bg-gray-200 rounded-full"><div className="w-4/5 bg-green-500 h-full rounded-full"></div></div>
                                </div>
                                <div className="gap-1 grid mb-2">
                                    <p>Hindi</p>
                                    <div className="h-1 bg-gray-200 rounded-full"><div className="w-5/6   bg-blue-500 h-full rounded-full"></div></div>
                                </div>
                                <div className="gap-1 grid mb-2">
                                    <p>Telugu</p>
                                    <div className="h-1 bg-gray-200 rounded-full"><div className="w-3/5 bg-yellow-500 h-full rounded-full"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;