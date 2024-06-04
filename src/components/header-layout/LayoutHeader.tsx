import { Header } from "@/components/header/Header";
import { NavMenu } from "../navmenu/NavMenu";

export function HeaderLayout(){
    return (
        <>
            <div className="w-full bg-primary min-h-44 flex flex-col justify-center items-center space-y-7">
                <Header/>
                <NavMenu menuItems={[
                    {title: "Página inicial", href: "/demo_qr/home"},
                    {title: "Realizar Relato", href: "/demo_qr/report"},
                    {title: "Acompanhar relato", href: "/demo_qr/report-follow-up"},
                    {title: "Proteção de dados", href: "/demo_qr/data-protection"},
                    {title: "Código de conduta", href: "/demo_qr/home"}
                    ]}/>
            </div>
        </>
    )
}