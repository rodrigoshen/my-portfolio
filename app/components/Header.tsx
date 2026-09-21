import Image from "next/image"

interface HeaderInterface {
    onClickScroll : () => void
}

export default function Header(
    { onClickScroll } : HeaderInterface
) {

    return (
        <header
            className="fixed top-0 left-0 flex flex-row justify-around items-center bg-transparent backdrop-blur-xs  w-screen h-20 z-20"
        >
            <div>
                <Image
                           className="" src="/logo-1.png" width={100} height={100} alt="logo_site"/>
            </div>
            <nav
                className="relative flex flex-row gap-10 z-20"
            >
                <button
                onClick={onClickScroll}
                className="font-main"
                >Home</button>
                <a 
                className="font-main"
                href="">Contact</a>
                <a 
                className="font-main"
                href="">Projects</a>
            </nav>
            <div>
                <button>
                    Vamos contruir Algo
                </button>
            </div>
        </header>
    )
}