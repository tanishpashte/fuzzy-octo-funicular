function HomePage(){
    return (
        <div className='flex flex-col justify-around items-center h-svh px-4'>
            <h1 className='text-8xl'>Hey Yarshu</h1>
            <p className='bg-[#445069] p-4 rounded-lg text-center'>Kal sathi sorry, I know mazhi chuk zhali. I was probably thoda not in senses (and sleepy too!)<br></br>Punha asa nahi hou denar</p>
            <div className='flex gap-4'>
                <button className='bg-[#5B9A8B] p-3 rounded-lg font-bold' onClick={() => window.location.href='/flower'}>Kela maaf</button>
                <button className='bg-[#5B9A8B] p-3 rounded-lg font-bold' onClick={() => window.location.href='/sorry'}>Nahi karnar maaf</button>
            </div>

            <img src="bouquet.png" class="floating-flower" alt="Flower" />
        </div>
    )
    
}

export default HomePage