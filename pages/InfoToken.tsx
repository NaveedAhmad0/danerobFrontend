import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import {
  Keypair,
  SystemProgram,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import { lockToken, unLockToken } from "../solana/dev";
import { getAccountFromSeed, getContractInfo } from "../solana";

export default function InfoToken() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState<any>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    
    const schedules  = response.schedules;
    console.log(response.destinationAddress.toBase58());
    console.log(response,schedules[0].releaseTime.toString());
    console.log(response,schedules[0].amount.toString());
    
  };

  const handleTrans = async () => {
    const res = await unLockToken(form.seed, connection);
    console.log(res);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      Info
      </Button>
     

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Investor Seed</DialogTitle>
        <DialogContent>
          <DialogContentText>Claim</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="vestingId"
            label="Investor Seed"
            id="vestingId"
            onChange={handleOnChange}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={getContractIn}>getInfo</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
