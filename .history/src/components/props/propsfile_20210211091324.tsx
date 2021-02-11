import Button from './button'

const Header = (props: any) => {

 return (
     <header>
     Header {props.title}
     {props.name}

    <Button />
     </header>
 )
}

export default Header;