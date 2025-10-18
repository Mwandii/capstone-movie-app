function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-gray-800 rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-gray-800 rounded-full animate-bounce delay-200"></span>
        <span className="w-3 h-3 bg-gray-800 rounded-full animate-bounce delay-400"></span>
      </div>
    </div>
  );
}

export default Loading;
