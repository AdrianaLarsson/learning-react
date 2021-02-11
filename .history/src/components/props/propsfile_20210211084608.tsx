


const Header = (props: any) => {
 return (
     <header>
     Header {props.title}
     {props.name}
     {props.test('should ', () => {
         
     })
     }
     </header>
 )
}

export default Header;