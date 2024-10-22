export default function Navbar(){
    return(
        <>
            <main className="absolute w-full top-6 flex items-center justify-center">
                <div className="h-9 w-[40%] bg-zinc-950/80 rounded-3xl flex items-center overflow-hidden">
                    <div className="flex items-center justify-between w-full h-full">
                        <button className="text-[14px] cursor-pointer hover:bg-zinc-800/90 transition-colors duration-200 text-zinc-50 font-medium tracking-[0.01rem] h-full w-full">Inicio</button>
                        <button className="text-[14px] cursor-pointer hover:bg-zinc-800/90 transition-colors duration-200 text-zinc-50 font-medium tracking-[0.01rem] h-full w-full">Serviços</button>
                        <button className="text-[14px] cursor-pointer hover:bg-zinc-800/90 transition-colors duration-200 text-zinc-50 font-medium tracking-[0.01rem] h-full w-full">Avaliações</button>
                        <button className="text-[14px] cursor-pointer hover:bg-zinc-800/90 transition-colors duration-200 text-zinc-50 font-medium tracking-[0.01rem] h-full w-full">Sobre nós</button>
                        <button className="text-[14px] cursor-pointer hover:bg-zinc-800/90 transition-colors duration-200 text-zinc-50 font-medium tracking-[0.01rem] h-full w-full">Contato</button>
                    </div>
                </div>
            </main>
        </>
    )
}