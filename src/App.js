import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, Check, X, Layers, Zap, Shield, Globe, Users, Code, Target, BookOpen, Award } from 'lucide-react';
import PharosTestnetTutorial from "./TestnetTutorial";

const App = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedCards, setExpandedCards] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    const correctAnswers = {
      q1: 'layer1',
      q2: 'evm-wasm',
      q3: 'pbft',
      q4: 'rwa'
    };

    const score = Object.entries(correctAnswers).reduce((total, [question, correct]) => {
      return total + (quizAnswers[question] === correct ? 1 : 0);
    }, 0);

    return score;
  };

  const sections = [
    { id: 'intro', title: 'What is Pharos?', icon: Globe },
    { id: 'testnet', title: 'Testnet Tutorial', icon: BookOpen },
    { id: 'architecture', title: 'Architecture', icon: Layers },
    { id: 'features', title: 'Features', icon: Zap },
    { id: 'nodes', title: 'Network Nodes', icon: Users },
    { id: 'security', title: 'Security', icon: Shield },
    { id: 'usecases', title: 'Use Cases', icon: Target },
    { id: 'quiz', title: 'Quiz', icon: Award },
  ];

  const renderQuiz = () => {
    const questions = [
      {
        id: 'q1',
        question: 'What is Pharos?',
        options: [
          { id: 'layer1', text: 'Layer-1 blockchain' },
          { id: 'layer2', text: 'Layer-2 solution' },
          { id: 'dex', text: 'Decentralized exchange' },
          { id: 'wallet', text: 'Wallet' }
        ]
      },
      {
        id: 'q2',
        question: 'Which virtual machines does Pharos support?',
        options: [
          { id: 'evm', text: 'Only EVM' },
          { id: 'wasm', text: 'Only WASM' },
          { id: 'evm-wasm', text: 'EVM and WASM' },
          { id: 'custom', text: 'Custom VM' }
        ]
      },
      {
        id: 'q3',
        question: 'What consensus does Pharos support?',
        options: [
          { id: 'pow', text: 'Proof of Work' },
          { id: 'pbft', text: 'PBFT, PoS, PoA' },
          { id: 'dpos', text: 'Delegated PoS' },
          { id: 'poa', text: 'PoA only' }
        ]
      },
      {
        id: 'q4',
        question: 'What is RWA?',
        options: [
          { id: 'rwa', text: 'Tokenization of real-world assets' },
          { id: 'defi', text: 'DeFi protocol' },
          { id: 'nft', text: 'NFT collection' },
          { id: 'dao', text: 'Decentralized organization' }
        ]
      }
    ];

    const score = calculateScore();
    const maxScore = questions.length;

    return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">🎯 Test Your Knowledge</h2>
            <p className="text-gray-300">Answer questions about the Pharos Network</p>
          </div>

          {questions.map((q) => (
              <div key={q.id} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">{q.question}</h3>
                <div className="space-y-3">
                  {q.options.map((option) => (
                      <label
                          key={option.id}
                          className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-colors"
                      >
                        <input
                            type="radio"
                            name={q.id}
                            value={option.id}
                            checked={quizAnswers[q.id] === option.id}
                            onChange={() => handleQuizAnswer(q.id, option.id)}
                            className="text-blue-500"
                        />
                        <span className="text-gray-300">{option.text}</span>
                      </label>
                  ))}
                </div>
              </div>
          ))}

          <div className="text-center">
            <button
                onClick={() => setShowResults(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Check Results
            </button>
          </div>

          {showResults && (
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
                <div className="text-4xl font-bold text-white mb-2">{score}/{maxScore}</div>
                <p className="text-gray-300 mb-4">
                  {score === maxScore
                      ? '🎉 Excellent! You know Pharos!'
                      : score >= maxScore * 0.7
                          ? '👍 Good job! Almost perfect!'
                          : '📚 Time to review the material again'}
                </p>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-1000"
                      style={{ width: `${(score / maxScore) * 100}%` }}
                  ></div>
                </div>
              </div>
          )}
        </div>
    );
  };


  const renderContent = () => {
    switch(activeSection) {
      case 'intro':
        return (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pharos Network
          </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  High-performance Layer-1 blockchain connecting traditional fintech technologies with Web3
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8 border border-gray-800">
                  <Globe className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Key Objectives</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Instant payments</li>
                    <li>• Real-world asset tokenization</li>
                    <li>• DeFi and enterprise application support</li>
                    <li>• EVM compatibility</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 border border-gray-800">
                  <Zap className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Technologies</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• ZK (Zero-Knowledge)</li>
                    <li>• TEE (Trusted Execution Environment)</li>
                    <li>• FHE (Fully Homomorphic Encryption)</li>
                    <li>• Modern computational frameworks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-semibold text-white mb-4">Funding</h3>
                <p className="text-gray-300 mb-4">
                  First funding round: <span className="text-green-400 font-bold">$8 million</span>
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-blue-800 text-blue-200 px-4 py-2 rounded-full">Faction</span>
                  <span className="bg-purple-800 text-purple-200 px-4 py-2 rounded-full">Hack VC</span>
                  <span className="bg-pink-800 text-pink-200 px-4 py-2 rounded-full">SNZ Holding</span>
                  <span className="bg-green-800 text-green-200 px-4 py-2 rounded-full">Hash Global</span>
                </div>
              </div>
            </div>
        );

      case 'testnet':
        return (
            <PharosTestnetTutorial />
        );

      case 'architecture':
        return (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">🏗️ Pharos Architecture</h2>
                <p className="text-gray-300">Modular and parallel architecture for maximum performance</p>
              </div>

              <div className="grid gap-6">
                <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 border border-gray-800">
                  <h3 className="text-2xl font-semibold text-white mb-4">Three Network Layers</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">L1-Extension</h4>
                      <p className="text-gray-300">Modular extensions for specific tasks (ML, sidechains)</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">L1-Core</h4>
                      <p className="text-gray-300">Global distributed network, decentralized nodes, consensus</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-pink-400 mb-2">Base Layer</h4>
                      <p className="text-gray-300">Data management, hardware acceleration, state compression</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                    <Code className="w-10 h-10 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Execution Layer</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Dual virtual machine (EVM + WASM)</li>
                      <li>• Smart contract support for multiple languages</li>
                      <li>• High performance</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                    <Shield className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Consensus Layer</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• PBFT, PoS, PoA support</li>
                      <li>• Simultaneous block proposals</li>
                      <li>• Enhanced scalability</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8 border border-gray-800">
                  <h3 className="text-2xl font-semibold text-white mb-4">Asynchronous Pipeline</h3>
                  <p className="text-gray-300 mb-4">All processes are divided into 6 stages for optimal network performance</p>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {['Receipt', 'Validation', 'Execution', 'Consensus', 'Finalization', 'Storage'].map((step, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                          <div className="text-sm font-semibold text-white">{index + 1}</div>
                          <div className="text-xs text-gray-400">{step}</div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        );

      case 'features':
        return (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">⚡ Key Features</h2>
                <p className="text-gray-300">What makes Pharos special</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-900 to-blue-900 rounded-xl p-6 border border-gray-800">
                  <Zap className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">High Performance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• High TPS</li>
                    <li>• &lt; 1 second finality</li>
                    <li>• Parallel execution</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 border border-gray-800">
                  <Shield className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Security</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ZK technologies</li>
                    <li>• TEE protection</li>
                    <li>• FHE computation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-6 border border-gray-800">
                  <Globe className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">DEX with CLOB</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Spot/Perp trading</li>
                    <li>• TP/SL, TWAP orders</li>
                    <li>• Centralized order book</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-semibold text-white mb-6">Developer Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">EVM Compatibility</h4>
                        <p className="text-gray-300">Easily port dApps from Ethereum</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Modularity</h4>
                        <p className="text-gray-300">Build L1/L2 solutions like Cosmos SDK</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Scalability</h4>
                        <p className="text-gray-300">Architecture inspired by GPUs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">High TPS</h4>
                        <p className="text-gray-300">Tens of thousands of transactions per second</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );


      case 'nodes':
        return (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">🌐 Network Nodes</h2>
                <p className="text-gray-300">Node types and their roles in the Pharos ecosystem</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-xl p-6 border border-gray-800">
                  <Shield className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Validators</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Ensure network security</li>
                    <li>• Earn rewards through staking</li>
                    <li>• Support restaking</li>
                    <li>• Participate in consensus</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-6 border border-gray-800">
                  <Layers className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Full Nodes</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• State synchronization</li>
                    <li>• Data indexing</li>
                    <li>• API access</li>
                    <li>• Block history storage</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-xl p-6 border border-gray-800">
                  <Zap className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Relay Nodes</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Speed up data propagation</li>
                    <li>• Optimize network topology</li>
                    <li>• Reduce latency</li>
                    <li>• Improve reliability</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-semibold text-white mb-6">Execution Technologies</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-400">EVM (Ethereum Virtual Machine)</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• For Solidity developers</li>
                      <li>• Full Ethereum compatibility</li>
                      <li>• Easy dApp migration</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-purple-400">WASM (WebAssembly)</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• For Rust/C++ developers</li>
                      <li>• Flexible solutions</li>
                      <li>• High performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        );

      case 'security':
        return (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">🔐 Innovation & Security</h2>
                <p className="text-gray-300">Cutting-edge technologies for protection and privacy</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl p-8 border border-gray-800">
                  <Shield className="w-12 h-12 text-indigo-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">zkDID</h3>
                  <p className="text-gray-300 mb-4">Decentralized identity powered by Zero-Knowledge technologies</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Private identity verification</li>
                    <li>• Full control over personal data</li>
                    <li>• Compatible with KYC/AML</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 border border-gray-800">
                  <Globe className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">ZK-KYC/AML</h3>
                  <p className="text-gray-300 mb-4">Built-in privacy and compliance at the network level</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Regulatory compliance</li>
                    <li>• Privacy protection</li>
                    <li>• Automated verification</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-semibold text-white mb-6">AsyncBFT Consensus</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Fault Tolerance</h4>
                    <p className="text-gray-300">Continues to operate even when some nodes fail</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Fast Consensus</h4>
                    <p className="text-gray-300">Minimal latency in decision-making</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">High Security</h4>
                    <p className="text-gray-300">Protection against various types of attacks</p>
                  </div>
                </div>
              </div>
            </div>
        );

      case 'usecases':
        return (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">🎯 Use Cases</h2>
                <p className="text-gray-300">Practical applications of Pharos technologies</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-900 to-blue-900 rounded-xl p-8 border border-gray-800">
                  <Target className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">RWA – Tokenization of Real-World Assets</h3>
                  <p className="text-gray-300 mb-4">Turning physical assets into digital tokens</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Real estate</li>
                    <li>• Financial instruments</li>
                    <li>• Goods and commodities</li>
                    <li>• Intellectual property</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8 border border-gray-800">
                  <Globe className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">DeFi & Enterprise Solutions</h3>
                  <p className="text-gray-300 mb-4">Decentralized financial services for businesses</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Corporate payments</li>
                    <li>• Lending</li>
                    <li>• Liquidity management</li>
                    <li>• Finance automation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 border border-gray-800">
                  <Code className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Machine Learning & AI</h3>
                  <p className="text-gray-300 mb-4">Decentralized computing for AI</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Model training</li>
                    <li>• Distributed computation</li>
                    <li>• Private data</li>
                    <li>• Algorithm monetization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-xl p-8 border border-gray-800">
                  <Layers className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Sidechains & L2</h3>
                  <p className="text-gray-300 mb-4">Experimental environments with low risk</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Testing new features</li>
                    <li>• Specialized applications</li>
                    <li>• Isolated environments</li>
                    <li>• Custom consensus mechanisms</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-semibold text-white mb-6">Examples of Real-World Projects</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Real Estate Tokenization</h4>
                    <p className="text-gray-300">Fractional ownership of large properties for investment</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Corporate Payments</h4>
                    <p className="text-gray-300">Automated international transfers and settlements</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">AI Marketplace</h4>
                    <p className="text-gray-300">Trading of machine learning algorithms</p>
                  </div>
                </div>
              </div>
            </div>
        );

      case 'quiz':
        return renderQuiz();

      default:
        return <div>Select a section to study</div>;
    }
  };

  return (
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 border-b border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Pharos Network</h1>
                  <p className="text-gray-300">Training center</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="https://testnet.pharosnetwork.xyz/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                  <span>Testnet</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://testnet.pharosscan.xyz/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                  <span>Explorer</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 sticky top-8">
                <h2 className="text-lg font-semibold text-white mb-4">Содержание</h2>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                                activeSection === section.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-800'
                            }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-sm">{section.title}</span>
                        </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {renderContent()}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 border-t border-gray-800 mt-16">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a href="http://x.com/gainatullin" target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a href="http://x.com/gainatullin" target="_blank" rel="noopener noreferrer">
                  <span className="text-gray-400">© 2025 MG</span>
                </a>
              </div>
              <div className="flex space-x-6">
                <a href="https://testnet.zenithfinance.xyz/faucet" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  Faucet
                </a>
                <a href="https://testnet.pharosnetwork.xyz/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  Testnet
                </a>
                <a href="https://testnet.pharosscan.xyz/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  Explorer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
