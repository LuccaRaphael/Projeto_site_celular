import Menu from '../Menu/menu';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className='empresa'>
                    <span>Tech Tudo</span>
                </div>
                <div>
                    <Menu />
                </div>
            </div>
        </header>
    );
}
