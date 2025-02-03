import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col p-4 items-center justify-center">
      <h1 className="mb-8 text-2xl pt-8">Página não encontrada!</h1>

      <p className="mb-8">A página que você tentou acessar não existe.</p>

      <Link href="/">
        <span className="border-2 border-solid p-2 rounded-md ">
          Voltar para a página inicial
        </span>
      </Link>
    </div>
  );
}
