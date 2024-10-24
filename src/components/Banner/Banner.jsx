import { Button } from "../ui/button";

const Banner = () => {
    return (
        <div className="mt-16 bg-[url('./assets/banner.jpg')] rounded-2xl bg-no-repeat bg-cover bg-gray-800 bg-blend-overlay">
            <div className={`w-full md:w-3/4 mx-auto text-center flex flex-col min-h-[calc(100vh-4rem)] justify-center space-y-4`}>
                <h1 className="text-4xl font-bold text-center w-full md:w-3/4 lg:w-3/5 mx-auto text-white">Discover an exceptional cooking class tailored for you!</h1>
                <p className="w-full md:w-3/4 mx-auto text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div>
                    <Button variant="primary" className="mr-4 rounded-full">Explore Now</Button>
                    <Button variant="outline" className="rounded-full bg-transparent text-white">Our Feedback</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner;