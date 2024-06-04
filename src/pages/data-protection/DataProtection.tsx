import { DataProtectionFAQ } from "@/components/data-protection-faq/DataProtectionFaq";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function DataProtection(){
    return (
        <>
            <section className="flex flex-col items-center w-full justify-center space-y-7">  
                <div className="w-3/4 text-justify leading-relaxed space-y-3 text-lg">
                    <DataProtectionFAQ/>
                </div>
                <div className="w-3/4 space-x-5 font-poppinsMedium">
                    <Button size={"lg"} asChild><Link to={"/report"}>Realizar relato</Link></Button>
                    <Button size={"lg"} asChild><Link to={"/home"}>Voltar</Link></Button>
                </div>
            </section>
        </>
    )
}