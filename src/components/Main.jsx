import { Button } from "@material-tailwind/react";

function Main() {
    return (
        <main className="container mx-auto max-w-screen-xl px-6 py-4">
            <section className="flex items-center justify-between mb-8">
                <div className="w-1/2 pr-4">
                    <h2 className="text-2xl font-bold text-gray-800">Bem-vindo à minha aplicação!</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Seção principal da aplicação: explicar sobre a pesquisa para os usuários.
                    </p>
                    <Button>Formulário</Button>
                </div>
                <div className="w-1/2 pl-4">
                    <img src="https://images.unsplash.com/photo-1537963447914-dbc04b81de27?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem" className="w-full h-auto rounded-lg" />
                </div>
            </section>
            <section className="flex items-center justify-between mb-8">
                <div className="w-1/2 pl-4">
                    <img src="https://images.unsplash.com/photo-1537963447914-dbc04b81de27?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-1/2 pl-4">
                    <img src="https://images.unsplash.com/photo-1537963447914-dbc04b81de27?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem" className="w-full h-auto rounded-lg" />
                </div>
            </section>
        </main>
    );
}

export default Main;
