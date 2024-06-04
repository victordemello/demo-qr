import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

type MenuItem = {
    title: string
    href: string
}

interface Props {
    menuItems: MenuItem[]
}

export function NavMenu ({menuItems}: Props) {
    return (
        <nav className="text-primary-foreground font-poppinsMedium w-3/4 text-lg">
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-16 justify-between w-full text-center">
                    {menuItems.map((menuItem) => (
                        <NavigationMenuItem key={menuItem.title} className="hover:text-secondary transition-colors leading-relaxed">
                            <Link to={menuItem.href}>
                                {menuItem.title}
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}