import ReactPlayer from "react-player";
import v from '/src/assets/video/exercise-video.mp4'
import pdf from "/src/assets/image/pdf.png" 
import doc from "/src/assets/image/doc_8263177.png" 
import cal from "/src/assets/image/calendar.png"
import pi from "/src/assets/image/pie-chart.png"
import decap from "/src/assets/image/decaprio.jpeg"
import p1 from "/src/assets/image/p-1.jpeg"
import g1 from "/src/assets/image/g-1.jpeg" 
import g2 from "/src/assets/image/g-2.jpeg" 
import ema from "/src/assets/image/ema.jpeg" 


const AcademyToStudio = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <p>Home / Demand Library</p>
            <h2 className="text-4xl font-medium my-6">Academy to Studio</h2>
            {/* navbar 2 */}
            <div className="navbar bg-[#B47000] mb-5">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"></a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search here..." className="input input-bordered w-64 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn avatar bg-white">
                            <img src={cal} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* page body */}
            <div className="md:grid grid-flow-row-dense grid-cols-3 gap-10">
                {/* left side  */}
                <div className="col-span-2">
                    <ReactPlayer className="" url={v} controls={true} />
                    <div className="flex gap-8 my-8">
                        <p>Topic: Yoga</p>
                        <p>Date: Mon 11/ 06/ 2024</p>
                        <div className="flex">
                            <img src={pdf} alt="" />
                            <p>PDF File</p>
                        </div>
                        <div className="flex">
                            <img src={doc} alt="" />
                            <p>PDF File</p>
                        </div>
                    </div>
                    <p className="text-2xl">45-min advance vinyasa yoga</p>
                    <p>Dignissim, Vestibulum nec Nunc Nullam amet, quis quis convallis. duttincidunt Nunc nec Vestibulum ultrices Sed ac lacus vel malesuada Ut nulla, varius lacus sapien luctus maximus vitae nec dolor ex. efficitur. Nullam amet, elementum amet, eget amet, eu orci sodales. sodales. odio vitae at Nam orci leo <a className="font-semibold" href="">See more...</a> </p>
                    <div className="grid grid-flow-row-dense grid-cols-5 mt-10">
                        <img className="w-20 rounded-full" src={p1} alt="" />
                        <div className="col-span-4">
                            <p>mstkhushiakter333@gmail.com</p>
                            <input className="border w-full h-32 mt-5" type="text" name="name" placeholder="Add a comment" />
                            <div className="text-end">
                                <button className="mt-4 px-8 border-2 border-[#B47000] text-[#B47000]">Add a Comment</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-flow-row-dense grid-cols-5 mt-10">
                        <img className="w-20 rounded-full" src={decap} alt="" />
                        <div className="col-span-4">
                            <p>mstkhushiakter333@gmail.com</p>
                            <p>Dignissim, Vestibulum nec Nunc Nullam amet, quis quis convallis. duttincidunt Nunc nec Vestibulum ultrices
                                Dignissim, Vestibulum nec Nunc Nullam amet, quis quis convallis. duttincidunt Nunc nec Vestibulum ultrices.</p>
                            <div className="text-end">
                                <button className="mt-4 px-8 border-2 border-[#B47000] text-[#B47000]">Reply</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-flow-row-dense grid-cols-5 mt-10">
                        <img className="w-20 rounded-full" src={ema} alt="" />
                        <div className="col-span-4">
                            <p>mstkhushiakter333@gmail.com</p>
                            <p>Dignissim, Vestibulum nec Nunc Nullam amet, quis quis convallis. duttincidunt Nunc nec Vestibulum ultrices
                                Dignissim, Vestibulum nec Nunc Nullam amet, quis quis convallis. duttincidunt Nunc nec Vestibulum ultrices.</p>
                            <div className="text-end">
                                <button className="mt-4 px-8 border-2 border-[#B47000] text-[#B47000]">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div>
                    <div className="border shadow-md">
                        <p className="font-bold p-4">Your Progress</p>
                        <div className="flex justify-center items-center">
                            <img className="w-60 mb-4" src={pi} alt="" />
                        </div>
                        <div className="flex justify-center items-center gap-12">
                            <p>Complete</p>
                            <p>Uncomplete</p>
                        </div>
                    </div>
                    <div>
                        <div tabIndex={0} className="collapse collapse-arrow bg-[#F2F2F2] rounded-sm my-4">
                            <div className="collapse-title font-medium text-start">Series No 01 : Hatha yoga, Ashtanga...</div>
                            <div className="collapse-content">
                                <p>Total video : 04  3h 40 m</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow bg-[#F2F2F2] rounded-sm my-4">
                            <div className="collapse-title font-medium text-start">Series No 02 : Hatha yoga, Ashtanga...</div>
                            <div className="collapse-content">
                                <p>Total video : 04  3h 40 m</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow bg-[#F2F2F2] rounded-sm my-4">
                            <div className="collapse-title font-medium text-start">Series No 03 : Hatha yoga, Ashtanga...</div>
                            <div className="collapse-content">
                                <p>Total video : 04  3h 40 m</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow bg-[#F2F2F2] rounded-sm my-4">
                            <div className="collapse-title font-medium text-start">Series No 04 : Hatha yoga, Ashtanga...</div>
                            <div className="collapse-content">
                                <p>Total video : 04  3h 40 m</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow bg-[#F2F2F2] rounded-sm my-4">
                            <div className="collapse-title font-medium text-start">Series No 05 : Hatha yoga, Ashtanga...</div>
                            <div className="collapse-content">
                                <p>Total video : 04  3h 40 m</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow bg-[#F2F2F2] rounded-sm my-4">
                            <div className="collapse-title font-medium text-start">Series No 06 : Hatha yoga, Ashtanga...</div>
                            <div className="collapse-content">
                                <p>Total video : 04  3h 40 m</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow bg-[#F2F2F2] rounded-sm my-4">
                            <div className="collapse-title font-medium text-start">Series No 07 : Hatha yoga, Ashtanga...</div>
                            <div className="collapse-content">
                                <p>Total video : 04  3h 40 m</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* more section  */}
            <div>
                <div className="md:flex justify-between">
                    <h2 className="text-4xl font-medium my-10">More Class Like This</h2>
                    <button className="text-[#B47000] underline">View All</button>
                </div>
                <div className="md:flex gap-16">
                    <div>
                        <img className="w-96" src={g1} alt="" />
                        <div className="md:flex justify-between mt-2">
                            <p className="text-2xl">Sweat and Stretch</p>
                            <button className="bg-[#555555] text-white py-1 px-5">Details</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-96" src={g2} alt="" />
                        <div className="md:flex justify-between mt-2">
                            <p className="text-2xl">Core Crushed</p>
                            <button className="bg-[#555555] text-white py-1 px-5">Details</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-96" src={g1} alt="" />
                        <div className="md:flex justify-between mt-2">
                            <p className="text-2xl">Sweat and Stretch</p>
                            <button className="bg-[#555555] text-white py-1 px-5">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademyToStudio;