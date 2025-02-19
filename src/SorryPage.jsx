
import { Link } from 'react-router-dom';  // Import Link
function SorryPage(){
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center px-8 text-center">
            <button className="absolute top-4 left-8 bg-[#445069] p-2 rounded-lg font-bold" onClick={() => window.location.href = '/'}>
                <i className="fa-solid fa-house-chimney mr-2"></i>Back to home
                </button>
            <img src="emo-baby.jpg" alt="Please baby" className="rounded-xl shadow-lg shadow-[#F7E987] mb-8" />
            <h1 className="text-4xl mb-4">Please na,<br></br> sorry na !</h1>
            <p>Aisa kayko karta hai &#x1F972;</p>
            <p>Maan jao na</p>
            <div className="flex gap-4 my-6">
                <Link to="/flower" className="p-3 bg-[#5B9A8B] rounded-lg">Ha chalo maan liya</Link> {/* Use Link */}
                <Link to="/verysorry" className="p-3 bg-[#5B9A8B] rounded-lg">Nahi manungi</Link> {/* Use Link */}
            </div>
        </div>
    )
}

export default SorryPage