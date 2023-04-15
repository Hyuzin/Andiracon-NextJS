import React, { useEffect, useRef } from 'react';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) =>{
    if(!visible) {
        return null;
    }
    return (
        <div className='bg-white rounded-xl w-56 absolute top-8 right-0 py-5 flex-col border-2 drop-shadow-sm flex my-3'>
            <div className='flex flex-col gap-4 font-medium'>
                <a href='/Home' className='px-3 text-center text-black hover:underline'>
                    BERANDA
                </a>
                <hr />
                <a className='px-3 text-center text-black hover:underline'>
                    TENTANG
                </a>
                <hr />
                <a className='px-3 text-center text-black hover:underline'>
                    PRODUK
                </a>
                <hr />
                <a className='px-3 text-center text-black hover:underline'>
                    KONTAK
                </a>
            </div>
        </div>
    )
}

export default MobileMenu;