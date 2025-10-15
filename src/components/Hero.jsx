function Hero() {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1573917308539-f1ba0c83ae4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lkZSUyMG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500')]
         h-[350px] bg-cover bg-center relative">
            <div className="flex flex-col justify-end text-white text-sm absolute inset-0 bg-black/50 p-10">
            <h3>Movie Title</h3>
            <p>7.2</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum eum, magni odio laboriosam eaque dolore aliquid dolorem, omnis aliquam officia ut deserunt saepe provident et quo molestiae velit repellendus.</p>
            </div>
        </div>
    )
}

export default Hero;