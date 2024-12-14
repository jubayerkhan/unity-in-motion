import ReactPlayer from "react-player";

const FreeClass = () => {
    return (
        <div className="max-w-6xl ml-40">
            <h2 className="text-4xl">Free class</h2>
            <div className="">
                <ReactPlayer className="" url={'/src/assets/video/exercise-video.mp4'} controls={true} />
            </div>
            {/* membership section */}
            <div className="flex gap-48 my-20">
                {/* basic membership section */}
                <div>
                    <p className="text-2xl mb-6">Basic Membership</p>
                    <p className="font-semibold text-[#B47000] text-5xl mb-6">48 CND <sub className="text-sm">Monthly</sub> </p>
                    <ul className="list-disc mb-4 ml-4">
                        <li>On-demand Access to our library</li>
                        <li>3 New Classes Every Week</li>
                        <li>Join a Global Community</li>
                        <li>Fitness Fusion Hub</li>
                        <li>The Vitality Oasis Gym</li>
                        <li>Active Lifestyle Emporium</li>
                        <li>The Vitality Oasis Gym</li>
                    </ul>
                    <button className="bg-black text-white w-72">Buy Now</button>
                </div>
                {/* standard membership section */}
                <div>
                    <p className="text-2xl mb-6">Standard Membership</p>
                    <p className="font-semibold text-[#B47000] text-5xl mb-6">70 CND <sub className="text-sm">4 Month</sub> </p>
                    <ul className="list-disc mb-4 ml-4">
                        <li>Empowerment Fitness Sanctuary</li>
                        <li>Elite Performance Emporium</li>
                        <li>Strength and Stamina Studios</li>
                        <li>Fitness Fusion Hub</li>
                        <li>The Vitality Oasis Gym</li>
                        <li>Active Lifestyle Emporium</li>
                        <li>The Vitality Oasis Gym</li>
                    </ul>
                    <button className="bg-black text-white w-72">Buy Now</button>
                </div>
                {/* basic membership section */}
                <div>
                    <p className="text-2xl mb-6">Premium Membership</p>
                    <p className="font-semibold text-[#B47000] text-5xl mb-6">120 CND <sub className="text-sm">1 Year</sub> </p>
                    <ul className="list-disc mb-4 ml-4">
                    <li>Empowerment Fitness Sanctuary</li>
                        <li>Elite Performance Emporium</li>
                        <li>Strength and Stamina Studios</li>
                        <li>Fitness Fusion Hub</li>
                        <li>The Vitality Oasis Gym</li>
                        <li>Active Lifestyle Emporium</li>
                        <li>The Vitality Oasis Gym</li>
                    </ul>
                    <button className="bg-black text-white w-72">Buy Now</button>
                </div>
            </div>
            {/* notice section */}
            <p className="mb-8"> <b>Note:</b> stablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy</p>
        </div>
    );
};

export default FreeClass;