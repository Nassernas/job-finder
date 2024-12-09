import Header from "../components/header";
import Footer from "../components/footer";
import {raleway} from "../styles/fonts";

export default function Page() {

    return (
        <div className={`flex flex-col min-h-screen ${raleway.className}`}>
            <Header />
            <main className='flex-grow'>
                <h1>Find Jobs</h1>
            </main>
            <Footer />
        </div>
         

    );
}