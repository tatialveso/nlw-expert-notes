import logo from './assets/logo.svg'

function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={ logo } alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />
    </div>
  )
}

export default App
