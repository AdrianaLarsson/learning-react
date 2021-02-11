
interface functions{
    title: st

}

function functions(){

    function greet(name: string){
        console.log('hello world')
      return ' Hello world ' + name
    }

    
    return(
        <div>functions
            <h1>{greet('Adriana')}</h1>
            <h2>{greet('Marie')}</h2>
        </div>

    )
}

export default functions;