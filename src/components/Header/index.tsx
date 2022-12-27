import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <header className='text-white'>
      <div className="bg-livid-600 p-2 flex items-center justify-center">
        <div className='flex items-center'>
          <img src={logo} alt="Amazon" className='w-[150px]' />
          <small>.com.br</small>
        </div>
      </div>
    </header>
  );
}
