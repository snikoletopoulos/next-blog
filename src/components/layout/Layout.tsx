import MainNavigation from "components/layout/MainNavigation/MainNavigation";

type Props = {};

const Layout: React.FC<Props> = props => {
	return (
		<>
			<MainNavigation />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
