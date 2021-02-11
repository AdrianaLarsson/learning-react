

const Header = (props: any) => {

    console.log(props.testObje)

 return (
     <header>
     Header {props.title}
     {props.name}
     {props.testObje}
     </header>
 )
}

export default Header;