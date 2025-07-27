
export default function Card({ title, des, icon }) {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-lg flex flex-col 
      bg-black text-white 
      dark:bg-white dark:text-black dark:hover:bg-gray-100
      hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] 
      transition-colors duration-300"
    >
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-4xl md:text-5xl text-[#ff014f]">{icon}</span>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg md:text-xl font-bold">{title}</h4>
          <p className="text-sm md:text-base font-light dark:text-gray-600">{des}</p>
        </div>
      </div>
    </div>
  );
}
