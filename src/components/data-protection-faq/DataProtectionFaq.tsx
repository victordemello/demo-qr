import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

export function DataProtectionFAQ(){
    return (
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
            Qual o compromisso da minha organização com relação a proteção de dados pessoais?
          </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p> 
                O bom funcionamento de um Canal de Ética preza pela confidencialidade de todas as informações obtidas. Reiteramos que o objetivo do canal é apurar possíveis condutas antiéticas e, dessa forma, garantir um ambiente seguro e profissional para a manifestação da informação, com anonimato e confidencialidade garantidos.
            </p>
            <p>
                Portanto, todas as informações são protegidas e qualquer dados pessoal fornecido será tratado de acordo com a legislação em vigor. 
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-poppinsSemibold text-start">O que são dados pessoais?</AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                De acordo com a lei, consideram‑se dados pessoais quaisquer informações relativas a uma pessoa individual identificada ou identificável. Por exemplo: um nome, um número de identificação ou a um ou mais elementos específicos da sua identidade física, fisiológica, psíquica, econômica, cultural ou social.
            </p>
            <p>
                O objetivo do canal não é obter informações pessoais, porém, devido a natureza da denúncia, isso poderá acontecer. Neste caso, todas as informações serão protegidas e tratadas de acordo com a lei.            
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
              Quais informações devo registrar em meu relato?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                Você deve incluir em seu relato todas as informações necessárias para a apuração objetiva do caso, detalhando a situação, quando, como e onde ela ocorreu, e quem são as pessoas envolvidas. Além disso, informações sobre testemunhas e evidências/provas que possam ser obtidas são valiosas e devem ser informadas. 
            </p>
            <p>
                Você não deve incluir em seu relato quaisquer detalhes de sua vida pessoal ou dos envolvidos (como por exemplo, detalhes sobre o estado de saúde, orientação sexual, escolha religiosa, entre outros), a não ser que tais informações sejam necessárias para a compreensão e apuração do caso.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
                Quem terá acesso ao meu relato e aos meus dados?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                As informações registradas no canal são recebidas por uma empresa independente e especializada, a Aliant, assegurando sigilo absoluto e o tratamento adequado de cada situação pela alta administração da sua organização, sem conflitos de interesses. 
            </p>
            <p>
                A Qualirede garante a sua confidencialidade, para que o tratamento da denúncia ocorra preservando sua identidade. Exclusivamente em caso de detecção algo ilícito, os seus dados podem ser comunicados a terceiros (Juízes e tribunais, forças de segurança ou administração pública), para a proteção rigorosa dos interesses públicos. 
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
                Qual o compromisso da minha organização com relação a proteção de dados pessoais?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                O bom funcionamento de um Canal de Ética preza pela confidencialidade de todas as informações obtidas. Reiteramos que o objetivo do canal é apurar possíveis condutas antiéticas e, dessa forma, garantir um ambiente seguro e profissional para a manifestação da informação, com anonimato e confidencialidade garantidos.
            </p>
            <p>
                Portanto, todas as informações são protegidas e qualquer dados pessoal fornecido será tratado de acordo com a legislação em vigor.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
                O que são dados pessoais?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                De acordo com a lei, consideram‑se dados pessoais quaisquer informações relativas a uma pessoa individual identificada ou identificável. Por exemplo: um nome, um número de identificação ou a um ou mais elementos específicos da sua identidade física, fisiológica, psíquica, econômica, cultural ou social.
            </p>
            <p>
                O objetivo do canal não é obter informações pessoais, porém, devido a natureza da denúncia, isso poderá acontecer. Neste caso, todas as informações serão protegidas e tratadas de acordo com a lei.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
                Quais informações devo registrar em meu relato?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                Você deve incluir em seu relato todas as informações necessárias para a apuração objetiva do caso, detalhando a situação, quando, como e onde ela ocorreu, e quem são as pessoas envolvidas. Além disso, informações sobre testemunhas e evidências/provas que possam ser obtidas são valiosas e devem ser informadas.
            </p>
            <p>
                Você não deve incluir em seu relato quaisquer detalhes de sua vida pessoal ou dos envolvidos (como por exemplo, detalhes sobre o estado de saúde, orientação sexual, escolha religiosa, entre outros), a não ser que tais informações sejam necessárias para a compreensão e apuração do caso.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
                Quem terá acesso ao meu relato e aos meus dados?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                As informações registradas no canal são recebidas em sigilo absoluto e o tratamento adequado de cada situação pela alta administração, sem conflitos de interesses.                     
            </p>
            <p>
                A Qualirede garante a sua confidencialidade, para que o tratamento da denúncia ocorra preservando sua identidade. Exclusivamente em caso de detecção algo ilícito, os seus dados podem ser comunicados a terceiros (Juízes e tribunais, forças de segurança ou administração pública), para a proteção rigorosa dos interesses públicos.                     
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
                O que será feito com meu relato e quando será excluído?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                As informações de relatos serão armazenadas por tempo indeterminado com objetivo de realizar o processo de apuração e conclusão do caso.
            </p>
            <p>
                Além disso, informações consolidadas serão utilizadas para geração de estatísticas da operação, mas nenhum nome envolvido ou dado pessoal será exposto.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
                Qual meu dever?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                Seu dever é utilizar este canal de boa-fé e registrar informações verdadeiras, apresentadas com riqueza de detalhes e suporte de evidências, sempre que possível.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-11">
            <AccordionTrigger className="text-xl font-poppinsSemibold text-start">
                Quais são os meus direitos?
            </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            <p>
                <span className="font-poppinsBold">• Direito de ser excluído:</span> Se desejado, você pode solicitar que suas informações pessoais sejam excluídas física e logicamente das bases de dados do Canal. Caso queira solicitar a exclusão de informações sobre algum registro que tenha feito, por favor, acesse o campo “Acompanhar relato” presente neste site, informe seu protocolo e um resumo da situação que deseja excluir.
            </p>
            <p>
                <span className="font-poppinsBold">• Direito a retificação dos dados:</span> Se desejado, você pode solicitar informações sobre o processamento e armazenamento dos seus dados, incluindo: tempo de retenção, dados de contato do responsável pelos dados pessoais na organização, justificativa para manter o dado pessoal armazenado.
            </p>
            <p>
                Esta solicitação pode ser feita diretamente ao responsável pelos dados pessoais na sua organização (Oficial de Proteção de Dados/Data Privacy Officer), ou via o menu “Acompanhar relato” deste site (consulte seu protocolo e no campo de observações registre sua solicitação de informações).
            </p>
            <p>
                Reiteramos que as informações registradas no Canal são recebidas, verificadas e analisadas de forma isenta, sigilosa e sem conflitos de interesse. Diversos cuidados são observados para preservar a privacidade de denunciantes e denunciados.
            </p>
          </AccordionContent>
        </AccordionItem>


      </Accordion>
    )
}