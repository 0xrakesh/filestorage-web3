import Web3 from 'web3';
import { upload, get } from '../utils/IPFS'; // Ensure the path is correct
import FileStorage from "./FileStorage.json";

export class Connection {
    static UserAccount = null;
    static web3 = null;
    static contract = null;

    static async initialization() {
        if (window.ethereum === undefined) return;

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.UserAccount = accounts?.[0];
        this.web3 = new Web3(window.ethereum);
        this.contract = new this.web3.eth.Contract(FileStorage.abi, FileStorage.networks[5777].address);
        return this.UserAccount;
    }

    static async uploading(file) {
        if (!this.UserAccount || !this.web3) return;

        const details = await upload(file); 
        if (details === null) return;

        const path = details.path;
        const name = file.name;

        try {
            const transaction = await this.contract.methods.uploadFile(name, path).send({
                from: this.UserAccount,
                value: this.web3.utils.toWei("1", "ether")
            });
            return transaction; 
        } catch (error) {
            console.error("Transaction failed:", error);
            return error;
        }
    }

    static async getting() {
        if(this.contract === null) return;
        const files = await this.contract.methods.getFile().call({
            from:this.UserAccount
        });
        return files;
    }
}
