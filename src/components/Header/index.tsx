import logo from '../../assets/images/logo.svg';
import { GoLocation } from 'react-icons/go';

export default function Header() {
  return (
    <header className='text-white'>
      <div className="bg-livid-600 p-2 flex items-center gap-4 cursor-pointer">
        <div className='p-2 flex items-center rounded-[2px] border-[1px] border-livid-600 hover:border hover:border-white'>
          <img src={logo} alt="Amazon" className='w-[97px] h-[30px]' />
          <small>.com.br</small>
        </div>

        <div className='p-2 rounded-[2px] hover:border hover:border-white flex flex-col leading-tight cursor-pointer'>
          <p className='ml-4 text-sm '>Olá</p>
          <div className='flex items-center gap-1' >
            <GoLocation />
            <strong className='text-sm'>Selecione o endereço</strong>
          </div>
        </div>
      </div>
    </header>
  );
}
