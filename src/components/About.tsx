import { SITE_NAME } from '../constants';
import aboutPhoto from '../assets/curlys-about-us.jpg';

const About = () => {
    return (
        <div className='relative bg-white'>
            <div className='mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end'>
                <div className='lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2'>
                    <div className='relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0'>
                        <img
                            className='absolute inset-0 h-full w-full bg-gray-50 object-cover'
                            src={aboutPhoto}
                            alt={`The team at ${SITE_NAME}`}
                        />
                    </div>
                </div>
                <div className='px-6 lg:contents'>
                    <div className='mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2'>
                        <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            Experience Award-Winning Comfort with Puffy Mattresses
                        </h1>
                        <div className='mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none'>
                            <p>
                                At Curly's Furniture Discounters and Mattress, we are proud to offer the lowest price on Puffy Mattresses in Arizona guaranteed or your mattress is free —an award-winning choice recommended by Consumer Reports for their exceptional comfort and support.
                            </p>
                            <p className='mt-8'>
                                <b>The Puffy Cloud Mattress</b> is cooling and comfortable with a medium-firm feel. It has 6 layers and a 10” profile.
                            </p>
                            <p className='mt-8'>
                                <b>The Puffy Lux Hybrid Mattress</b> (most popular) is highly breathable and airy with targeted alignment for the back and body, and a luxurious medium-plush feel. It has 8 layers and a 12” profile.
                            </p>
                            <p className='mt-8'>
                                <b>The Puffy Royal Hybrid Mattress</b> is infused with cooling gel to reduce heat retention and offers premium zoned full-body support that adapts as you move. Plus, an ultra-plush feel with a deluxe cover. It has 10 layers and a 14” profile.
                            </p>
                            <p className='mt-8'>
                                <b>The Puffy Monarch Hybrid Mattress</b> is our most luxurious hybrid mattress (memory foam + latex + coils). It features a luxury-plush feel, alpaca wool filling, responsive latex, a 16” profile, and 12 layers dedicated to climate control, support, pressure relief, and superior comfort.
                            </p>
                            <p className='mt-8'>
                                Upgrade to a Puffy Mattress today and discover why it’s a top-rated choice for sleepers everywhere!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
