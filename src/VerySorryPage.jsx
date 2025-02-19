import { Link } from 'react-router-dom';

function VerySorryPage(){
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center px-8 text-center">
            <button className="absolute top-4 left-8 bg-[#445069] p-2 rounded-lg font-bold" onClick={() => window.location.href = '/'}>
                <i class="fa-solid fa-house-chimney mr-2"></i>Back to home
            </button>
            <img src="crying-baby.jpg" alt="Please baby" className="rounded-xl shadow-lg shadow-[#F7E987] mb-8" />
            <h1 className="text-4xl mb-4">Ayee please, <br></br>maan jao na !!!</h1>
            <div className="flex gap-4 my-6">
                <Link to="/confirm" className="p-3 bg-[#5B9A8B] rounded-lg">
                    <span className="text-2xl">OKAYYY</span><br /> Ab koi ek per pe khada ho jaye,<br /> toh kya kar sakte hai
                </Link>
            </div>
        </div>
    )
}

export default VerySorryPage