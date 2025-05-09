import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Easy to Use',
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and used to get your
				website up and running quickly.
			</>
		),
	},
	{
		title: 'Focus on What Matters',
		description: (
			<>
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your
				docs into the <code>docs</code> directory.
			</>
		),
	},
	{
		title: 'Powered by React',
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can be extended while
				reusing the same header and footer.
			</>
		),
	},
];

function Feature({ title, description }: { title: string; description: JSX.Element }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						// eslint-disable-next-line react/no-array-index-key
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
