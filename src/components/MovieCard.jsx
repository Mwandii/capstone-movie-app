function MovieCard() {
    return (
        <div className="bg-white rounded-2xl m-2 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
               className="w-full h-48 object-cover"
            />
            <div>
            <h4>Movie title</h4>
            <div className="flex">
            <p>rating</p>
            <p>Year</p>
            <p>category</p>
            </div>
            <button>Watch Now</button>
            </div>
        </div>
    )
}

export default MovieCard;