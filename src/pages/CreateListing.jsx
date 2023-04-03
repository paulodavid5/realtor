import { useState } from "react"

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: '',
        description: '',
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
    }) 

    const {type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice} = formData
    function onChange() {

    }
  return (
    <main className="max-w-md px-2 mx-auto mb-6">
        <h1 className="text-3xl text-center mt-6 font-bold">Create a List</h1>
        <form>
            <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
            <div className="flex">
                <button type="button" id="type" value='sale' onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === 'rent' ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} >Sell</button>
                <button type="button" id="type" value='rent' onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === 'sale' ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} >Rent</button>
            </div>
            <p className="text-lg mt-6 font-semibold">Name</p>
            <input type="text" id="name" value={name} onChange={onChange} placeholder='Name' maxLength='32' minLength='10' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />
            <div className="flex space-x-6 mb-6">
                <div>
                <p className="text-lg mt-6 font-semibold">Beds</p>
                <input type="number" id="bedrooms" value={bedrooms} onChange={onChange} min='1' max='50' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-slate-600 focus:text-gray-700 focus:bg-white text-center' />
                </div>
                <div>
                <p className="text-lg mt-6 font-semibold">Toilets</p>
                <input type="number" id="bathrooms" value={bathrooms} onChange={onChange} min='1' max='50' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-slate-600 focus:text-gray-700 focus:bg-white text-center' />
                </div> 
            </div>
            <p className="text-lg mt-6 font-semibold">Parking spot</p>
            <div className="flex">
                <button type="button" id="parking" value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} >Yes</button>
                <button type="button" id="parking" value={false} onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} >No</button>
            </div>
            <p className="text-lg mt-6 font-semibold">Furnished</p>
            <div className="flex">
                <button type="button" id="furnished" value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} >Yes</button>
                <button type="button" id="furnished" value={false} onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} >No</button>
            </div>
            <p className="text-lg font-semibold mt-6">Address</p>
            <textarea type="text" id="address" value={address} onChange={onChange} placeholder='Address' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />
            <p className="text-lg mt-6 font-semibold">Description</p>
            <textarea type="text" id="description" value={description} onChange={onChange} placeholder='Description' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />
            <p className="text-lg mt-6 font-semibold">Offer</p>
            <div className="flex mb-6">
                <button type="button" id="offer" value={offer} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} >Yes</button>
                <button type="button" id="offer" value={offer} onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} >No</button>
            </div>
                <p className="text-lg mt-6 font-semibold">Regular Price</p>
                
            <div className="flex w-full">
                <input type="number" id="regularPrice" value={regularPrice} onChange={onChange} min='50' max='400000000' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-slate-600 focus:text-gray-700 focus:bg-white text-center' />
                {type === 'rent' && (
                    <div className="flex justify-center items-center">
                        <p className="text-md w-full whitespace-nowrap ml-6">$ / Month</p>
                    </div>
                )}
            </div> 
            {offer && (
                <div>
                    <p className="text-lg mt-6 font-semibold">Discounted Price</p>
                    <div  className="flex w-full">
                <input type="number" id="discountedPrice" value={discountedPrice} onChange={onChange} min='0' max='40000000000' required={offer} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-slate-600 focus:text-gray-700 focus:bg-white text-center' />
                {type === 'rent' && (
                        <div className="flex justify-center items-center">
                            <p className="text-md w-full whitespace-nowrap ml-6">$ / Month</p>
                        </div>
                )}
                </div>
                </div>
            )}
            <div className="mb-6">
            <p className="text-lg mt-6 font-semibold">Images</p>
            <p className="text-gray-600">The first image will be the cover(max6)</p>
            <input type="file" id="images" onChange={onChange} accept='.jpg, .png, .jpeg' multiple required className='w-full px-3 py-1.5 mt-1 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:border-slate-600 focus:text-gray-700 focus:bg-white text-center' />
            </div>
            <button type="submit" className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create Listing</button>
        </form>
        
    </main>
  )
}
