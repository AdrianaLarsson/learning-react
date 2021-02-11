interface Header {
    testObject: {}
}

const Header = (props: any, prop: Header) => {

    prop.testObject.map(())


 return (
     <header>
     Header {props.title}
     {props.name}

    
     </header>
 )
}

export default Header;