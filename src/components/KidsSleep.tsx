import kidsImage from '../assets/curlys-kids-sleep.jpg';

const KidsSleep = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="inline-block rounded-md bg-copa-blue-900 px-3 py-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Kids Need Sleep Too
                        </h2>
                        <p className="mt-6 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                            A good night&rsquo;s sleep isn&rsquo;t just for adults. Sleep is especially important for
                            kids during those essential, developmental years. Studies have shown proper sleep helps
                            children develop key brain functions, including making memories and preparing the brain for
                            the next day. Give your kids these health benefits by practicing a healthy bedtime routine
                            and offering them a mattress designed for their growing bodies.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={kidsImage}
                            alt="A family enjoying a comfortable mattress together"
                            className="w-full rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KidsSleep;
