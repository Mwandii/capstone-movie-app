function ErrorDisplay() {
    return (
         <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 animate-pulse">
        Error 404: Glitched Out
      </h1>
      <p className="text-gray-500 mt-2">Something went wrong. Please try again.</p>
    </div>
    )
}

export default ErrorDisplay;