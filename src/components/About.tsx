import { SITE_NAME } from '../constants';
import aboutPhoto from '../assets/curlys-about.svg';

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
                        <p className='text-base font-semibold leading-7 text-copa-gold-600'>
                            Family-owned in Tempe, Arizona
                        </p>
                        <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            An Inside Look Into Curly's Furniture Discounters
                        </h1>
                        <p className='mt-6 text-xl leading-8 text-gray-700'>
                            Welcome to <strong>{SITE_NAME}</strong>, a Tempe furniture and mattress
                            store proudly operated by a dedicated father-daughter team, Bruce
                            "Curly" Kiraly and his daughter, Cody. Our family has deep roots in
                            Arizona, and we're here to bring you high-quality furnishings you'll
                            love &mdash; at honest, discount prices.
                        </p>
                        <div className='mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none'>
                            <p>
                                With over 90 years of combined experience in the furniture and
                                mattress industry &mdash; including our long-running Magic Mattress
                                store in Tempe &mdash; we understand what comfort and value really
                                mean, and we're committed to delivering both without the big-box
                                markup.
                            </p>
                            <p className='mt-8'>
                                Located at 1238 W Elliot Rd in Tempe, our showroom features an
                                extensive selection of name-brand mattresses and furniture from
                                trusted brands like Beautyrest, Serta, Puffy, Ashley, and BIA
                                Eclipse Glacier &mdash; plus stylish furniture to complete every
                                room in your home.
                            </p>
                            <p className='mt-8'>
                                Our mission is simple: serve our community with unmatched selection,
                                friendly service, and prices that beat the big chains. From our
                                lowest-price guarantee to convenient financing and white glove
                                delivery, we make it easy to furnish your home the way you want.
                            </p>
                            <p className='mt-8'>
                                Experience the difference of shopping local. Whether you visit us
                                in-store or browse our online showroom, we promise quality
                                furnishings, expert guidance, and discount prices you'll love.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
