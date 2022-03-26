import styles from "./MainNavigation.module.css";
import Link from "next/link";

import Logo from "components/layout/Logo/Logo";

const MainNavigation: React.FC = () => {
	return (
		<header className={styles.header}>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/posts">Posts</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
