import Hero from '../components/Hero';
import Features from '../components/Features';
import Brands from '../components/Brands';
import Layout from '../Layout';
import About from '../components/About';
import KidsSleep from '../components/KidsSleep';

const Home = () => {
    return (
        <Layout title="Home">
            <Hero />
            <Features />
            <About />
            <Brands />
            <KidsSleep />
        </Layout>
    );
};

export default Home;
