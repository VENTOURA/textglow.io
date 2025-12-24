import { Hero } from '../components/home/Hero';
import { ProblemSolution } from '../components/home/ProblemSolution';
import { HowItWorks } from '../components/home/HowItWorks';
import { Features } from '../components/home/Features';

export const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <ProblemSolution />
            <HowItWorks />
            <Features />
        </div>
    );
};
