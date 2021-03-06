
interface functions{
    title: string;
}

functions.defaultProps = {
    title: 'Adriana Larsson'
}

function functions(({title})){

    function greet(name: string){
        console.log('hello world');
      return ' Hello world ' + name;
    }


    
    return(
        <div>functions
            <h1>{greet('Adriana')}</h1>
            <h2>{greet('Marie')} {props.title}</h2>
        </div>
    )
}

export default functions;