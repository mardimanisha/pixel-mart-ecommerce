import React from 'react';
import Button from './Button'

interface CoverCardProps {
    name?: string;
    image: string;
}

const CoverCard: React.FC<CoverCardProps> = ({name, image}) => {
    return (
        <div className={`relative bg-white border-3 shadow-[4px_4px_0_0_black] ${name ? " w-[30rem] h-[30rem]" : " w-[40rem] h-[45rem]"} group`}>
            <div className='w-full h-full relative'>
                <img src={image} alt={name} className='w-full h-full object-cover' />
                {!name && <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>}
                <h3 className={`absolute top-5 text-yellow-500 text-3xl  font-bold drop-shadow-lg w-full text-center`}>{name}</h3>
     
                <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2'>
                    <Button>View all →</Button>
                </div>

            </div>  
        </div>
    )
}

export default CoverCard
