import React, { useState } from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import hamburger from '../../../static/images/bars-solid.svg';

export default function navbar() {
	const [ isOpen, setOpen ] = useState(false);
	const handleOpen = () => {
		setOpen(!isOpen);
	};

	const navBar = [
		{ name: 'blog', link: 'blog' },
		{ name: 'project', link: 'project' },
		{ name: 'contacts', link: 'contacts' }
	];

	return (
		<header className="bg-primary text-white font-bold">
			<div className="py-10 px-5 md:flex justify-between md:px-20 container mx-auto">
				<div className="flex justify-between">
					<div>
						<AniLink paintDrip hex="#252627" to={'/'}>
							LEONARDO LOUIE
						</AniLink>
					</div>
					<div>
						<img src={hamburger} className="w-6 md:hidden" onClick={handleOpen} />
					</div>
				</div>

				<div>
					<ul className={`py-10 md:py-0 md:flex ${isOpen ? '' : 'hidden'}`}>
						{navbar &&
							navBar.map((value, key) => (
								<li className="px-5 md:px-5 lg:px-5 uppercase hover:text-dim" key={key}>
									<AniLink paintDrip hex="#252627" to={value.link}>
										{value.name}
									</AniLink>
								</li>
							))}
					</ul>
				</div>
			</div>
		</header>
	);
}
