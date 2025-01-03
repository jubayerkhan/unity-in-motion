import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom';
import img1 from '/src/assets/image/diagonal-arrow.png'
import cart from "/src/assets/image/cart.png"
import ball from "/src/assets/image/ball.png"
import e2 from "/src/assets/image/e2.png"
import dumbell from "/src/assets/image/dumbel.png"
import e4 from "/src/assets/image/e4.png"
import g1 from "/src/assets/image/laptop-girl.jpeg"
import g2 from "/src/assets/image/dumbel-girl.jpeg"
import slider from "/src/assets/image/slider-image.jpeg"
import v from '/src/assets/video/exercise-video.mp4'

const Home = () => {
    return (
        <div className='mx-auto'>
            {/* banner sectoin */}
            <div
                className="hero mx-auto min-h-screen"
                style={{
                    backgroundImage: {},
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <video autoPlay muted loop id="myVideo">
                    <source src={v} type='video/mp4' />
                        Your browser does not support HTML5 video.
                </video>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl">Functional Movement. <br />
                            Anytime Anywhere.</h1>
                        <button className="btn bg-[#B47000] text-white">Join our Class <img src={img1} alt="" /> </button>
                    </div>
                </div>
            </div>
            {/* membership section */}
            <div className="text-center max-w-6xl mx-auto">
                <h2 className="text-4xl font-medium mt-10 mb-8">Membership Options</h2>
                <div className="mx-auto md:flex gap-3 items-center mb-10">
                    <div className="bg-[#F8F1E6] w-96">
                        <p className="mt-5">Basic Membership</p>
                        <p className="text-3xl font-semibold py-3">180 CND</p>
                        <button className="bg-black text-white mb-4 px-4">Buy Now</button>
                    </div>
                    <div className="bg-[#F8F1E6] w-96">
                        <p className="mt-5">Basic Membership</p>
                        <p className="text-3xl font-semibold py-3">180 CND</p>
                        <button className="bg-black text-white mb-4 px-4">Buy Now</button>
                    </div>
                    <div className="bg-[#F8F1E6] w-96">
                        <p className="mt-5">Basic Membership</p>
                        <p className="text-3xl font-semibold py-3">180 CND</p>
                        <button className="bg-black text-white mb-4 px-4">Buy Now</button>
                    </div>
                </div>
            </div>
            {/* shop */}
            <div className="max-w-6xl my-32 mx-auto">
                <div className="flex justify-between">
                    <h2 className="text-5xl mb-24">Shop</h2>
                    <a className="underline text-[#B47000] text-2xl" href="">View all</a>
                </div>
                <div className="md:flex max-w-sm md:max-w-6xl mx-auto gap-4">
                    {/* card-1 */}
                    <div className="card card-compact bg-base-100 w-72 shadow-xl my-4">
                        <div className="card-actions justify-end">
                            <button className="btn"> <img className="w-6" src={cart} alt="" /> </button>
                        </div>
                        <figure>
                            <img
                                className="w-48"
                                src={ball}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>The Ball</p>
                            <h2 className="card-title">$34.00 CND</h2>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="card card-compact bg-base-100 w-72 shadow-xl my-4">
                        <div className="card-actions justify-end">
                            <button className="btn"> <img className="w-6" src={cart} alt="" /> </button>
                        </div>
                        <figure>
                            <img
                                className="w-48"
                                src={e2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>Ab Wheel</p>
                            <h2 className="card-title">$34.00 CND</h2>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card card-compact bg-base-100 w-72 shadow-xl my-4">
                        <div className="card-actions justify-end">
                            <button className="btn"> <img className="w-6" src={cart} alt="" /> </button>
                        </div>
                        <figure>
                            <img
                                className="w-48"
                                src={dumbell}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>The Ball</p>
                            <h2 className="card-title">$34.00 CND</h2>
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="card card-compact bg-base-100 w-72 shadow-xl my-4">
                        <div className="card-actions justify-end">
                            <button className="btn"> <img className="w-6" src={cart} alt="" /> </button>
                        </div>
                        <figure>
                            <img
                                className="w-48"
                                src={e4}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>Ab Wheel</p>
                            <h2 className="card-title">$34.00 CND</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* why you choose us section */}
            <div className="max-w-6xl mx-auto md:flex gap-28 mb-20">
                <div className="relative mr-8">
                    <img className="w-96 rounded-lg" src={g1} alt="" />
                    <img className="w-96 absolute top-24 left-24 m-2 rounded-lg border-8 border-white" src={g2} alt="" />
                    <div className="text-center bg-[#B47000] w-20 mt-4 ml-2 rounded-md text-white">
                        <p>16+</p>
                        <p>Successful</p>
                        <p>Year</p>
                    </div>
                </div>
                <div>
                    <button className="bg-[#B47000] rounded px-3 py-2 text-white my-6">About Us</button>
                    <h2 className="text-5xl font-semibold my-5">Why You Choose Us</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
                    <div className="md:flex gap-60 my-3">
                        <div>
                            <p className="text-4xl font-medium text-[#B47000]">1000+</p>
                            <p>Complete Class</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-[#B47000]">24 hour</p>
                            <p>Unlimited Access</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-[#B47000]">500+</p>
                            <p>Students</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* question section */}
            <div className="text-center max-w-6xl mx-auto mb-20">
                <h2 className="text-5xl font-semibold mb-10">Frequently Asked Questions</h2>
                {/* <div className="border">
                    <p>What are the benefits of regular exercise?</p>
                    <img src="" alt="" />
                </div> */}
                <div className="">
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300 rounded-sm border my-4">
                        <div className="collapse-title font-medium text-start">What are the benefits of regular exercise?</div>
                        <div className="collapse-content">
                            <p>Answer: </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300 rounded-sm border mb-4">
                        <div className="collapse-title font-medium text-start">How often should I work out each week?</div>
                        <div className="collapse-content">
                            <p>Answer: </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300 rounded-sm border mb-4">
                        <div className="collapse-title font-medium text-start">What type of exercise is best for weight loss?</div>
                        <div className="collapse-content">
                            <p>Answer: </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300 rounded-sm border mb-4">
                        <div className="collapse-title font-medium text-start">What should I eat before and after a workout?</div>
                        <div className="collapse-content">
                            <p>Answer: </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300 rounded-sm border mb-4">
                        <div className="collapse-title font-medium text-start">How can I stay motivated to exercise regularly?</div>
                        <div className="collapse-content">
                            <p>Answer: </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* free class section */}
            <div className="max-w-6xl mx-auto mb-20 md:flex">
                <div>
                    <h2 className="text-5xl font-semibold mb-10">Free Class</h2>
                    <p>This class is a demo class, you get all the exercises, guidelines and tips related to fitness in our fitness course. So do not delay and join our community now.</p>
                    <NavLink to="/class"><button className="bg-[#B47000] rounded px-3 py-2 text-white mt-8">Join Our Community</button></NavLink>
                </div>
                <div>
                    {/* <video className="rounded-lg" src="/src/assets/video/exercise-video.mp4"></video> */}
                    <ReactPlayer url={v} controls={true} />
                </div>
            </div>
            {/* client section */}
            <div className="max-w-6xl mx-auto mb-20 text-center">
                <h2 className="text-5xl font-semibold mb-10">What Clients Say</h2>
                <div className="w-full border py-6">
                    <div id="slide1" className="relative w-full text-center">
                        <div className='flex justify-center'>
                            <p className='w-[600px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                        </div>
                        <div className='flex justify-center'>
                            <img className='w-24 h-24 rounded-full' src={slider} alt="" />
                        </div>
                        <h3 className='text-xl'>Wade Warren</h3>
                        <p>Actor</p>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* <div id="slide2" className="carousel-item relative w-full">
                        
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;