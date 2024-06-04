import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export function Home(){
    return (
        <section className="flex flex-col items-center w-full justify-center space-y-7">  
            <div className="w-3/4 text-justify leading-relaxed space-y-3 text-lg">
            <p>
                Este é um canal exclusivo da Qualirede para comunicação segura e, se desejada, anônima, de condutas consideradas antiéticas ou que violem os princípios éticos e padrões de conduta e/ou a legislação vigente.
            </p>
            <p>
                As informações aqui registradas serão recebidas por uma empresa independente e especializada, a Aliant, assegurando sigilo absoluto e o tratamento adequado de cada situação pela alta administração Qualirede, sem conflitos de interesses.
            </p>
            <p>
                Se desejar, seu relato pode ser feito também pelo 0800 450 4505 ou pelo whatsapp 11 98688-0043 de segunda a domingo, 24h por dia.
            </p>
            </div>
            <div className="w-3/4 space-x-5 font-poppinsMedium">
                <Button size={"lg"} asChild><Link to={"demo_qr/report"}>Realizar relato</Link></Button>
                <Button size={"lg"} asChild><Link to={"demo_qr/report-follow-up"}>Acompanhar relato</Link></Button>
            </div>
        </section>
    )
}