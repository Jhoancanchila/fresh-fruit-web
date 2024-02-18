/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";

const InputSearch = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const search = searchParams.get("q") ?? "";
  const handleSearch = (e) => {
    setSearchParams({q: e.target.value})
  };

  return (
    <div className='max-w-[400px] flex items-center border rounded bg-white mb-6'>
      <svg width="24" height="24" fill="none" aria-hidden="true" className="ml-3 flex-none text-gray-500"><path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
      <input onChange={handleSearch} value={search} className='py-3 px-2 w-full  outline-none rounded text-gray-500' type="text" placeholder='Search'/>
    </div>
  )
}

export default InputSearch