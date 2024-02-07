function NoteCard() {
    return (
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative pointer-events-none">
            <span className="text-sm font-medium text-slate-400">
                há 4 dias
            </span>
            <p className="text-sm leading-6 text-slate-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet praesentium quam fugiat corrupti sunt nam quisquam non aspernatur sapiente pariatur rerum assumenda quaerat rem maiores enim quo soluta, iure aperiam?
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
    )
}

export default NoteCard