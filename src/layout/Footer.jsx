import {Menus} from './navbar/ListMenu';
import Logo from './navbar/Logo';

const Footer = () => {

    return (
        <div className="relative w-full min-h-20 ">
            <div className="flex justify-center py-0 px-0">
                <div className='w-1/3 px-8 py-8'>
                    <Logo className="max-h-20 bg-white" />
                </div>
                <ul className='w-2/3 lg:flex text-white lg:text-sm text-xs bg-gradient-to-t from-teal-800 to-teal-600 py-4'>
                {Menus.map((menu, index)=>(
                    <li key={index} className='lg:mx-3  ml-12 my-4'>
                        {menu.name}
                    </li>
                ))}
                </ul>
            </div>
            <div className='text-white text-center bg-white bg-gradient-to-t from-teal-800 to-teal-600'>
                Kopkarla-@kopkarla.co.id
            </div>
        </div>
    )
}

export default Footer;