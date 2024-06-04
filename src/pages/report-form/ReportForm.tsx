import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useForm } from "react-hook-form";

export function ReportForm() {
    const form = useForm();

    return (
        <>
            <section className="flex flex-col items-center w-full justify-center space-y-7">  
            <div className="w-3/4 text-justify leading-relaxed space-y-3 text-lg">
                <h2 className="font-poppinsExtrabold text-3xl">
                    Realizar relato
                </h2> 
                <p>
                    Você pode escolher fazer um relato anônimo ou pode identificar-se.
                </p>
                <p>
                    A opção identificada é voltada para os casos em que o relator se disponibiliza a ser contatado para esclarecimento de possíveis dúvidas sobre o relato fornecido.
                </p>
                <p>
                    Relatos com identificação são muito importantes, pois podem fazer com que a apuração seja mais efetiva. Lembramos que este é um canal seguro e confiável.
                </p>
                <p>
                    Você quer se identificar?
                </p>
            </div>
            </section>
            <div className="w-full flex flex-col justify-center items-center">
                <Tabs defaultValue="identified-report" className="w-3/4 flex flex-col justify-center items-start space-y-3">
                    
                    <TabsList className="grid w-full h-14 grid-cols-2 bg-primary rounded-2xl font-poppinsSemibold text-primary-foreground">
                        <TabsTrigger value="identified-report" className="rounded-lg">Desejo me identificar</TabsTrigger>
                        <TabsTrigger value="anonymous-report">Relato anônimo</TabsTrigger>
                    </TabsList>

                    <TabsContent value="identified-report" className="flex w-full flex-col justify-center items-center">
                        <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="font-poppinsBold">Relato identificado</CardTitle>
                            <CardDescription>
                                Preencha o formulário abaixo
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form className="w-full space-y-5">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base">Nome</FormLabel>
                                                <FormControl className="text-base">
                                                    <Input placeholder="Digite seu nome" {...field} />
                                                </FormControl>
                                                <FormMessage />

                                            </FormItem>

                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="relationship-with-company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base">Função ou sua relação com a empresa</FormLabel>
                                                <FormControl className="text-base">
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>

                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base">E-mail</FormLabel>
                                                <FormControl className="text-base">
                                                    <Input placeholder="exemplo@email.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="telefone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base">Telefone</FormLabel>
                                                <FormControl className="text-base">
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="celular"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base">Celular</FormLabel>
                                                <FormControl className="text-base">
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormDescription>Informe o DDD + 9 e em seguida o número</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />    
                                    
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" size={"lg"}>Prosseguir</Button>
                        </CardFooter>
                            
                        </Card>

                    </TabsContent>

                    <TabsContent value="anonymous-report" className="flex w-full flex-col justify-center items-center">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="font-poppinsBold">Relato Anônimo</CardTitle>
                            <CardDescription>
                                Preencha o formulário abaixo
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form className="w-full space-y-5">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-base">E-mail (opcional)</FormLabel>
                                                <FormControl className="text-base">
                                                    <Input placeholder="exemplo@email.com" {...field} />
                                                </FormControl>
                                                <FormMessage />

                                            </FormItem>

                                        )}
                                    />
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" size={"lg"}>Prosseguir</Button>
                        </CardFooter>
                            
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
