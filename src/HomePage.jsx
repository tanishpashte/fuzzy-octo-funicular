import { Link } from 'react-router-dom';
function HomePage(){
    return (
        <div className='flex flex-col justify-around items-center h-svh px-4'>
            <h1 className='text-8xl'>Hey Yarshu</h1>
            <p className='bg-[#445069] p-4 rounded-lg text-center'>Kal sathi sorry, I know mazhi chuk zhali. I was probably thoda not in senses (and sleepy too!)<br></br>Punha asa nahi hou denar</p>
            <div className='flex gap-4'>
                <Link to="/flower" className="bg-[#5B9A8B] p-3 rounded-lg font-bold">Kela maaf</Link>
                <Link to="/sorry" className="bg-[#5B9A8B] p-3 rounded-lg font-bold">Nahi karnar maaf</Link>
            </div>

            <img src="bouquet.png" class="floating-flower" alt="Flower" />
        </div>
    )
    
}

export default HomePage