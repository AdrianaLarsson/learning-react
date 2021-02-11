interface Header {
    testObject: {}
}

const Header = (props: any, pr) => {

    


 return (
     <header>
     Header {props.title}
     {props.name}

    
     </header>
 )
}

export default Header;