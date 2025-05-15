import logo from '../assets/chef-logo.png'
export default function Header(){
    console.log('good job manouna')

    
    return(
        <header>
            <img   src={logo} alt='chef-logo'/>
            <span>Mr. Chef</span>
        </header>
    )
}