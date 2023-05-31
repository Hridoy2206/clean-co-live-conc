import bucketGirl from "../../assets/images/bucketgirl 1.png"
const Landing = () => {
    return (
        <>
            <div className="hero h-screen lg:h-[65vh] bg-accent mt-16">
                <div className="hero-content flex-col lg:flex-row" >
                    <div className=" max-w-xl">
                        <p data-aos="fade-right" data-aos-delay="50" data-aos-duration="600">Best Quality</p>
                        <h1 className="text-5xl font-bold" data-aos="fade-right" data-aos-delay="70" data-aos-duration="800">Professinal Cleaning Service</h1>
                        <p className="py-6" data-aos="fade-right" data-aos-delay="90" data-aos-duration="1000">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary" data-aos-delay="400" data-aos="zoom-in">Get Started</button>
                    </div>
                    <div className="h-[55vh] shrink-0 " data-aos="fade-left" data-aos-duration="1000">
                        <img src={bucketGirl} className="max-w-sm h-full shadow-0 shrink-0" alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-[-50px] relative bg-base-200 rounded-lg z-50 shadow-xl mx-auto p-8 w-5/6">
                <h1 className="text-2xl text-primary font-semibold mb-6">Get Free Estimate</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <button className="btn btn-primary mt-4">Request A Quote</button>
            </div>
        </>
    );
};

export default Landing;