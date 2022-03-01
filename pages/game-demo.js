import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
const GameDemo = () => {
	return (
		<Layout withoutfooter="true" title="Danerob | Game Demo">
			<div id="unity-container" className="unity-desktop mt-5">
				<div className="header">
					<div className="danelogo">
						<img src="TemplateData/logo-danerob.png" />
					</div>
					<div className="desc">
						A collection of uniquely generated robotic great danes on the Solana
						blockchain which will allow access into the Danerob metaverse.
					</div>
				</div>
				<canvas id="unity-canvas" width={960} height={600} />
				<div id="unity-loading-bar">
					<div id="unity-logo" />
					<div id="unity-progress-bar-empty">
						<div id="unity-progress-bar-full" />
					</div>
				</div>
				<div id="unity-warning"> </div>
				<div id="unity-footer">
					<div className="logos">
						<a
							href="https://www.instagram.com/thedanerob"
							target="_blank"
							title="Instagram"
							rel="noreferrer">
							<img src="TemplateData/logo-instagram.png" />
						</a>
						<a
							href="https://twitter.com/DanerobNFT"
							target="_blank"
							title="Twitter"
							rel="noreferrer">
							<img src="TemplateData/logo-twitter.png" />
						</a>
						<a
							href="https://discord.gg/danerob"
							target="_blank"
							title="Discord"
							rel="noreferrer">
							<img src="TemplateData/logo-discord.png" />
						</a>
						<a
							href="https://solanart.io/collections/danerob"
							target="_blank"
							title="Solanart Collection"
							rel="noreferrer">
							<img src="TemplateData/logo-solanart.png" />
						</a>
					</div>
					<div id="unity-fullscreen-button" />
				</div>
			</div>
		</Layout>
	);
};

export default GameDemo;
