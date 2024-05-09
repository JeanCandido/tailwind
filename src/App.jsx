import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <div className='h-screen flex flex-col'>
      <header className='bg-zinc-800 p-6'>
        header
      </header>
      <div className='flex flex-1'>
        <aside className=' bg-zinc-950 w-64 p-6'>
          sidebar
        </aside>
        <main className=' bg-zinc-700 flex-1 p-6'>
          main
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default App
