

const Header = (props: any) => {



 return (
     <header>
     Header {props.title}
     {props.name}
     {props.testObje.map}
     </header>
 )
}

export default Header;