import React from 'react';

function TopButtons({setQuery}) {

    const cities=[
        {
            id:1,
            title:'Kurnool'
        },
        {
            id:2,
            title:'Proddatur'
        },
        {
            id:3,
            title:'Nandyal'
        },

    ]
  return (
    <>
    <div className="flex items-center text-white text-xl font-medium justify-center bg-black">Weather Forecast App</div>
    <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
            <button key={city.id} 
            className="text-white text-lg font-medium"
            onClick={() => setQuery({ q: city.title })}>
                {city.title}
            </button>
        ))}
    </div>
    </>
  )
}

export default TopButtons;