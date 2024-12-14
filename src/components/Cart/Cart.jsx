
const Cart = () => {
    return (
        <div className="max-w-6xl ml-32 my-10">
            <p>Home / Cart</p>
            <h2 className="text-4xl font-medium my-6">Cart history</h2>
            <div className="flex gap-24 mb-5">
                <img className="w-56" src="/src/assets/image/dumbel.png" alt="" />
                <div>
                    <p className="text-2xl text-gray-600">The Dumbbell</p>
                    <p className="text-3xl">150 CND</p>
                </div>
                <p className="text-2xl text-gray-600">05/12/2024</p>
                <p className="text-3xl">02</p>
                <p className="text-3xl">150 CND</p>
                <div>
                    <button className="bg-black text-white px-12 py-3">Confirm Order</button>
                </div>
            </div>
            <div className="flex gap-x-24 mb-5">
                <img className="w-56" src="/src/assets/image/e2.png" alt="" />
                <div>
                    <p className="text-2xl text-gray-600">The Dumbbell</p>
                    <p className="text-3xl">150 CND</p>
                </div>
                <p className="text-2xl text-gray-600">05/12/2024</p>
                <p className="text-3xl">02</p>
                <p className="text-3xl">150 CND</p>
                <div>
                    <button className="bg-black text-white px-12 py-3">Confirm Order</button>
                </div>
            </div>
            <div className="flex gap-x-24 mb-5">
                <img className="w-56" src="/src/assets/image/ball.png" alt="" />
                <div>
                    <p className="text-2xl text-gray-600">The Dumbbell</p>
                    <p className="text-3xl">150 CND</p>
                </div>
                <p className="text-2xl text-gray-600">05/12/2024</p>
                <p className="text-3xl">02</p>
                <p className="text-3xl">150 CND</p>
                <div>
                    <button className="bg-black text-white px-12 py-3">Confirm Order</button>
                </div>
            </div>
            <div className="flex gap-x-24">
                <img className="w-56" src="/src/assets/image/e4.png" alt="" />
                <div>
                    <p className="text-2xl text-gray-600">The Dumbbell</p>
                    <p className="text-3xl">150 CND</p>
                </div>
                <p className="text-2xl text-gray-600">05/12/2024</p>
                <p className="text-3xl">02</p>
                <p className="text-3xl">150 CND</p>
                <div>
                    <button className="bg-black text-white px-12 py-3">Confirm Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;