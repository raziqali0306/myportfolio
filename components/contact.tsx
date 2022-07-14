/* eslint-disable @next/next/no-img-element */
import Quote from "./quote";

const quote = 'Good communication is just as stimulating as black coffee, and just as hard to sleep after.'

function Contact() {
    return (
        <>
            <div className="min-h-screen pt-28 w-10/12 md:w-9/12 mx-auto mb-20">
                <Quote quote={quote} />
                <p className="tracking-wide font-bold opacity-60 w-fit mx-auto text-4xl mb-10">Contact Me</p>
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
                    <div className="contact-pic lg:flex items-center justify-center">
                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001/'}/developer.png`} alt="" className="w-4/5" />
                    </div>
                    <div>
                        <form
                            className="grid gap-4"
                            action="https://formsubmit.co/c4e3bd6cb93135829c6075c3b6d8e513"
                            method="POST"
                        >
                            <input className="bg-input px-5 text-base py-3 outline-none rounded" type="text" placeholder="Name (required)" name="name" required />
                            <input className="bg-input px-5 text-base py-3 outline-none rounded" type="email" placeholder="Email (required)" name="email" required />
                            <input className="bg-input px-5 text-base py-3 outline-none rounded" type="text" placeholder="Subject (required)" name="subject" required />
                            <input type="text" name="_honey" className="hidden" />
                            <input type="hidden" className="hidden" name="_next" value="https://raziqali0306.github.io/myportfolio/thankyou" />
                            <textarea className="bg-input px-5 text-base py-3 outline-none rounded" placeholder="Your Message(required)" rows={5} name='message' required />
                            <input type="submit" value="SUBMIT" className="w-fit cursor-pointer px-4 hover:px-5 py-2 border-2 tracking-widest border-orange-light duration-200 transition-all ease-in-out" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;