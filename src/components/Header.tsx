interface HeaderProps {
    showForm: boolean;
    onToggleForm: () => void;
}

export default function Header( { showForm, onToggleForm } ) 
{
    return (
        <header className="flex justify-between mb-10">
          <div className="flex items-center gap-4">
            <img 
            src="./public/logo.png"
            className="w-17"
            />
            <h1 className="text-5xl uppercase mt-1.5">hoje eu aprendi</h1>
          </div>
            <button 
              onClick={onToggleForm}
              className="bg-[linear-gradient(135deg,#3b82f6,#ef4444,#16a34a,#eab308)] text-xl uppercase rounded-full
              pt-4.25 px-8 pb-4.25 h-14 btn-h"
              >
              { showForm ? 'Fechar' : 'compartilhar um fato' }
            </button>
        </header>
    )
};