import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import "./app.css";

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
    <section className="todoapp">
      <Header/>
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
