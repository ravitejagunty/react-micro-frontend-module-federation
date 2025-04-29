export default function RemoteButton() {
  const handleClick = () => {
    console.log('Remote button clicked!');
  };

  return (
    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition ease-in-out duration-300" onClick={handleClick}>
      Click me (Remote Button)
    </button>
  );
}