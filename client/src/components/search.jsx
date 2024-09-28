export default function Search(){

    return(
        <div>
            <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
                <div>Anywhere</div>
                <div className='border-l border-gray-300'></div>
                <div>Any week</div>
                <div className='border-l border-gray-300'></div>
                <div>Add guests</div>
                <div className='border-l border-gray-300'></div>
                <button className='bg-primary text-white p-1 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}