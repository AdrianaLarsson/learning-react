import Header from './props/propsfile'

interface functions{
    title: string;
}

functions.defaultProps = {
    title: 'Adriana Larsson'
}

function functions(props: functions){

    function greet(name: string){
        console.log('hello world');
      return ' Hello world ' + name;
    }
 
    const testObje = [
        {firstName: 'Adriana', lastName: 'Larsson'},
        {firstName: 'Marie', lastName: 'Kristoffersson'}
    ]

    
    return(
        <div>functions
            <h1>{greet('Adriana')}</h1>
            <h2>{greet('Marie')} {props.title}</h2>
      <Header 
       title="Adde"
       name="Tina"/>
       test
        </div>
    )
}

export default functions;