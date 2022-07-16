import Sidebar from './components/Navigation/Sidebar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
    return (
        <ShoppingCartProvider>
            <Header />
            <div className="container mx-auto mt-10 mb-16 flex p-4">
                <Sidebar />
                <Main />
            </div>
            <Footer />
        </ShoppingCartProvider>
    );
}

export default App;
