import React, { useContext } from "react";
import { shortenWalletAddress } from "../../constants/helpers";
import { Web3Context } from "../../store/web3.store";
import Modal from "../Modal";
import NftCard from "../NftCard";

const DisconnectWallet = ({ className }) => {
  const { walletActions } = useContext(Web3Context);
  return (
    <div
      onClick={walletActions.destroyWeb3}
      className={"button-container small " + className}
    >
      <button>Disconnect</button>
    </div>
  );
};

const WalletModal = ({ show, onShow }) => {
  const { wallet, walletActions } = useContext(Web3Context);
  return (
    <Modal sizeAuto={true} show={show} onShow={onShow}>
      <div className="wallet-section">
        <div className="wallet-section-header">
          <div className="d-flex flex-direction-column">
            <h1 className="text-white fw-bold display-6">Wallet</h1>
            <h1>{shortenWalletAddress(wallet?.walletAddress)}</h1>
          </div>
          <div className="d-flex align-items-center gap-small">
            <DisconnectWallet className="only-desktop" />
            <div
              onClick={() => onShow(false)}
              className="button-container small mobile-btn"
            >
              <button>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <DisconnectWallet className="w-100 only-mobile" />
        <div className="wallet-section-body w-100">
          <h1 className="text-white fw-bold display-6 mb-3">Your Nft's</h1>

          <p className="text-left text-white p-2">
            You don't have any nft. Your Nfts will come here.
          </p>

          {/*
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-xs-12 col-sm-12">
              <NftCard />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-xs-12 col-sm-12">
              <NftCard />
            </div>
          </div>
          */}
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;
