export default function NewItem( 
    {fact, source, category, votes_interesting, votes_mindblowing, votes_false}: {fact:string, source: string, 
        category: string, votes_interesting: number, votes_mindblowing: number, votes_false: number} 
) {
    return (
        <>
          <div>
            <h1>{fact}</h1>
            <h2>{category}</h2>
            <p>{votes_interesting}</p>
            <p>{votes_mindblowing}</p>
            <p>{votes_false}</p>
            <a href={source}>Fonte</a>
          </div>
        </>
    );
};