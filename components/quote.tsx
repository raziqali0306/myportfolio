import { BsFillChatSquareQuoteFill } from 'react-icons/bs';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Quote({ quote }: { quote: string }) {
    return (
        <div className="w-full text-center  h-fit p-5 md:p-10 bg-quote text-quote-text relative mx-auto mb-14 font-Montserrat text-base md:text-2xl">
            <div className="absolute -top-2 -translate-y-1/2 right-0 -translate-x-1/2 text-quote-text">
                <BsFillChatSquareQuoteFill className='h-10 w-10' />
            </div>
            <div className='justify-center animate-pulse'>
                <FaQuoteLeft className='pb-2 md:pb-3 mr-2 inline-block' />
                <span id="quote" className=''>{quote}</span>
                <FaQuoteRight className='pb-2 md:pb-3 inline-block ml-2' />
            </div>
        </div>
    )
}

export default Quote;