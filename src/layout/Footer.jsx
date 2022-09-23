import {Menus} from './navbar/ListMenu';
import Logo from './navbar/Logo';

const Footer = () => {

    return (
        <div className="relative w-full min-h-20 ">
            <div className="flex justify-center py-0 px-0">
                <div className='h-96 w-full flex '>
                    {/* <div className='w-1/5 h-full bg-teal-800 px-10 pt-11'>
                        <Logo className="max-h-20 bg-white mb-4 " />
                        <p className='text-white mb-4'>HEAD OFFICE</p>
                        <p className='text-white text-sm mb-4 leading-8'>
                        Gedung KOPKARLA 1
                        Jl. Lebak Bulus Raya No.7
                        Kel. Lebak Bulus Kec. Cilandak
                        Jakarta Selatan, DKI Jakarta 12440
                        </p>
                    </div> */}
                    {/* <div className='w-1/5 h-full bg-teal-700 px-10 pt-[3rem]'>
                        <p className='text-white text-xl leading-10 mb-5'>
                            Contact Us :
                        </p>
                    <p className='text-white text-sm leading-10'>
                        Telp.  021 7590 9424<br/>
                        <hr/>
                        Fax.  021 2920 3466<br/>
                        <hr/>
                        info  @kopkarla.co.id
                        <hr/>
                        </p>
                    </div> */}
                    <div className='w-full h-full bg-teal-600 px-10 pt-[3rem] '>
                        <p className='lg:mx-3 text-xl text-white'>MENU UTAMA <hr /></p>
                        <ul className='flex'>
                            {Menus.map((menu, index)=>(
                                <li key={index} className='lg:mx-9 text-xs text-white my-4'>
                                    {menu.name} <hr />
                                    <ul>
                                    {menu.subs ? 
                                    menu.subs.map((sub, index)=>(
                                        
                                            <li className='my-3'>{sub.name} <hr /></li>
    
                                    ))
                                    :
                                    ''
                                }
                                    </ul>
                                </li>
                            ))}
                        </ul>
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
            <div className='text-sm text-white text-center bg-gradient-to-t from-teal-800 to-teal-600 py-3'>
                COPYRIGHT © 2019 KOPERASI KONSUMEN KARYAWAN PT APLIKANUSA LINTASARTA
            </div>
        </div>
    )
}

export default Footer;