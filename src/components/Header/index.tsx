import logo from '../../assets/images/logo.svg';
import { GoLocation } from 'react-icons/go';
import { RxMagnifyingGlass } from 'react-icons/rx';

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

        <div className='grid items-center grid-cols-[150px_auto_45px] w-[1135px] border-transparent focus:border-[#f90] focus:border-[2px]'>
          <select
            name="search-options"
            id="search-options"
            className='pr-[10px] pl-[7px] h-[38px] rounded-l-lg flex items-center text-sm text-livid-600 bg-[#EFEFEF} focus:border-[#f90] border-[2px] outline-none'
          >
            <option>Todos</option>
            <option>Alexa Skills</option>
            <option>Alimentos e Bebidas</option>
            <option>Apps e Jogos</option>
            <option>Automotivo</option>
            <option>Bebês</option>
            <option>Beleza</option>
            <option>Beleza de Luxo</option>
            <option>Bolsas, Malas e Mochilas</option>
            <option>Brinquedos e Jogos</option>
            <option>CD e Vinil</option>
            <option>Computadores e Informática</option>
            <option>Cozinha</option>
            <option>Dispositivos Amazon</option>
            <option>DVD e Blu-Ray</option>
            <option>Eletrodomésticos</option>
            <option>Eletrônicos</option>
            <option>Esportes e Aventura</option>
            <option>Eletrônicos</option>
            <option>Ferramentas e Materiais de Construção</option>
            <option>Games</option>
            <option>Instrumentos Musicais</option>
            <option>Jardim e Piscina</option>
            <option>Livros</option>
            <option>Loja Kindle</option>
            <option>Material para Escritório e Papelaria</option>
            <option>Móveis e Decoração</option>
            <option>Pet Shop</option>
            <option>Prime Video</option>
            <option>Produtos Industriais e Científicos</option>
            <option>Programe e Poupe</option>
            <option></option>
            <option>&nbsp;&nbsp;Feminino</option>
            <option>&nbsp;&nbsp;Masculino</option>
            <option>&nbsp;&nbsp;Meninas</option>
            <option>&nbsp;&nbsp;Meninos</option>
            <option>&nbsp;&nbsp;Bebês</option>
            <option>Saúde e Cuidados Pessoa</option>
          </select>
          <input type="text" className='outline-none pr-[10px] pl-[7px] h-[38px] text-md text-[#111] border-transparent focus:border-[#f90] border-[2px]' />
          <button className='bg-[#febd69] pr-[10px] pl-[7px] h-[38px] flex items-center justify-center rounded-r-lg border-[2px] border-[#febd69] active:border-[#f90]'>
            <RxMagnifyingGlass />
          </button>
        </div>
      </div>
    </header>
  );
}
