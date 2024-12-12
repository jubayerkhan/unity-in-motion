const Footer = () => {
    return (
        <footer>
            <div  className="footer bg-[#905a00] text-white p-10">
            <nav className="ml-32">
                <img className="w-40" src="/src/assets/image/logo.png" alt="" />
                <p className="w-80">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
            </nav>
            <nav>
                <h6 className="footer-title">Information</h6>
                <a className="link link-hover">Contact us</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms & Condition</a>
            </nav>
            <nav>
                <h6 className="footer-title">Help & Support</h6>
                <div className="flex gap-2">
                    <img className="w-5 h-4 mt-1" src="/src/assets/image/email.png" alt="" />
                    <p>Email: </p>
                    <div>
                        <p>Youremail@gmail.com</p>
                        <p>Letstalk@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img className="w-5 h-4 mt-1" src="/src/assets/image/phone-call.png" alt="" />
                    <p>Phone: </p>
                    <div>
                        <p>(+)(888)750-6866</p>
                        <p>(+)(888)785-3986</p>
                    </div>
                </div>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter Sign Up</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Get Alert Directly Into Your Inbox <br />
                        After Each Post.</span>
                    </label>
                    <div className="join rounded-3xl">
                        <input
                            type="text"
                            placeholder="Enter Your Mail"
                            className="input input-bordered join-item" />
                        <button className="btn join-item"><img className="w-8" src="/src/assets/image/telegram.png" alt="" /></button>
                    </div>
                </fieldset>
            </form>
            </div>
            <div className="flex justify-between text-white bg-black">
                <p className="ml-20">©2024Spaktech. Agency | All Right Reserved</p>
                <div className="flex gap-3 mr-20 ">
                    <img className="w-5 h-5 bg-white" src="/src/assets/image/facebook.png" alt="" />
                    <img className="w-5 h-5 bg-white" src="/src/assets/image/instagram.png" alt="" />
                    <img className="w-5 h-5" src="/src/assets/image/twitter.png" alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;