export default function Confirm() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center px-8 text-center">
        <button className="absolute top-4 left-8 bg-[#445069] p-2 rounded-lg font-bold" onClick={() => window.location.href = '/'}>
        <i class="fa-solid fa-house-chimney mr-2"></i>Back to home
        </button>
        <img src="baby-flowers.jpg" alt="Please baby" className="rounded-xl shadow-lg shadow-[#F7E987] mb-8" />
        <h1 className="text-6xl">He ghe</h1>
        <button className="bg-[#5B9A8B] p-3 rounded-lg font-bold mt-4" onClick={() => window.location.href='/flower'}>
        Accept flowers &#x1F337;
        </button>
    </div>
  );
}
