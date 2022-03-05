import logo from '../Util/Logo.png';
import Music from './Music';

const Content = () => {

	return(
		<>
			<img id="logo" alt="Logo" src={logo}/>
			<Music/>
			<div id="portfolio">
				<a href="https://gifted-goodall-18aec4.netlify.app/">Portfolio</a>
			</div>
			<div id="linked">
				<div className="link">
					<div id="link1"></div>
					<a href="https://classroom.google.com/u/0/c/NDQ2NTgwMjcxMTkw">ClassRoom</a>
				</div>
				<div className="link">
					<div id="link2"></div>
					<a href="https://mail.google.com/chat/u/0/#chat/dm/70kjcIAAAAE">Chat</a>
				</div>
				<div className="link">
					<div id="link3"></div>
					<a href="https://mail.google.com/mail/u/0/#inbox">Mail</a>
				</div>
				<div className="link">
					<div id="link4"></div>
					<a href="https://drive.google.com/drive/u/0/my-drive">Drive</a>
				</div>
				<div className="link">
					<div id="link5"></div>
					<a href="https://github.com/lgrave264">GitHub</a>
				</div>
				<div className="link">
					<div id="link6"></div>
					<a href="https://reactjs.org/docs/introducing-jsx.html">React</a>
				</div>
				<div className="link">
					<div id="link7"></div>
					<a href="https://bgjar.com/">NpmJS</a>
				</div>
				<div className="link">
					<div id="link8"></div>
					<a href="https://www.npmjs.com/">BGJar</a>
				</div>
			</div>
		</>
	)
}


export default Content