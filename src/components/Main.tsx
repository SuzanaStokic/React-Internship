type ChildrenProps = {
    children: string
}

export const Main = (children: ChildrenProps) => {
    return (
        <main className="main">{children.children}</main>
    );
}