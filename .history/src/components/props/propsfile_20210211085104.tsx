interface Header {
    testObject: {}
}

const Header = (props: any, prop: Header) => {

 console.log(prop.testObject)


 return (
     <header>
     Header {props.title}
     {props.name}

    
     </header>
 )
}

export default Header;