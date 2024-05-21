type ChildrenProps = {
    children?: JSX.Element|JSX.Element[];
}

export const Main = (children: ChildrenProps) => {
    return (
        <main className="main">{children.children}</main>
    );
}