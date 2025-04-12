import React from 'react'


const Sidebar = () => {
    return (
        <aside className='bg-white fixed right-0 w-32 border-l-5 h-full py-30'>
            <div className='w-full flex flex-col gap-8 justify-center items-center'>
                <svg viewBox="0 0 256 256" className="h-12 w-12 cursor-pointer">
                    <rect fill="none" height="100" width="100" />
                    <path
                         d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                        fill={'#fff'}
                        stroke={'#000'}
                        strokeWidth="20"
                    />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                    height="50px" viewBox="0 -960 960 960" width="50px"
                    fill="#1f1f1f"
                    className='cursor-pointer'>
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
                        strokeWidth="20"
                    />
                </svg>
            </div>

        </aside>
    )
}

export default Sidebar