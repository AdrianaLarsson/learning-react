interface Header {
    testObject: {}
}

const Header = (props: any, prop: Header) => {

 console.logprop.testObject


 return (
     <header>
     Header {props.title}
     {props.name}

    
     </header>
 )
}

export default Header;