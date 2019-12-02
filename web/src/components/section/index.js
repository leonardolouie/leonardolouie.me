import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function Section({ title, subtitle, children, style, bottomTitle, bottomTitleLink, bottomSubTitle }) {
	console.log(bottomTitleLink);
	return (
		<div className={style}>
			<div className="container mx-auto  text-center py-20 section fadedInAnimation">
				<h1 className="text-white text-white text-2xl">{title}</h1>
				<p className="text-dim mx-5 lg:mx-64">{subtitle}</p>
				<div className="flex  flex-wrap sm:flex-row justify-center items-center mt-10">{children}</div>

				<div>
					{bottomTitle && (
						<Link
							className="text-dim  hover:text-white mx-5 text-2xl lg:mx-64"
							to={bottomTitleLink !== undefined ? bottomTitleLink : ''}
						>
							{bottomTitle}
						</Link>
					)}
					{bottomSubTitle && <p className="text-dim mx-5 lg:mx-64">{bottomSubTitle} </p>}
				</div>
			</div>
		</div>
	);
}

Section.propTypes = {
	title: PropTypes.string,
	bottomTitle: PropTypes.string,
	bottomTitleLink: PropTypes.string,
	bottomSubTitle: PropTypes.string,
	background: PropTypes.string,
	subtitle: PropTypes.string,
	children: PropTypes.node
};
