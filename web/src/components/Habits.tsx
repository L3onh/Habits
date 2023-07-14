
interface HabitsProps{
    completed: number
}

export function Habits (props: HabitsProps){ // aqui dizemos que as propriedades que vamos passar como parâmetros seguem o padrão da interface utilizada acima: ela tem uma propriedade completed que é um numero
 return(
    <div className='bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center'>{props.completed}</div> // interessante observar que para acessar o valor dentro da variavel props.completed temos que sar {} sennão irá aparecer somennte texto
 )
}