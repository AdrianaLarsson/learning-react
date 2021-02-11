import Button from './button'

const Header = (props: any) => {

 return (
     <header>
     Header {props.title}
     {props.name}

    <Button text="Hello"/>
     </header>
 )
}

export default Header;