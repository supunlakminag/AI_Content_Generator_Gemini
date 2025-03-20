import react from 'react';
import { Search } from 'lucide-react'


function SearchSection({onSearchInput}:any){
  return(
    <div className="p-10 bg-gradient-to-br from-orange-300 via-orange-500 to-orange-300 flex flex-col  items-center justify-center " >
      <h2 className="text-4xl font-bold text-white   ">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div>
        <div className="flex gap-4 border rounded-md items-center p-2 my-2 bg-amber-50 w-full">
        <Search/>
        <input type="text"  placeholder="Search here..." className=" w-full outline-none" onChange={(event)=> onSearchInput(event.target.value)} />

        </div>
      </div>
    </div>
  )
}

export default SearchSection;
