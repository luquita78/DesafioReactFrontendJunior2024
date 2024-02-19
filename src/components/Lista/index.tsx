import React, {useState,useEffect} from "react";


interface Tarefa {
    id: number;
    item: string;
    title: string;
    isDone: boolean;
}

export function BuscandoDados (){

    const [dados, setDados] = useState<Tarefa[]>([]);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await fetch("/db.json");

                const jsonTodo = await res.json();
            
                setDados(jsonTodo.todos);
                
            } catch (error) {
                console.error("Erro ao obter tarefas:",error);
            }
            
        }
        fetchData();
    },[]);

    return(
        <>
            
            <ul>
                {dados.map(item =>
                    <li key={item.id}>
                        {item.title} - {item.isDone ? 'Concluído': 'Não concluído'}
                    </li>
                    )}
            </ul>
        </>
    )
}