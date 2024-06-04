import { Separator } from "../ui/separator"

interface Props {
    title: string 
}

export function MainTitle({title}:Props){
    return (
        <div className="w-full text-center flex flex-col justify-center items-center gap-2 text-5xl py-12 text-primary font-poppinsExtrabold">
            <h1>{title}</h1>
            <Separator className="bg-secondary w-64 h-1 rounded"/>
        </div>
    )
}