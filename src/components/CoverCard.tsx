import React from 'react';
import Button from './Button'
import Image from 'next/image';

interface CoverCardProps {
    name?: string;
    image: string;
}

const CoverCard: React.FC<CoverCardProps> = ({name, image}) => {
    if (!name) {
        return (
            <div className="relative w-[510px] h-[500px] border-[3px] border-black rounded-md overflow-hidden shadow-[4px_4px_0_0_black] group">
                <Image
                    src={image}
                    alt="cover image"
                    width={510}
                    height={500}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    <Button>Trousers →</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="relative bg-white border-3 shadow-[4px_4px_0_0_black] w-[30rem] h-[30rem] group">
            <div className="w-full h-full relative">
                <Image src={image} alt={name} className="object-cover" fill />
                <h3 className="absolute top-5 text-yellow-500 text-3xl font-bold drop-shadow-lg w-full text-center">
                    {name}
                </h3>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                    <Button>View all →</Button>
                </div>
            </div>
        </div>
    )
}

export default CoverCard