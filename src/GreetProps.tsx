type GreetProp = {
    name: string
}
type ReactGreetProp = {
    children: React.ReactNode
}

export const Greet = (prop: GreetProp)=>{
    return (
        <div>
            <h1>hi this is {prop.name}</h1>
        </div>
    );
};

export const ReactGreet = (prop: ReactGreetProp)=>{
    return(
        <>
        {prop.children}
        </>
    );
};