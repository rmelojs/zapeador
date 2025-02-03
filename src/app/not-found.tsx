import Link from "next/link"

export default function NotFound() {
    return (
        <div className="container mx-auto h-screen flex flex-col">
            <header className="flex-shrink-0">
                <h1>Página não encontrada!</h1>
                
                <p>A página que você tentou acessar não existe.</p>

                <Link href="/">Voltar para a página inicial</Link>
            </header>
        </div>
    )
}