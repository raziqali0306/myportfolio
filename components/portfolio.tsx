import Quote from "./quote";
import { GrReactjs } from 'react-icons/gr';
import { GoRepo } from 'react-icons/go';
import { FaBootstrap } from "react-icons/fa";
import { SiCss3, SiDjango, SiExpress, SiHtml5, SiJavascript, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

const quote = "It does not matter how slowly you go as long as you do not stop.";

const data = [
    {
        name: 'BgImg',
        description: [
            'A Frontend Webapp to search and download different wallpapers based on device (eg.: Mobile, Desktop, iPad etc..).',
            'BgImg is built using ReactJS. it is a single page website which has a search tool bar and list of pictures that can be downloaded with a single click. Bootstrap v5.0 is used for styling the content on the page.'
        ],
        language: 'JavaScript',
        technologies: ['reactjs', 'bootstrap'],
        date: '2021',
        url: 'https://github.com/raziqali0306/BgImg',
    },
    {
        name: 'BlogSite',
        description: [
            'A FullStack WebApp to read and post all Technical and non-Technical content in the form of Blogs.',
            'BlogSite is built using Django. it uses default database i.e., SQLite. The user interface of Blogsite is pretty simple consisting of default static HTML pages including Blogs, TopBlogs and Profile section for which styling is done using Bootstrap v5.0 . We can read all the blogs and only need to create an account in order to post something which is very simple.'
        ],
        language: 'Python',
        technologies: ['django', 'html', 'bootstrap'],
        date: '2021',
        url: 'https://github.com/raziqali0306/Blogsite',
    },
    {
        name: 'Budget-Tracker',
        description: [
            'A FullStack WebApp to track all the incomes and expenses of an individual over a time period.',
            'Budget-Tracker is built using MERN stack. it stores data into MongoDB database and uses ExpressJS for scripting and mongoose for database modals. Frontend is designed using ReactJS and Bootstrap v5.0 for styling and has a Login/Register page and dashboard to track budget.'
        ],
        technologies: ['reactjs', 'mongodb', 'nodejs', 'expressjs'],
        language: 'JavaScript',
        date: '2021',
        url: 'https://github.com/raziqali0306/Budget-Tracker',
    },
    {
        name: 'pig-dice-game',
        description: [
            'Pig-Dice is a two player(1v1) simple dice game. You win by being the first player to score target points.',
            'Pig-Dice game is simple webapp game built using native HTML, CSS and JavaScript. it is required to set a target score at first and it will keep track of each player score through out the game using EventListners and first player reaches the score wins. Hurray!'
        ],
        technologies: ['html', 'css', 'javascript'],
        language: 'JavaScript',
        date: '2020',
        url: 'https://github.com/raziqali0306/pig-dice-game',
    },
    {
        name: 'TodoApp',
        description: [
            'A Mobile application used to keep track of your daily life Todos.',
            'TodoApp is built using React-Native. it is a simple single screen app which has an input area to add todos which are stored using asyncStorage and can be delete/mark-as-done with a single click. it is a cross-platform Mobile application that can be used for both android and iOS.'
        ],
        technologies: ['react-native'],
        language: 'JavaScript',
        date: '2020',
        url: 'https://github.com/raziqali0306/TodoApp',
    },
    {
        name: 'TopPacks',
        description: [
            'A Mobile application enables to search different git repositories with searchbar and import packages/dependencies of those repos to get summarized list of Top packages / Trending being used.',
            'TopPacks is built using React-Native. it contains tab navigator with two screen in which one is to search and import of git-repos package.json and another screen which provides the list of Top packages. it is a cross-platform Mobile application that can be used for both android and iOS.'
        ],
        technologies: ['react-native'],
        language: 'JavaScript',
        date: '2020',
        url: 'https://github.com/raziqali0306/gitRepository',
    },
]



function PortFolio() {
    return (
        <>
            <div className="min-h-screen pt-28 w-10/12 md:w-9/12 mx-auto mb-20">
                <Quote quote={quote} />
                <p className="tracking-wide font-bold opacity-60 w-fit mx-auto text-4xl mb-16">Portfolio</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        data.map((repo) => (
                            <div key={repo.name} className="cursor-pointer rounded-md bg-gray-200 p-0.5 shadow-md shadow-gray-200 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-light hover:via-orange-light hover:to-orange-dark hover:shadow-xl hover:text-orange-light float-left hover:tracking-widest"
                                onClick={() => {
                                    window.open(repo.url, '_blank');
                                }}>
                                <div className="h-full w-full rounded bg-slate-50 px-5 sm:px-10 py-8">
                                    {/* icons-section */}
                                    <div className="w-full mb-6">
                                        <div className="inline-flex items-center justify-center flex-wrap w-full">
                                            {
                                                repo.technologies.includes('reactjs') ? <GrReactjs className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('bootstrap') ? <FaBootstrap className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('django') ? <SiDjango className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('html') ? <SiHtml5 className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('mongodb') ? <SiMongodb className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('nodejs') ? <IoLogoNodejs className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('expressjs') ? <SiExpress className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('css') ? <SiCss3 className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('javascript') ? <SiJavascript className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                            {
                                                repo.technologies.includes('react-native') ? <TbBrandReactNative className="shrink-0 m-auto h-8 w-auto text-slate-500 hover:text-orange-500 transition-colors duration-150" /> : null
                                            }
                                        </div>
                                    </div>
                                    {/* title */}
                                    <div className="inline-flex items-center w-full">
                                        <div className="">
                                            <GoRepo className="h-8 w-8 text-gray-700" />
                                        </div>
                                        <div className="h-full ml-2">
                                            <p className="text-xs indent-0.5 tracking-wide text-gray-400">raziqali0306/</p>
                                            <p className="text-2xl whitespace-nowrap capitalize font-medium">{repo.name}</p>
                                        </div>
                                    </div>
                                    {/* description */}
                                    <div className="my-4 text-gray-700">
                                        {
                                            repo.description.map((chunk, index) => (
                                                <p key={index} className="indent-6 text-sm tracking-normal">
                                                    {chunk}
                                                </p>
                                            ))
                                        }
                                    </div>
                                    {/* additional info */}
                                    <div className="w-full text-sm capitalize tracking-normal text-gray-700">
                                        <p><span className="text-base font-medium">Technologies:</span> {repo.technologies.toString()} </p>
                                        <p><span className="text-base font-medium">Language:</span> {repo.language} </p>
                                        <p><span className="text-base font-medium">Date:</span> {repo.date} </p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default PortFolio;