import { useReportCheckboxStore } from "@/store/reportCheckboxStore";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ReportCheckbox } from "@/components/report-checkbox/ReportCheckbox";

export function Report(){
    const checkboxState = useReportCheckboxStore(state => state.isChecked)

    return (
            <section className="flex flex-col items-center w-full justify-center space-y-7"> 
            <div className="w-3/4 text-justify leading-relaxed space-y-4 text-lg">
                <h2 className="font-poppinsExtrabold text-3xl">
                    Realizar relato 
                </h2> 
                <p>
                    A veracidade das informações providas é uma responsabilidade do relator. 
                    Todas as informações serão verificadas durante o processo de averiguação, e as 
                    ações decorrentes serão tomadas a critério exclusivo da Qualirede.            
                </p>
                <p className="font-poppinsExtrabold text-xl">
                    Proteção de Dados
                </p>
                <p>
                    Todas as informações aqui registradas serão tratadas de forma confidencial por sua organização 
                    e pela Aliant, uma empresa independente e especializada na captação e tratamento de denúncias.
                </p>
                <p>
                    A captação dessas informações tem por finalidade a apuração de possíveis condutas consideradas 
                    antiéticas ou que violem os princípios éticos e padrões de conduta e/ou a legislação vigente.            
                </p>
                <p>
                    Todos os relatos serão armazenados por tempo indeterminado para realização do processo de 
                    apuração e deliberação sobre o caso, observando-se as exigências legais específicas. 
                    Além disso, informações consolidadas serão utilizadas para geração de estatísticas da operação, 
                    mas nenhum nome envolvido ou dado pessoal será exposto. 
                </p>
                <p>
                    Eventuais dados pessoais informados serão tratados conforme as normativas estabelecidas 
                    pela legislação vigente no que diz respeito a proteção de dados pessoais, e serão seguidas 
                    pela Aliant no processo de captação e pela sua organização no processo de apuração dos relatos 
                    aqui registrados.
                </p>
                <p>
                    Ao clicar em "Concordo" você indica ciência e concordância com o fornecimento de informações 
                    que serão única e exclusivamente utilizadas para esta finalidade.
                </p>
                <p>
                    Se desejado, posteriormente, poderá exercer seus direitos de acesso, retificação, 
                    cancelamento e oposição.
                </p>
            </div>
                    <div className="w-3/4 space-y-8 font-poppinsMedium flex-col">
                        <ReportCheckbox/>
                        <Button size={"lg"} disabled={!checkboxState}><Link to={"/report-form"}>Prosseguir</Link></Button>
                    </div>

            </section>
    )
}