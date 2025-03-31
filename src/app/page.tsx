import LeftSidebar from "@/components/LeftSidebar";


const Home = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center 
    relative bg-black"
    >
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        {/* Home */}
        <main className="ml-[275px] p-6 flex w-[600px] h-full min-h-screen flex-col border-l-[.01em] border-r-[0.1em] border-gray-600">
        <h1 className="text-2xl font-bold">Home</h1>
        </main>
        {/* Right Section */}
        <section></section>
      </div>
    </div>
  );
};

export default Home;
