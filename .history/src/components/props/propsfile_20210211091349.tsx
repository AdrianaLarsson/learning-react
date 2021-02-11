import Button from './button'

const Header = (props: any) => {

 return (
     <header>
     Header {props.title}
     {props.name}

    <Button text="He"/>
     </header>
 )
}

export default Header;