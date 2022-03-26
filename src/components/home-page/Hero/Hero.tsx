import styles from "./Hero.module.css";
import Image from "next/image";

const Hero: React.FC = () => {
	return (
		<section className={styles["hero"]}>
			<div className={styles["image"]}>
				<Image src="/images/site/max.png" alt="Max" width={300} height={300} />
			</div>
			<h1>Hi, I'm Stavros</h1>
			<p>
				I blog about all the intresting tachnologies I am intrested - mostly
				React.
			</p>
		</section>
	);
};

export default Hero;
