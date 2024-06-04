import { Outlet } from "react-router-dom";
import { HeaderLayout } from "./components/header-layout/LayoutHeader";
import { MainTitle } from "./components/main-title/MainTitle";
import { Footer } from "./components/footer/Footer";

export function App (){
    return (
        <>
            <HeaderLayout/>
            <MainTitle title='Canal de ética Qualirede'/>
            <main className="space-y-14">
                <Outlet/>
                <Footer/>
            </main>
        </>
    )
}