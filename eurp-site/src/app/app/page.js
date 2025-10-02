"use client"

import Image from "next/image";

import Link from "next/link";
import {useEffect, useState} from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount, useConnect, usePublicClient, useWalletClient, useWriteContract} from "wagmi";

import { ethers } from 'ethers';
import {FaTelegram, FaTwitter} from "react-icons/fa";
import {BigNumber} from "bignumber.js";

const PURCHASE_STOCK_CTR = "0x393a674b7a667a410e9CF08fC8870f9d1e6f526E";
const CONVERTER_CTR = "0x58dDe6be4E52700D38543C413a43F43b94F5091d";
const EURC_CTR = "0x808456652fdb597867f38412077A9182bf77359F";


// USDC ABI (ERC-20 minimal)
const ERC20_ABI = [
    "function allowance(address owner, address spender) external view returns (uint256)",
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function transfer(address to, uint amount) public returns (bool)",
    "function balanceOf(address owner) public view returns (uint)",
    "function decimals() public view returns (uint8)",
];

const PURCHASE_CTR_ABI = [
    "function buyStock(uint256 amount) external",
];

const ABI =
    [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "issueEURP",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
    ]

export default function Trade() {

    const [amountNotRefined2, setAmount2] = useState(1);
    const [mintOrRedeem, setMintOrRedeem] = useState(false);
    const { address } = useAccount();
    const { data: walletClient3 } = useWalletClient(); // EIP-1193 provider
    const publicClient = usePublicClient(); // read-only provider (e.g. Alchemy/Infura)

    const {  isConnected, c} = useAccount();
    const { connect } = useConnect({

    });
    const { data: walletClient } = useWalletClient();

    useEffect(() => {
        const test = async () => {
            if (!isConnected || !walletClient) {
                console.warn("Wallet not connected or walletClient not ready");
                return;
            }

            const provider = new ethers.providers.Web3Provider(walletClient.transport);
            // Always check transport exists
            if (!provider) {
                console.error('Transport provider is missing');
                return;
            }

            const signer = provider.getSigner();

            //setValidSigner(signer)
        };

        test();
    }, [walletClient, isConnected, address]);

    async function issue(){

        const provider = new ethers.providers.Web3Provider(walletClient.transport);
        // Always check transport exists
        if (!provider) {
            console.error('Transport provider is missing');
            return;
        }

        const signer = provider.getSigner();
        const dai = new ethers.Contract(CONVERTER_CTR, ABI, signer);

        const eurc = new ethers.Contract(EURC_CTR, ERC20_ABI, signer);

        await eurc.approve(address, new BigNumber(amountNotRefined2).multipliedBy(Math.pow(10, 6)).toString()).then(async ()=> {
            await dai.issueEURP(address,new BigNumber(amountNotRefined2).multipliedBy(Math.pow(10, 6)).toString());

        });


    }

    async function redeem(){

        const provider = new ethers.providers.Web3Provider(walletClient.transport);
        // Always check transport exists
        if (!provider) {
            console.error('Transport provider is missing');
            return;
        }

        const signer = provider.getSigner();
        const dai = new ethers.Contract(PURCHASE_STOCK_CTR, PURCHASE_CTR_ABI, signer);

        const eurp = new ethers.Contract(PURCHASE_STOCK_CTR, ERC20_ABI, signer);

        await eurc.approve(address, amountNotRefined2 );
        await dai.burnEURP(address, amountNotRefined2 );


    }

    return (
        <div className="min-h-screen bg-[#e9f3ff] text-gray-900">
            <section className="flex flex-col justify-center items-center px-6 py-6 lg:px-8">
                <div className="py-8 text-[28px] font-bold">
                    <h1>Ensuring Freedom in Capital Markets</h1>
                </div>
                <div className="flex flex-row w-1/3 my-2">
                    <div onClick={() => setMintOrRedeem(false)}
                         className="bg-gray-200 w-full cursor-pointer h-12 flex justify-center items-center">Mint
                    </div>
                    <div onClick={() => setMintOrRedeem(true)}
                         className="bg-gray-200 w-full cursor-pointer h-12 flex justify-center items-center">Redeem
                    </div>
                </div>
                <div
                    className="flex flex-col shadow-white  ring-blue-500/50  justify-center items-center p-4 rounded-xl border border-1 w-1/3 h-1/3 bg-gray-50 text-gray-900">
                    {
                        mintOrRedeem ? <div className="font-bold p-2">Redeem EURP</div> : <div className="font-bold p-2">Issue EURP</div>
                    }
                    <div className="p-4 w-full">
                        <select className="w-full h-12 border px-4">
                            <option>Base</option>
                        </select>
                    </div>

                    <div className="w-full px-4 text-right">
                        Bal: 0.00
                        {
                            mintOrRedeem ?
                        " EURP" : " EURC"}
                    </div>
                    <div className="p-4 w-full">
                        <input className="p-4 border w-full" onChange={(e) => setAmount2(e.target.value)} value={amountNotRefined2}/>

                    </div>
                    <div>
                        {
                            mintOrRedeem ?
                                <ConnectButton.Custom>
                                    {({
                                          account,
                                          chain,
                                          openAccountModal,
                                          openChainModal,
                                          openConnectModal,
                                          authenticationStatus,
                                          mounted,
                                      }) => {
                                        // Note: If your app doesn't use authentication, you
                                        // can remove all 'authenticationStatus' checks
                                        const ready = mounted && authenticationStatus !== 'loading';
                                        const connected =
                                            ready &&
                                            account &&
                                            chain &&
                                            (!authenticationStatus ||
                                                authenticationStatus === 'authenticated');

                                        return (
                                            <div
                                                {...(!ready && {
                                                    'aria-hidden': true,
                                                    'style': {
                                                        opacity: 0,
                                                        pointerEvents: 'none',
                                                        userSelect: 'none',
                                                    },
                                                })}
                                            >
                                                {(() => {
                                                    if (!connected) {
                                                        return (
                                                            <button onClick={openConnectModal} type="button"
                                                                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500  text-white p-4 rounded-lg cursor-pointer">
                                                                Connect Wallet
                                                            </button>
                                                        );
                                                    }

                                                    if (chain.unsupported) {
                                                        return (
                                                            <button onClick={openChainModal} type="button">
                                                                Wrong network
                                                            </button>
                                                        );
                                                    }

                                                    return (
                                                        <div style={{display: 'flex', gap: 12}}>
                                                            <button onClick={() => redeem()}
                                                                    className="bg-[#1d8fff] p-4 rounded font-bold text-white">Redeem {amountNotRefined2} EURP
                                                            </button>

                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                        );
                                    }}
                                </ConnectButton.Custom>
                                :
                                <ConnectButton.Custom>
                                    {({
                                          account,
                                          chain,
                                          openAccountModal,
                                          openChainModal,
                                          openConnectModal,
                                          authenticationStatus,
                                          mounted,
                                      }) => {
                                        // Note: If your app doesn't use authentication, you
                                        // can remove all 'authenticationStatus' checks
                                        const ready = mounted && authenticationStatus !== 'loading';
                                        const connected =
                                            ready &&
                                            account &&
                                            chain &&
                                            (!authenticationStatus ||
                                                authenticationStatus === 'authenticated');

                                        return (
                                            <div
                                                {...(!ready && {
                                                    'aria-hidden': true,
                                                    'style': {
                                                        opacity: 0,
                                                        pointerEvents: 'none',
                                                        userSelect: 'none',
                                                    },
                                                })}
                                            >
                                                {(() => {
                                                    if (!connected) {
                                                        return (
                                                            <button onClick={openConnectModal} type="button"
                                                                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500  text-white p-4 rounded-lg cursor-pointer">
                                                                Connect Wallet
                                                            </button>
                                                        );
                                                    }

                                                    if (chain.unsupported) {
                                                        return (
                                                            <button onClick={openChainModal} type="button">
                                                                Wrong network
                                                            </button>
                                                        );
                                                    }

                                                    return (
                                                        <div style={{display: 'flex', gap: 12}}>
                                                            <button onClick={() => issue()}
                                                                    className="bg-[#1d8fff] p-4 rounded font-bold text-white">Mint {amountNotRefined2} EURP
                                                            </button>

                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                        );
                                    }}
                                </ConnectButton.Custom>
                        }

                    </div>

                </div>
                <div className="flex flex-row text-[24px]">
                    <Link href="https://t.me/eurp_protocol">
                        <div className="p-4">
                            <FaTelegram/>
                        </div>

                    </Link>

                    <div className="p-4">
                        <FaTwitter/>
                    </div>

                    </div>
            </section>
        </div>
    );
}
