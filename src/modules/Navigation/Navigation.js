import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import UlMenu from "../UlMenu/UlMenu";
import "./Navigation.css";


const dataMenu = [
    {
        titre: "Acceuil",
        url: "#"
    },
    {
        titre: "Formations",
        url: "#"
    },
    {
        titre: "Contact",
        url: "#"
    }

]


const Navigation = () => {
    return (
        <nav>
            {/* La props children(ici "Ceppic")sera systémétiquement au format string */}
            <Logo>Ceppic</Logo>
            <UlMenu dataMenu={dataMenu}></UlMenu>
            <Burger></Burger>
        </nav>
    )
}
export default Navigation
