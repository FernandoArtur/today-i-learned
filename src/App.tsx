import type { Fact } from "./types";
import NewItem from "./NewItem";

export default function App() {
  const facts: Fact[] = [{
    id: 1,
    text: 'A Digital College tem o melhor curso de programação de Fortaleza',
    source: 'https://meusonho.com',
    category: 'Tecnologia',
    votes_interesting: 15,
    votes_mindblowing: 1,
    votes_false: 0,
    created_at: '2026-05-05'
  }, {
    id: 2,
    text: 'Neymar é acusado de tentativa de homicidio estimulada por racismo contra pessoa negra e pobre.',
    source: 'https://g1.com',
    category: 'Esportes',
    votes_interesting: 0,
    votes_mindblowing: 0,
    votes_false: 535,
    created_at: '2026-05-04'
  }, {
    id: 3,
    text: 'Virginia foi para balada com Zé Felipe e houve troca de afetos publicos.',
    source: 'http://leodias.com',
    category: 'Entretenimento',
    votes_interesting: 2,
    votes_mindblowing: 3,
    votes_false: 5,
    created_at: '2026-04-01'
  }];

  return (
    <>
      {facts.map(fact => <NewItem key={fact.id} fact={fact.text} category={fact.category} 
      votes_interesting={fact.votes_interesting} votes_mindblowing={fact.votes_mindblowing} 
      votes_false={fact.votes_false} source={fact.source}/>)}
    </>
  );
};