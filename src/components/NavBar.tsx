type ChildrenProps = {
    children?: JSX.Element|JSX.Element[];
}

export const NavBar = (children: ChildrenProps) => {
    return (
        <nav className="nav-bar">
            {children.children}
        </nav>
    );
} 