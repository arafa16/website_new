import {Menus} from './navbar/ListMenu';
import Logo from './navbar/Logo';

const Footer = () => {

    return (
        <div className="min-h-20 bg-gray-100 ">
            <div className="mb-4 mx-4 flex">
                <div className='bg-teal-700 w-1/4 py-4 px-6 rounded-tr-[60px] rounded-bl-[60px]'>
                    <Logo className="max-h-20 bg-white mb-4 " />
                    <p className='text-white mb-4'>HEAD OFFICE</p>
                    <p className='text-white text-sm mb-4 leading-8'>
                    Gedung KOPKARLA 1
                    Jl. Lebak Bulus Raya No.7
                    Kel. Lebak Bulus Kec. Cilandak
                    Jakarta Selatan, DKI Jakarta 12440
                    </p>
                    <p className='text-white text-sm leading-10'>
                        Telp.  021 7590 9424<br/>
                        <hr/>
                        Fax.  021 2920 3466<br/>
                        <hr/>
                        info  @kopkarla.co.id
                        <hr/>
                    </p>
                </div>
                <div className='bg-teal-800 w-3/4 ml-4 py-4 px-6 text-white leading-8 rounded-bl-[70px] rounded-tr-[70px]'>
                    <p className='ml-2 text-2xl mb-4'>WE ARE ALWAYS READY</p>
                    <p className='ml-2'>REQUEST A CALL BACK</p>
                    <p className='ml-2'>For further information on our product and services, please contact us at the following address or simply fill in the form below and our representative will respond to you as soon as possible.</p>
                    <form className='text-black mt-4 relative flex flex-wrap'>
                        <div className='mb-4 w-[30.2rem] mx-2'>
                            <input type='text' className='w-full px-4' placeholder='Name' />
                        </div>
                        <div className='mb-4 w-[30.2rem] mx-2'>
                            <input type='text' className='w-full px-4' placeholder='Phone' />
                        </div>
                        <div className='mb-4 w-[30.2rem] mx-2'>
                            <input type='text' className='w-full px-4' placeholder='Company Name' />
                        </div>
                        <div className='mb-4 w-[30.2rem] mx-2'>
                            <input type='text' className='w-full px-4' placeholder='Email' />
                        </div>
                        <div className='mb-4 w-[61.4rem] h-20 ml-2'>
                            <textarea type='text' className='w-full px-4' placeholder='Comments or Questions' />
                        </div>
                        <div className='w-full text-right mr-2 mb-4'>
                            <button className='bg-white hover:bg-gray-300 text-teal-800 font-bold py-0 px-4 rounded ml-2 w-96 '>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className="flex justify-center py-0 px-0 ">
                <div className='h-full w-full flex '>
                    <div className='w-full h-full bg-teal-700 px-10 pt-[3rem] '>
                        <p className='lg:mx-3 text-xl text-white'>MENU UTAMA <hr /></p>
                        <ul className='lg:flex'>
                            {Menus.map((menu, index)=>(
                                <li key={index} className='lg:mx-9 text-xs text-white my-4'>
                                    {menu.name} <hr />
                                    <ul>
                                    {menu.subs ? 
                                    menu.subs.map((sub, index)=>(
                                            <li className='lg:my-3 my-4 hidde'>{sub.name} <hr /></li>
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
            </div>
            <div className='text-sm text-white text-center bg-gradient-to-t from-teal-900 to-teal-700 py-3'>
                COPYRIGHT © 2019 KOPERASI KONSUMEN KARYAWAN PT APLIKANUSA LINTASARTA
            </div>
        </div>
    )
}

export default Footer;