function Hero() {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1573917308539-f1ba0c83ae4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lkZSUyMG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500')]
         h-[350px] bg-cover bg-center relative m-5 rounded-2xl">
            <div className="flex flex-col justify-end text-white text-sm absolute inset-0 bg-black/50 p-10 rounded-2xl">
            <button className="absolute top-30 left-5 text-white text-4xl bg-white/40 hover:bg-black/60 px-3 py-3 rounded-full">‹</button>
            <h3>Movie Title</h3>
            <p>7.2</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum eum, magni odio laboriosam eaque dolore aliquid dolorem, omnis aliquam officia ut deserunt saepe provident et quo molestiae velit repellendus.</p>
            <button className="text-white text-4xl absolute right-5 top-30 bg-white/40 hover:bg-black/60 px-3 py-3 rounded-full">›</button>
            </div>
        </div>
    )
}

export default Hero;