import {QualiredeLogo} from "@/assets/logo/QualiredeLogo"

import { FaWhatsapp } from "react-icons/fa";

export function Header(){
    return (
        <header className="w-3/4 flex justify-between items-center text-primary-foreground">
                <QualiredeLogo className="w-60"/>
                <div className="flex-col justify-end text-right">
                    <p className="text-2xl font-poppinsExtrabold">
                        <span className="text-secondary">Ligue:</span> 0800 450 4505
                    </p>
                    <a href="https://api.whatsapp.com/send/?phone=5511986880043&text&type=phone_number&app_absent=0" target="_blank">
                        <div className="flex gap-2 justify-end items-center">
                            <FaWhatsapp className="text-2xl"/>
                            <p className="text-2xl font-poppinsExtrabold">
                                11 98688-0043
                            </p>               
                        </div>
                    </a>
                    <p className="text-sm">
                        24h por dia
                    </p>
                </div>
        </header>   
    )
}