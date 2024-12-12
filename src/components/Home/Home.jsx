const Home = () => {
    return (
        <div>
            {/* banner sectoin */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl">Functional Movement. <br />
                        Anytime Anywhere.</h1>
                        <button className="btn bg-[#B47000] text-white">Join our Class <img src="/src/assets/image/diagonal-arrow.png" alt="" /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;