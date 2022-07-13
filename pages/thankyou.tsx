import router from "next/router";

export default function Thankyou() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid gap-10 text-center -mt-32">
                <p className="text-9xl">Thank you!</p>
                <p className="text-2xl">Thanks for being awesome and reaching me out.!</p>
                <div
                    className="cursor-pointer capitalize text-orange-light w-fit mx-auto"
                    onClick={() => {
                        router.push('https://raziqali0306.github.io/myportfolio/');
                    }}>goback! </div>
            </div>
        </div>
    )
}