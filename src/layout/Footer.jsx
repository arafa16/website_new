import {Menus} from './navbar/ListMenu';
import Logo from './navbar/Logo';

const Footer = () => {

    return (
        <div className="relative w-full min-h-20 ">
            <div className="flex justify-center py-0 px-0">
                <div className='h-96 w-full bg-teal-600'>
                    <div className='text-center'>
                        <p className='text-3xl my-10 text-white'>KOPKARLA</p>
                        <hr />
                    </div>
                </div>
                {/* <div className='w-1/3 px-8 py-8'>
                    <Logo className="max-h-20 bg-white" />
                </div>
                <ul className='w-2/3 lg:flex text-white lg:text-sm text-xs bg-gradient-to-t from-teal-800 to-teal-600 py-4'>
                {Menus.map((menu, index)=>(
                    <li key={index} className='lg:mx-3  ml-12 my-4'>
                        {menu.name}
                    </li>
                ))}
                </ul> */}
            </div>
            <div className='text-white text-center bg-white bg-teal-600 py-10'>
                COPYRIGHT © 2019 KOPERASI KONSUMEN KARYAWAN PT APLIKANUSA LINTASARTA
            </div>
        </div>
    )
}

export default Footer;