interface Header {
    testObject: {}
}

const Header = (props: any, prop) => {

    


 return (
     <header>
     Header {props.title}
     {props.name}

    
     </header>
 )
}

export default Header;