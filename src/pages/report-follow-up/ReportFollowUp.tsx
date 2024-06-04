import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

export function ReportFallowUp(){
    return (
        <section className="flex flex-col items-center w-full justify-center space-y-7">  
            <div className="w-3/4 text-justify leading-relaxed space-y-3 text-lg">
                <h2 className="font-poppinsExtrabold text-3xl">
                    Acompanhar relato
                </h2> 
                <p>
                    Para acompanhar o andamento do seu relato, por favor digite o número do seu protocolo no campo abaixo e clique no botão <span className="font-bold">"Consultar protocolo":</span>
                </p>
            </div>
            <div className="w-3/4 text-lg space-y-1">
                <Label htmlFor="" className="font-bold text-base text-zinc-700">Informe o protocolo</Label>
                <Input type="text" className="w-52 h-12"/>
            </div>
            <div className="w-3/4 space-x-5 font-poppinsMedium">
                <Button size={"lg"} asChild><Link to={""}>Consultar protocolo</Link></Button>
                <Button size={"lg"} asChild><Link to={"/home"}>Voltar</Link></Button>
            </div>
        </section>
    )
}