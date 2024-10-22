import Navbar from "./navbar";

export default function InitePage() {
    return (
        <>
            <Navbar/>
            <main className="bg-[url(../assets/fundoInicial.svg)] w-screen h-screen bg-center bg-cover">
                <div className="bg-[url(../assets/verdadeiraLogo.svg)] w-[500px] h-[500px] bg-center bg-cover bg-no-repet"></div>
            </main>
        
        </>
    )
}