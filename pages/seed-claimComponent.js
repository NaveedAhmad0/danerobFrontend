import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Wallet } from "./Wallet";
import {
	WalletModalProvider,
	WalletDisconnectButton,
	WalletMultiButton,
  } from "@solana/wallet-adapter-react-ui";
  import { clusterApiUrl } from "@solana/web3.js";
  
  import { useConnection } from "@solana/wallet-adapter-react";
  import axios from "axios";
  
const SeedClaimComponent = () => {
	const { publicKey, sendTransaction,connected } = useWallet();

	const { connection } = useConnection();
	

	const [open, setOpen] = React.useState(false);
	const [form, setForm] = React.useState({});
	const [transaction, setTransaction] = React.useState([]);
	const [transactionClaimed, setTransactionClaimed] = React.useState([]);


	useEffect(()=>{
		if(publicKey){
			axios
			.get(`https://danerob-api.herokuapp.com/user/user-by-address?address=${publicKey.toString()}`)
			.then(function (response) {

				let trans = response.data;
				 setTransaction([
			
					...trans.filter((item)=>item.lastClaimedDate ==null)
				]); 
				setTransactionClaimed([
			
					...trans.filter((item)=>item.lastClaimedDate !==null)
				]); 
			})
			.catch(function (error) {
			//	alert('No Claims Found')
				console.log(error);
			});
		}
	
	},[publicKey])

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

	const handleTrans = async (seed) => {
		axios
			.post("https://danerob-api.herokuapp.com/claim", {
				seed: seed,
			})
			.then(function (response) {
				if (response.data.msg) {
				
					alert('Vesting contract has not yet reached release time');
					return;
				}
				axios
				.patch(`https://danerob-api.herokuapp.com/user/update-user?seed=${seed}`, {
					"userTransaction": response.data.transaction,
					"lastClaimDate": new Date().toDateString()
				})
				.then(function (response) {

					alert("Success")
					/* setTransaction([
						...transaction,
						{
							tx: response.data.tx,
							amount: response.data.amount || 120,
							time: new Date().toISOString(),
						},
					]); */
				})
				.catch(function (error) {
				
				});
			})
			.catch(function (error) {
				alert('Vesting contract has not yet reached release time');
			});
	};

	return (
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
					Seed Claim
				</h1>
				<p className="text-center mb-5  text-white"><small>{publicKey?.toString()}</small></p>
				<h1
					style={{ display: "flex", justifyContent: "space-around" }}
					className="text-center display-2 mb-5 text-font-glock text-white">
				{!connected ?	<WalletMultiButton style={{ marginLeft: 10 }} /> : ''}
				{connected ?		<WalletDisconnectButton style={{ marginLeft: 10 }} /> : ''}
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
				<div className="mt-3">
						<br />
						<h1 className="text-white text-lg text-center">
							UpComing CLAIMS
						</h1>
					</div>
					<div
						className="mt-5"
						style={{
							padding: 30,
							borderRadius: 12,
							backgroundColor: "#ffffff0f",
						}}>
							<ul
							
							className="d-flex align-items-center justify-content-between w-100 text-white flex-mobile-column text-mobile-center">
							<li className="d-flex justify-content-center flex-direction-column">
								<span>Amount</span>
							
							</li>
							<li className="d-flex justify-content-center flex-direction-column">
								<span>Cliff Date</span>
								
							</li>
							<li className="d-flex justify-content-center flex-direction-column">
								
							<span>Action</span>
							</li>
						</ul>
				{transaction.map((item, i) => (
						<ul
							 key={i}
							className="d-flex align-items-center justify-content-between w-100 text-white flex-mobile-column text-mobile-center">
							<li className="d-flex justify-content-center flex-direction-column">
							
								<span className="font-weight-bold text-md">
								{item.amount}
								</span>
							</li>
							<li className="d-flex justify-content-center flex-direction-column">
							
								<span className="font-weight-bold text-md">
									{item.claimDate}
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
									onClick={()=>handleTrans(item.seed)}
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
))}
					</div>

					<div className="mt-3">
						<br />
						<h1 className="text-white text-lg text-center">
							Already Claimed
						</h1>
					</div>
					<div
						className="mt-5"
						style={{
							padding: 30,
							borderRadius: 12,
							backgroundColor: "#ffffff0f",
						}}>
							<ul
							
							className="d-flex align-items-center justify-content-between w-100 text-white flex-mobile-column text-mobile-center">
							<li className="d-flex justify-content-center flex-direction-column">
								<span>Amount</span>
							
							</li>
							<li className="d-flex justify-content-center flex-direction-column">
								<span>Claimed On</span>
								
							</li>
							<li className="d-flex justify-content-center flex-direction-column">
								
							Transaction
							</li>
						</ul>
				{transactionClaimed.map((item, i) => (
						<ul
							 key={i}
							className="d-flex align-items-center justify-content-between w-100 text-white flex-mobile-column text-mobile-center">
							<li className="d-flex justify-content-center flex-direction-column">
							
								<span className="font-weight-bold text-md">
								{item.amount}
								</span>
							</li>
							<li className="d-flex justify-content-center flex-direction-column">
							
								<span className="font-weight-bold text-md">
									{item.lastClaimedDate}
								</span>
							</li>
							<li className="d-flex justify-content-center flex-direction-column">
								
									<span className="font-weight-bold text-md">
										<a
											href={`https://explorer.solana.com/tx/${item.userTransaction}?cluster=devnet`}
											target="_blank"
											rel="noreferrer">
											{item.userTransaction?.substring(0, 10)}...
										</a>
									</span> 
							
							</li>
						</ul>
))}
					</div>
				</div>
			</div>
		</div>
	</div>

	);
};

export default SeedClaimComponent;
