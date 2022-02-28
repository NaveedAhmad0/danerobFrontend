import React from "react";
import Layout from "../components/Layout";
import { Wallet } from "./Wallet";
import {
	WalletModalProvider,
	WalletDisconnectButton,
	WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
const SeedClaim = () => {
	const { connection } = useConnection();
	const { publicKey, sendTransaction } = useWallet();

	const [open, setOpen] = React.useState(false);
	const [form, setForm] = React.useState({});
	const [transaction, setTransaction] = React.useState([]);

	const handleOnChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getContractIn = async () => {
		/*  const res = await getAccountFromSeed(Buffer.from(form.seed));
    console.log(res); */

		const response = await getContractInfo(
			connection,
			new PublicKey(form.vestingId)
		);

		const schedules = response.schedules;
		console.log(response.destinationAddress.toBase58());

		console.log(response, schedules[0].releaseTime.toString());
		console.log(response, schedules[0].amount.toString());
	};

	const handleTrans = async () => {
		axios
			.post("http://localhost:3000/claim", {
				seed: form.seed,
			})
			.then(function (response) {
				if (response.data.msg) {
					alert(response.data.msg);
					return;
				}
				setTransaction([
					...transaction,
					{
						tx: response.data.tx,
						amount: response.data.amount || 120,
						time: new Date().toISOString(),
					},
				]);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Layout title="Danerob | Seed Claim">
			<Wallet>
				<div>
					<div
						style={{
							width: 100 + "%",
							background: "#141414",
							paddingTop: 150,
							paddingBottom: 150,
						}}
						className="h-mobile-100">
						<div className="container">
							<h1 className="text-center display-2 mb-5 text-font-glock text-white">
								Seed Claim {publicKey}
							</h1>
							<h1
								style={{ display: "flex", justifyContent: "space-around" }}
								className="text-center display-2 mb-5 text-font-glock text-white">
								<WalletMultiButton style={{ marginLeft: 10 }} />
								<WalletDisconnectButton style={{ marginLeft: 10 }} />
							</h1>

							{/* <div
              style={{
                background: "#101010",
                padding: "40px",
                borderRadius: 12,
              }}
                >
              <h1 className="text-white text-center text-lg mb-3">
                CHECK YOUR WHITELIST STATUS
              </h1>

              <div
                className="d-flex align-items-center justify-content-between gap flex-mobile-column"
                style={{ flex: 1 }}
              >
                <input
                  style={{ borderRadius: 12 }}
                  type="text"
                  placeholder="Wallet address"
                />
                <button
                  style={{
                    height: 55,
                    borderRadius: 10,
                    background: "#ffffff0f",
                  }}
                  className="outline position-relative dark"
                >
                  Check
                </button>
              </div>
              </div> */}
							<div
								style={{
									background: "#101010",
									padding: "40px",
									borderRadius: 12,
									marginTop: 40,
								}}>
								<h1 className="text-white text-center text-lg mb-3">
									NEXT CLAIM ROUND
								</h1>
								<div
									className="d-flex align-items-center justify-content-between gap flex-mobile-column"
									style={{ flex: 1 }}>
									<div>
										<h1 className="text-md text-white fw-bold">TOTAL</h1>
										<span className="text-white">1000000</span>
									</div>
									<div>
										<h5 className="text-md text-white fw-bold">
											Remaining tokens <br />
										</h5>
										<span className="text-white">2400</span>
									</div>
									<div>
										<button
											onClick={handleTrans}
											style={{
												height: 55,
												borderRadius: 12,
												backgroundImage: "url('images/1-purple.png')",
											}}
											className="outline btn btn-dark d-flex align-items-center justify-content-center dark clip-none">
											Claim
										</button>
									</div>
								</div>
								<div className="mt-3">
									<br />
									<h1 className="text-white text-lg text-center">
										UPCOMING CLAIMS
									</h1>
								</div>
								<div
									className="mt-5"
									style={{
										padding: 30,
										borderRadius: 12,
										backgroundColor: "#ffffff0f",
									}}>
									{/* {transaction.map((item, i) => ( */}
									<ul
										// key={i}
										className="d-flex align-items-center justify-content-between w-100 text-white flex-mobile-column text-mobile-center">
										<li className="d-flex justify-content-center flex-direction-column">
											<span>Amount</span>
											<span className="font-weight-bold text-md">
												{/* {item.amount} */}
												400
											</span>
										</li>
										<li className="d-flex justify-content-center flex-direction-column">
											<span>Time</span>
											<span className="font-weight-bold text-md">
												{/* {item.time} */}
												24/02/2022
											</span>
										</li>
										<li className="d-flex justify-content-center flex-direction-column">
											{/* <span>Transaction ID</span>
												<span className="font-weight-bold text-md">
													<a
														href={`https://explorer.solana.com/tx/${item.tx}?cluster=devnet`}
														target="_blank"
														rel="noreferrer">
														{item.tx.substring(0, 10)}...
													</a>
												</span> */}
											<button
												onClick={handleTrans}
												style={{
													height: 55,
													borderRadius: 12,
													backgroundImage: "url('images/1-purple.png')",
												}}
												className="outline btn btn-dark d-flex align-items-center justify-content-center dark clip-none">
												Claim
											</button>
										</li>
									</ul>
									{/* ))} */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wallet>
		</Layout>
	);
};

export default SeedClaim;
