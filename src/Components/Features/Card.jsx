// Desc: Card component for displaying features of the website.
export default function Card({title, des, icon}) {
  return (
       <div className="w-full px-12 py-10 h-80 
            rounded-lg shadow-md flex items-center 
            bg-gradient-to-r from-black to-[#202327] 
            group hover:bg-gradient-to-b 
            hover:from-black hover:to-[#1e2024] 
           transition-colors duration-100">
            <div className="flex flex-col gap-8">
            <div>
              <span className="text-5xl text-[#ff014f]">{icon}</span>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-md font-bold text-white">{title}</h4>
              <p className="text-sm base font-light text-gray-400">{des}</p>
            </div>
            </div>

        </div>
      
  )
}
