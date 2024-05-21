type ChildrenProps = {
    children: string
}

export const NavBar = (children: ChildrenProps) => {
    return (
        <nav className="nav-bar">
            {children.children}
        </nav>
    );
} 