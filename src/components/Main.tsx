type ChildrenProps = {
    children?: JSX.Element|JSX.Element[];
}

const Main = ({children} : ChildrenProps) => {
    return (
        <main className="main">{children}</main>
    );
}
export default Main;