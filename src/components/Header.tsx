interface HeaderProps {
    showForm: boolean;
    onToggleForm: () => void;
}

export default function Header( { showForm, onToggleForm } ) 
{
    return (
        <>
          <h1>today i learned</h1>
          <button onClick={onToggleForm}>
            { showForm ? 'Fechar' : 'Novo Fato' }
          </button>
        </>
    )
};