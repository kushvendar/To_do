import './App.css'
import checked from './images/checked.png'
import icon from './images/icon.png'
import unchecked from './images/unchecked.png'

function App() {
  return (
    <div className='box-border'>
      <div className='w-full min-h-screen p-[10px] bg-linear-135 from-[#153677] to-[#4e085f]'>
          <div className='w-full max-w-[540px] bg-white mt-[100px] mb-[20px] ml-auto mr-auto pt-[40px] pb-[70px] pr-[30px] pl-[30px] rounded-[10px]'>
          <h2 className='text-[#002765] flex items-center mb-[20px] font-extrabold'>
            To-Do List
             <img className='w-[30px] ml-[10px]' src={icon} alt="icon" />
             </h2>
             <div className='flex items-center justify-between bg-[#edeef0] rounded-[30px] pl-[20px] mb-[25px]'><input className='flex-1 p-[10px] bg-transparent' type="text" placeholder='Add your To-do'/>
             <button className='p-[15px] pl-[50px] pr-[50px] bg-[#ff5945] text-white font-[16px] cursor-pointer rounded-[40px]'>Add</button></div>
          </div>
      </div>
    </div>
      )
}

export default App
