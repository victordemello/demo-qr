import { Header } from "@/components/header/Header";
import { NavMenu } from "../navmenu/NavMenu";

export function HeaderLayout(){
    return (
        <>
            <div className="w-full bg-primary min-h-44 flex flex-col justify-center items-center space-y-7">
                <Header/>
                <NavMenu menuItems={[
                    {title: "Página inicial", href: "/home"},
                    {title: "Realizar Relato", href: "/report"},
                    {title: "Acompanhar relato", href: "/report-follow-up"},
                    {title: "Proteção de dados", href: "/data-protection"},
                    {title: "Código de conduta", href: "/home"}
                    ]}/>
            </div>
        </>
    )
}