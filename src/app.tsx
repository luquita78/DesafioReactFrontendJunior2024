import React,{useState,useEffect} from "react";

interface Tarefa {
  id: number;
  title: string;
  // Adicione outras propriedades se existirem
}

export default function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await fetch('https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos');
        const data = await res.json();
        setTarefas(data);
      } catch (error) {
        console.error("Erro ao obter tarefas:",error);
      }
    };
    fetchData();
  },[]);
  return (
    <section>
      <h1>Todos</h1>
      <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>{tarefa.title}</li>
        ))}
      </ul>
    </div> 
    </section>
  );
}
