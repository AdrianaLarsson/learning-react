

const Header = (props: any) => {



 return (
     <header>
     Header {props.title}
     {props.name}
     {props.testObje.map((t))}
     </header>
 )
}

export default Header;