import React, { useState } from 'react';
import { X, ExternalLink, Maximize2 } from 'lucide-react';

const PharosTestnetTutorial = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const ImageModal = ({ src, alt, isOpen, onClose }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={onClose}>
                <div className="relative max-w-6xl max-h-full">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            </div>
        );
    };

    const TutorialStep = ({ title, description, gradient, color, children, link }) => {
        let icon;

        switch (title) {
            case '1. Testnet Homepage':
                icon = require('./connect_wallet.png');
                break;
            case '2. Getting Test Tokens (Faucet)':
                icon = require('./faucet.png');
                break;

            case '3. Daily Check-in':
                icon = require('./daily.png');
                break;

            case '4. Connect your socials':
                icon = require('./connect_socials.png');
                break;

            case '5. Social Tasks':
                icon = require('./social_tasks.png');
                break;

            case '6. Blockchain Activity':
                icon = require('./onchain_activity.png');
                break;

            case '7. History and Progress':
                icon = require('./checker.png');
                break;

            case '8. Blockchain Explorer':
                icon = require('./transactions.png');
                break;

            default:
                icon = require('./faucet.png');
                break;
        }

        return (
            <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 border border-gray-700 shadow-2xl`}>
                <div>
                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h3 className={`text-3xl font-bold text-white mb-4 ${color}`}>{title}</h3>
                            {/* Image */}
                            <div className="relative group mb-4">
                                <div className="relative overflow-hidden rounded-xl bg-gray-800">
                                    <img
                                        src={icon}
                                        alt={title}
                                        className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                                        onClick={() => window.open(link, '_blank')}
                                    />
                                </div>
                                <p style={{textAlign: 'center', fontSize: 12, marginTop: 4}}>Click the image to follow the link</p>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                        🧪 Pharos Network Testnet
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Complete guide to using the Pharos Network testnet
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Homepage */}
                    <TutorialStep
                        title="1. Testnet Homepage"
                        description="Starting point for all testnet users. Connect your wallet"
                        imageSrc="./connect_wallet.png"
                        gradient="from-blue-900 to-purple-900"
                        color="text-blue-400"
                        link={'https://testnet.pharosnetwork.xyz/'}
                    >
                        <div className="space-y-4">
                            <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-4">
                                <p className="text-green-300 font-medium text-center">
                                    "Welcome to Pharos testnet! Complete tasks to earn points and get a chance for airdrop."
                                </p>
                            </div>
                        </div>
                    </TutorialStep>

                    {/* Faucet */}
                    <TutorialStep
                        title="2. Getting Test Tokens (Faucet)"
                        description="Free test tokens to get started"
                        imageSrc="/api/placeholder/800/500"
                        gradient="from-green-900 to-teal-900"
                        color="text-green-400"
                        link={'https://testnet.zenithfinance.xyz/faucet'}
                    >
                        <div className="space-y-4">
                            <div className="bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded-lg p-4">
                                <h5 className="text-yellow-400 font-medium mb-2">Details:</h5>
                                <ul className="space-y-1 text-gray-300">
                                    <li>• Two faucets available: official (may be slow) and alternative (via Google email registration)</li>
                                    <li>• After request, tokens arrive in wallet within 2-3 minutes</li>
                                </ul>
                            </div>
                        </div>
                    </TutorialStep>

                    {/* Daily Check-in */}
                    <TutorialStep
                        link={'https://testnet.pharosnetwork.xyz/experience'}
                        title="3. Daily Check-in"
                        description="Earn points for daily visits"
                        imageSrc="/api/placeholder/800/500"
                        gradient="from-purple-900 to-pink-900"
                        color="text-purple-400"
                    >
                        <div className="space-y-4">
                            <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-4">
                                <p className="text-green-300 font-medium text-center">
                                    Congratulations! You've earned points for daily check-in.
                                </p>
                            </div>
                        </div>
                    </TutorialStep>

                    <TutorialStep
                        link={'https://testnet.pharosnetwork.xyz/experience'}
                        title="4. Connect your socials"
                        description="Connect your social networks in profile to complete social tasks"
                        imageSrc="/api/placeholder/800/500"
                        gradient="from-purple-900 to-pink-900"
                        color="text-purple-400"
                    >
                        <div className="space-y-4">
                            <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-4">
                                <p className="text-green-300 font-medium text-center">
                                    Congratulations! You've added your social networks and can now complete social tasks.
                                </p>
                            </div>
                        </div>
                    </TutorialStep>

                    {/* Social Tasks */}
                    <TutorialStep
                        link={'https://testnet.pharosnetwork.xyz/experience'}
                        title="5. Social Tasks"
                        description="Complete social media tasks"
                        imageSrc="/api/placeholder/800/500"
                        gradient="from-orange-900 to-red-900"
                        color="text-orange-400"
                    >
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 text-center border border-blue-700">
                                    <div className="text-blue-400 font-medium text-lg mb-1">X Follow</div>
                                    <div className="text-green-400 font-semibold">+ points</div>
                                </div>
                                <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 text-center border border-blue-700">
                                    <div className="text-blue-400 font-medium text-lg mb-1">Retweet</div>
                                    <div className="text-green-400 font-semibold">+ points</div>
                                </div>
                                <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 text-center border border-blue-700">
                                    <div className="text-blue-400 font-medium text-lg mb-1">Reply</div>
                                    <div className="text-green-400 font-semibold">+ points</div>
                                </div>
                                <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 text-center border border-purple-700">
                                    <div className="text-purple-400 font-medium text-lg mb-1">Join Discord</div>
                                    <div className="text-green-400 font-semibold">+ points</div>
                                </div>
                            </div>
                        </div>
                    </TutorialStep>

                    {/* Blockchain Activity */}
                    <TutorialStep
                        link={'https://testnet.pharosnetwork.xyz/experience'}
                        title="6. Blockchain Activity"
                        description="Perform transactions and interact with the protocol"
                        imageSrc="/api/placeholder/800/500"
                        gradient="from-teal-900 to-blue-900"
                        color="text-teal-400"
                    >
                        <div className="space-y-4">
                            <div className="bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded-lg p-4">
                                <h5 className="text-yellow-400 font-medium mb-2">Task examples:</h5>
                                <ul className="space-y-1 text-gray-300">
                                    <li>• Make swaps between test tokens (PHRS, USDT, USDC)</li>
                                    <li>• Deposit into liquidity pool</li>
                                    <li>• Send tokens to another address</li>
                                </ul>
                            </div>
                        </div>
                    </TutorialStep>

                    {/* History and Progress */}
                    <TutorialStep
                        link={'https://pharoshub.xyz/'}
                        title="7. History and Progress"
                        description="Track your achievements and progress"
                        imageSrc="/api/placeholder/800/500"
                        gradient="from-indigo-900 to-purple-900"
                        color="text-indigo-400"
                    >
                        <div className="space-y-4">
                            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-indigo-400 mr-2">•</span>
                                        List of completed tasks
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-400 mr-2">•</span>
                                        Current level, points count
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-400 mr-2">•</span>
                                        Progress visualization
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6">
                                <div className="grid grid-cols-3 gap-6 text-center">
                                    <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4">
                                        <div className="text-3xl font-bold text-green-400 mb-1">Level 5</div>
                                        <div className="text-sm text-gray-400">Current level</div>
                                    </div>
                                    <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4">
                                        <div className="text-3xl font-bold text-blue-400 mb-1">1,250</div>
                                        <div className="text-sm text-gray-400">Total points</div>
                                    </div>
                                    {/*<div className="bg-gray-700 bg-opacity-50 rounded-lg p-4">*/}
                                    {/*    <div className="text-3xl font-bold text-purple-400 mb-1">85%</div>*/}
                                    {/*    <div className="text-sm text-gray-400">Progress</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </TutorialStep>

                    {/* Block Explorer */}
                    <TutorialStep
                        image={"./faucet.png"}
                        title="8. Blockchain Explorer"
                        description="Explore blocks and transactions"
                        imageSrc="/api/placeholder/800/500"
                        gradient="from-gray-900 to-gray-700"
                        color="text-gray-400"
                    >
                        <div className="space-y-4">
                            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6">
                                <h5 className="text-blue-400 font-medium mb-4 text-lg">Recent Transactions</h5>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-gray-700 bg-opacity-50 rounded-lg">
                                        <span className="text-gray-400 font-mono">0x1234...5678</span>
                                        <span className="text-green-400 font-semibold">+0.5 PHRS</span>
                                        <span className="text-gray-500">2 min ago</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-700 bg-opacity-50 rounded-lg">
                                        <span className="text-gray-400 font-mono">0x9876...5432</span>
                                        <span className="text-red-400 font-semibold">-1.2 PHRS</span>
                                        <span className="text-gray-500">5 min ago</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-700 bg-opacity-50 rounded-lg">
                                        <span className="text-gray-400 font-mono">0xabcd...ef01</span>
                                        <span className="text-green-400 font-semibold">+2.0 PHRS</span>
                                        <span className="text-gray-500">8 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TutorialStep>

                    {/* Quick Links */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-3xl font-bold text-white mb-8 text-center">Quick Access</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <a
                                href="https://testnet.pharosnetwork.xyz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <ExternalLink className="text-white group-hover:scale-110 transition-transform" size={32} />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">Testnet Dashboard</h4>
                                <p className="text-gray-200">Access to main testnet interface</p>
                            </a>
                            <a
                                href="https://testnet.zenithfinance.xyz/faucet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-center hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <ExternalLink className="text-white group-hover:scale-110 transition-transform" size={32} />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">Faucet</h4>
                                <p className="text-gray-200">Get free test tokens</p>
                            </a>
                            <a
                                href="https://testnet.pharosscan.xyz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <ExternalLink className="text-white group-hover:scale-110 transition-transform" size={32} />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">Block Explorer</h4>
                                <p className="text-gray-200">Explore transactions and blocks</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <ImageModal
                src={selectedImage?.src}
                alt={selectedImage?.alt}
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
};

export default PharosTestnetTutorial;
