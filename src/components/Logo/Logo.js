import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import funface from './rasberry-face.png'

const Logo = () => {
	return (
		<div className = 'ma3 mt0'>
			<Tilt className="Tilt br2 shadow-2" options = {{ max : 25 }} style={{ height: 150, width: 150 }}>
				<div className="Tilt-inner pa3">
					<img style={{paddingTop: '3px'}} alt='logo' src={funface} />
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;