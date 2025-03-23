React
AppKit has support for Wagmi and Ethers v6 on Ethereum, @solana/web3.js on Solana and Bitcoin. Choose one of these to get started.

Installation
If you prefer referring to a video tutorial for this, please click here.

AppKit CLI
Reown offers a dedicated CLI to set up a minimal version of AppKit in the easiest and quickest way possible.

To do this, please run the command below.

npx @reown/appkit-cli

After running the command, you will be prompted to confirm the installation of the CLI. Upon your confirmation, the CLI will request the following details:

Project Name: Enter the name for your project.
Framework: Select your preferred framework or library. Currently, you have three options: React, Next.js, and Vue.
Network-Specific libraries: Choose whether you want to install Wagmi, Ethers, Solana, or Multichain (EVM + Solana).
After providing the project name and selecting your preferences, the CLI will install a minimal example of AppKit with your preferred blockchain library. The example will be pre-configured with a projectId that will only work on localhost.

To fully configure your project, please obtain a projectId from the Reown Cloud Dashboard and update your project accordingly.

Refer to this section for more information.

Custom Installation
caution
If you are setting up your React app, please do not use npx create-react-app, as it has been deprecated. Using it may cause dependency issues. Instead, please use Vite to create your React app. You can set it up by running npm create vite@latest.

Wagmi
Ethers
Ethers v5
Solana
Bitcoin
npm
Yarn
Bun
pnpm
npm install @reown/appkit @reown/appkit-adapter-ethers5 ethers@5.7.2

Cloud Configuration
Create a new project on reown Cloud at https://cloud.reown.com and obtain a new project ID.

Don't have a project ID?
Head over to Reown Cloud and create a new project now!

Get started
cloud illustration
Implementation
Wagmi
Ethers
Ethers v5
Solana
Bitcoin
GitHub
Ethers v5 Example
Check the React ethers v5 example

On top of your app set up the following configuration, making sure that all functions are called outside any React component to avoid unwanted rerenders.

import { createAppKit } from '@reown/appkit/react'
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5'
import { mainnet, arbitrum } from '@reown/appkit/networks'

// 1. Get projectId
const projectId = 'YOUR_PROJECT_ID'

// 2. Create a metadata object - optional
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 3. Create the AppKit instance
createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata: metadata,
  networks: [mainnet, arbitrum],
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function App() {
  return <YourApp /> //make sure you have configured the <appkit-button> inside
}

IMPORTANT
Make sure that the url from the metadata matches your domain and subdomain. This will later be used by the Verify API to tell wallets if your application has been verified or not.

Trigger the modal
Wagmi
Ethers
Ethers v5
Solana
Bitcoin
To open AppKit you can use our web component or build your own button with AppKit hooks.

Web Component
Hooks
export default function ConnectButton() {
  return <appkit-button />
}

Learn more about the AppKit web components here

note
Web components are global html elements that don't require importing.

Smart Contract Interaction
Wagmi
Ethers
Solana
Wagmi hooks can help us interact with wallets and smart contracts:

import { useReadContract } from 'wagmi'
import { USDTAbi } from '../abi/USDTAbi'

const USDTAddress = '0x...'

function App() {
  const result = useReadContract({
    abi: USDTAbi,
    address: USDTAddress,
    functionName: 'totalSupply'
  })
}

Read more about Wagmi hooks for smart contract interaction here.

Video Tutorial

Edit this page
Last updated on Jan 24, 2025

Hooks
Hooks are functions that will help you control the modal, subscribe to wallet events and interact with them and smart contracts.

useAppKit
Hook for controlling the modal.

import { useAppKit } from '@reown/appkit/react'

export default function Component() {
  const { open, close } = useAppKit()
}

Returns
open: Function to open the modal
close: Function to close the modal
Parameters
You can also select the modal's view when calling the open function

open({ view: 'Account' })

List of views you can select

Variable	Description
Connect	Principal view of the modal - default view when disconnected
Account	User profile - default view when connected
AllWallets	Shows the list of all available wallets
Networks	List of available networks - you can select and target a specific network before connecting
WhatIsANetwork	"What is a network" onboarding view
WhatIsAWallet	"What is a wallet" onboarding view
OnRampProviders	"On-Ramp main view
Swap	"Swap main view
useAppKitAccount
Hook for accessing account data and connection status.

import { useAppKitAccount } from "@reown/appkit/react";

export default Component(){
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount()
}


Returns
allAccounts: A list of connected accounts
address: The current account address
caipAddress: The current account address in CAIP format
isConnected: Boolean that indicates if the user is connected
status: The current connection status
embeddedWalletInfo: The current embedded wallet information
type EmbeddedWalletInfo {
  user: {
    username: string
    email: string
  },
  accountType: 'eoa' | 'smartAccount',
  isSmartAccountDeployed: boolean
}

type ConnectionStatus = 'connected' | 'disconnected' | 'connecting' | 'reconnecting'

type UseAppKitAccountReturnType = {
  isConnected: boolean
  allAccounts: Account[]
  status?: ConnectionStatus
  address?: string
  caipAddress?: `${string}:${string}`
  embeddedWalletInfo?: EmbeddedWalletInfo
}


useAppKitNetwork
Hook for accessing network data and methods.

import { useAppKitNetwork } from "@reown/appkit/react";

export default Component(){
  const { caipNetwork, caipNetworkId, chainId, switchNetwork } = useAppKitNetwork()
}


Returns
caipNetwork: The current network object
caipNetworkId: The current network id in CAIP format
chainId: The current chain id
switchNetwork: Function to switch the network. Accepts a caipNetwork object as argument.
info
See how to import or create a networks here.

useAppKitState
Hook for getting the current value of the modal's state.

import { useAppKitState } from '@reown/appkit/react'

const { open, selectedNetworkId } = useAppKitState()

Returns
open: Boolean that indicates if the modal is open
selectedNetworkId: The current chain id selected by the user
useAppKitTheme
Hook for controlling the modal's theme.

import { useAppKitTheme } from '@reown/appkit/react'
const { themeMode, themeVariables, setThemeMode, setThemeVariables } = useAppKitTheme()

setThemeMode('dark')

setThemeVariables({
  '--w3m-color-mix': '#00BB7F',
  '--w3m-color-mix-strength': 40
})


useAppKitEvents
Hook for subscribing to modal events.

import { useAppKitEvents } from '@reown/appkit/react'

const events = useAppKitEvents()

useDisconnect
Hook for disconnecting the session.

import { useDisconnect } from '@reown/appkit/react'

const { disconnect } = useDisconnect()

await disconnect()

useWalletInfo
Hook for accessing wallet information.

import { useWalletInfo } from '@reown/appkit/react'


export default Component(){
  const { walletInfo } = useWalletInfo()
}

useAppKitWallet

Using the wallet button hooks (Demo in our Lab), you can directly connect to the top 20 wallets, WalletConnect QR and also all the social logins. This hook allows to customize dApps, enabling users to connect their wallets effortlessly, all without the need to open the traditional modal. Execute this command to install the library for use it:

npm
Yarn
Bun
pnpm
npm i @reown/appkit-wallet-button

Then you have to import the hook in your project:

import { useAppKitWallet } from '@reown/appkit-wallet-button/react'

And finally, you can use the hook in your project:

const { isReady, isPending, connect } = useAppKitWallet({
    onSuccess() {
      // ...
    },
    onError(error) {
      // ...
    }
  })

...

// Connect to a wallet
<Button onClick={() => connect("walletConnect")} />

Options for the connect parameter
Type	Options
QR Code
walletConnect
Wallets
metamask, trust, coinbase, rainbow, jupiter, solflare, coin98, magic-eden, backpack, frontier and phantom
Social logins
google, github, apple, facebook, x, discord and farcaster
Ethereum/Solana Library
Wagmi
Ethers
Ethers v5
Solana
switchNetwork
import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum, polygon } from '@reown/appkit/networks'

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum],
  metadata: metadata,
  features: {
    analytics: true,
  }
})

modal.switchNetwork(polygon)

useAppKitProvider
Hook that returns the walletProvider and the WalletProviderType.

import { useAppKitAccount, useAppKitProvider, useAppKitNetwork  } from '@reown/appkit/react'
import { ethers } from 'ethers'
import { useAppKitProvider } from '@reown/appkit/react'

function Components() {
  const { walletProvider } = useAppKitProvider('eip155')
  const { address } = useAppKitAccount()
  const { chainId } = useAppKitNetwork()

  async function onSignMessage() {
    const provider = new ethers.providers.Web3Provider(walletProvider, chainId)
    const signer = provider.getSigner(address)
    const signature = await signer?.signMessage('Hello AppKit Ethers')
    console.log(signature)
  }

  return <button onClick={() => onSignMessage()}>Sign Message</button>
}

getError
function Components() {
  const error = modal.getError();
  //...
}

Learn More About Ethers
Edit this page
Last updated on Jan 18, 2025

Options
Options
The following options can be passed to the createAppKit function:

createAppKit({ adapters, projectId, networks, ...options })

networks
Array of networks that can be chosen from the @reown/appkit/networks library. This library retrieves the list of EVM networks from Viem and also includes the Solana networks.

import { mainnet, solana } from '@reown/appkit/networks'

createAppKit({
  // ...
  networks: [mainnet, solana]
})

For custom networks, refer to this doc page.

metadata
Metadata for your AppKit. The name, description, icons, and url are used at certain places like the wallet connection, sign message, etc screens. If not provided, they will be fetched from the metadata of your website's document object.

createAppKit({
  // ...
  metadata: {
    name: 'My App',
    description: 'My App Description',
    icons: ['https://myapp.com/icon.png'],
    url: 'https://myapp.com'
  }
})

For custom networks, refer to this doc page.

defaultNetwork
Desired network for the initial connection as default:

Wagmi
Ethers
Solana
import { mainnet } from '@reown/appkit/networks'

createAppKit({
  //...
  defaultNetwork: mainnet
})

featuredWalletIds
Select wallets that are going to be shown on the modal's main view. Default wallets are MetaMask and Trust Wallet. Array of wallet ids defined will be prioritized (order is respected). These wallets will also show up first in All Wallets view. You can find the wallets IDs in Wallets List or in WalletGuide

createAppKit({
  //...
  featuredWalletIds: [
    '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
  ]
})

tokens
Tokens for AppKit to show the user's balance of. Each key represents the chain id of the token's blockchain.

createAppKit({
  //...
  tokens: {
    "eip155:1": {
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      image: 'token_image_url' //optional
    },
    "eip155:137": {
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      image: 'token_image_url' //optional
    }
  }
})

If you would like to remove default wallets completely, you can set the featuredWalletIds property to an empty array.

chainImages
Add or override the modal's network images.

createAppKit({
  // ...
  chainImages: {
    1: 'https://my.images.com/eth.png'
  }
})

connectorImages
Wagmi
Ethers
Solana
Set or override the images of any connector. The key of each property must match the id of the connector.

createAppKit({
  connectorImages: {
    coinbaseWallet: 'https://images.mydapp.com/coinbase.png',
    metaMask: 'https://images.mydapp.com/metamask.png'
  }
})

enableWalletConnect
Enable or disable WalletConnect QR feature. Default is true.

enableWalletConnect: false

debug
Enable or disable debug mode in your AppKit. This is useful if you want to see UI alerts when debugging. Default is false.

debug: true

termsConditionsUrl
You can add an url for the terms and conditions link.

createAppKit({
  //...
  termsConditionsUrl: 'https://www.mytermsandconditions.com'
})

privacyPolicyUrl
A URL for the privacy policy link.

createAppKit({
  //...
  privacyPolicyUrl: 'https://www.myprivacypolicy.com'
})

features
Allows you to toggle (enable or disable) additional features provided by AppKit. Features such as analytics, email and social logins, On-ramp, swaps, etc., can be enabled using this parameter.

analytics
Enable analytics to get more insights on your users activity within your Reown Cloud's dashboard

createAppKit({
  //...
  features: {
    analytics: true
  }
})

Learn More
swaps
Enable or disable the swap feature in your AppKit. Swaps feature is enabled by default.

createAppKit({
  //...
  features: {
    swaps: true
  }
})

onramp
Enable or disable the onramp feature in your AppKit. Onramp feature is enabled by default.

createAppKit({
  //...
  features: {
    onramp: true
  }
})

connectMethodsOrder
Order of the connection methods in the modal. The default order is ['wallet', 'email', 'social'].


createAppKit({
  //...
  features: {
    connectMethodsOrder: ['social', 'email', 'wallet'],
  }
})

legalCheckbox
Enable or disable the terms of service and/or privacy policy checkbox.

createAppKit({
  //...
  features: {
    legalCheckbox: true
  }
})


customWallets
Adds custom wallets to the modal. customWallets is an array of objects, where each object contains specific information of a custom wallet.

createAppKit({
  //...
  customWallets: [
    {
      id: 'myCustomWallet',
      name: 'My Custom Wallet',
      homepage: 'www.mycustomwallet.com', // Optional
      image_url: 'my_custom_wallet_image', // Optional
      mobile_link: 'mobile_link', // Optional - Deeplink or universal
      desktop_link: 'desktop_link', // Optional - Deeplink
      webapp_link: 'webapp_link', // Optional
      app_store: 'app_store', // Optional
      play_store: 'play_store' // Optional
    }
  ]
})

AllWallets
caution
If the "All Wallets" button is removed on mobile, all the mobile wallets that were not added on the main view of the modal won't be able to connect to your website via WalletConnect protocol.

The allWallets parameter allows you to add or remove the "All Wallets" button on the modal.

Value	Description
SHOW	Shows the "All Wallets" button on AppKit.
HIDE	Removes the "All Wallets" button from AppKit.
ONLY_MOBILE	Shows the "All Wallets" button on AppKit only on mobile.
createAppKit({
  //...
  allWallets: 'ONLY_MOBILE'
})

includeWalletIds & excludeWalletIds
caution
Wallets that are either not included or excluded won't be able to connect to your website on mobile via WalletConnect protocol.

includeWalletIds
Override default recommended wallets that are fetched from WalletGuide. Array of wallet ids defined will be shown (order is respected). Unlike featuredWalletIds, these wallets will be the only ones shown in All Wallets view and as recommended wallets. You can find the wallets IDs in our Wallets List.

createAppKit({
  //...
  includeWalletIds: [
    '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
  ]
})

excludeWalletIds
Exclude wallets that are fetched from WalletGuide. Array of wallet ids defined will be excluded. All other wallets will be shown in respective places. You can find the wallets IDs in our Wallets List.

createAppKit({
  //...
  excludeWalletIds: [
    '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
  ]
})

Coinbase Smart Wallet
The Coinbase connector now includes a new flag to customize the Smart Wallet behavior.

Note
To enable the Coinbase Smart Wallet feature, ensure that AppKit is updated to version 4.2.3 or higher. Additionally, if you are using Wagmi, verify that it is on the latest version.

The preference (or coinbasePreference) flag accepts one of the following string values:

eoaOnly: Uses EOA Browser Extension or Mobile Coinbase Wallet.
smartWalletOnly: Displays Smart Wallet popup.
all (default): Supports both eoaOnly and smartWalletOnly based on context.
Wagmi
Ethers
AppKit can be configured in two different ways: Default or Custom

Select your preferred configuration mode below:

Default
Custom
createAppKit({
  //...
  enableCoinbase: true, // true by default
  coinbasePreference: 'smartWalletOnly'
})

Web Components
AppKit's web components are custom and reusable HTML tags. They will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

info
Web components are global html elements that don't require importing.

List of optional properties for AppKit web components
<appkit-button />
Variable	Description	Type
disabled	Enable or disable the button.
boolean
balance	Show or hide the user's balance.
'show' or 'hide'
size	Default size for the button.
'md' or 'sm'
label	The text shown in the button.
string
loadingLabel	The text shown in the button when the modal is open.
string
<appkit-account-button />
Variable	Description	Type
disabled	Enable or disable the button.
boolean
balance	Show or hide the user's balance.
'show' or 'hide'
<appkit-connect-button />
Variable	Description	Type
size	Default size for the button.
'md' or 'sm'
label	The text shown in the button.
string
loadingLabel	The text shown in the button when the modal is open.
string
<appkit-network-button />
Variable	Description	Type
disabled	Enable or disable the button.
boolean
<appkit-wallet-button />

Using the wallet button components (Demo in our Lab), you can directly connect to the top 20 wallets, WalletConnect QR, and all the social logins. This component allows to customize dApps, enabling users to connect their wallets effortlessly, all without the need to open the traditional modal.

Follow these steps to use the component:

Install the package:
npm
Yarn
Bun
pnpm
npm i @reown/appkit-wallet-button

Import the library in the project:
import '@reown/appkit-wallet-button/react'

Use the component in the project:
<appkit-wallet-button wallet="metamask" />

Options for wallet property
Type	Options
QR Code
walletConnect
Wallets
metamask, trust, coinbase, rainbow, jupiter, solflare, coin98, magic-eden, backpack, frontier and phantom
Social logins
google, github, apple, facebook, x, discord and farcaster

Email & Socials
To allow users to authenticate using their email or social accounts, you need to configure the features parameter in the createAppKit function.

Wagmi
Ethers
Solana
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum],
  metadata,
  features: {
    email: true, // default to true
    socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
    emailShowWallets: true, // default to true
  },
  allWallets: 'SHOW', // default to SHOW
})


info
AppKit with ethers v5 does not support the auth parameter and social logins. If you're using ethers v5, please consider upgrading to ethers v6 following this ethers migration guide and AppKit Docs

Options
email [boolean] : This boolean defines whether you want to enable email login. Default true
socials [array] : This array contains the list of social platforms that you want to enable for user authentication. The platforms in the example include Google, X, GitHub, Discord, Apple, Facebook and Farcaster. The default value of undefined displays everything. Set it to false to disable this feature. You can also pass an empty array to disable it.
emailShowWallets [boolean] : This boolean defines whether you want to show the wallet options on the first connect screen. If this is false and socials are enabled, it will show a button that directs you to a new screen displaying the wallet options. Default true
User flow
Users will be able to connect to you application by simply using an email address. AppKit will send to them a One Time Password (OTP) to copy and paste in the modal, which will help to verify the user's authenticity. This will create a non-custodial wallet for your user which will be available in any application that integrates AppKit and email login.

Eventually the user can optionally choose to move from a non-custodial wallet to a self-custodial one by pressing "Upgrade Wallet" on AppKit. This will open the (WalletConnect secure website) that will walk your user through the upgrading process.

UI Variants
AppKit SDK offers multiple UI variants to customize the user experience for the authentication process.

By configuring the emailShowWallets option in the features parameter, you can control the initial connect screen behavior:

emailShowWallets: true: When this option is enabled, the initial connect screen will display the available wallet options directly to the user. This allows users to choose their preferred wallet immediately.


emailShowWallets: false: If this option is disabled, the initial connect screen will show a button instead. When the user clicks this button, they will be directed to a new screen that lists all the available wallet options. This can help simplify the initial interface and reduce visual clutter.


By configuring the socials option in the features parameter, you can control the amount of social providers you want to show on the connect screen:

socials: ['google']: When you only set one social provider, it will give you a button with `connect with provider.


socials: ['google', 'discord']: When you set 2 social provider, it will give you 2 buttons next to each other with the logo of the social provider


 socials: ['google', 'x', 'discord', 'apple', 'github']: When you set more than 2 social providers, the first provider in the array will get a button with connect with provider. The other providers will get a button with the logo of the social provider next to each other.


socials: [] or socials: false: When you want to disable social logins.


 email: false: When you want to disable email login.


By configuring the allWallets option inside the createAppKit function, you can control whether if and when you want to display all wallets.

allWallets: 'HIDE': When you do not want to display all wallets.


allWallets: 'SHOW': When you want to display all wallets.


allWallets: 'ONLY_MOBILE': When you want to display all wallets only on a mobile device.
Edit this page
Last updated on Jan 18, 2025

Smart Accounts
Overview
note
💡 Ensure you update AppKit to the latest version for optimal compatibility.

Smart Accounts (SAs) are enabled by default within AppKit. These accounts enhance functionality by emitting 1271 and 6492 signatures, which should be taken into account for signature verification processes, such as Sign-In with Ethereum (SIWE).

Deployment
Smart Accounts are deployed alongside the first transaction. Until deployment, a precalculated address, known as the counterfactual address, is displayed. Despite not being deployed, the account can still sign using 6492 signatures.

Supported Networks
Smart Accounts are available on the following networks:

Base Sepolia
BSC (Binance Smart Chain)
Fraximal
Linea
Mode
Optimism
Polygon
Polygon Mumbai
Sepolia
User Eligibility
Smart Accounts are exclusively available for embedded wallet users (email and social login)

FAQ
What is a Smart Account?
A Smart Account improves the traditional account experience by replacing Externally Owned Accounts (EOAs) with a Smart Contract that follows the ERC-4337 standard. This opens up many use cases that were previously unavailable.

Smart Accounts do no require Private Keys or Seed Phrases, instead they rely on a key or multiple keys from designated signers to access the smart account and perform actions on chain. The keys can take multiple forms including passkeys and EOA signatures.

What can I do with a Smart Account?
Smart accounts unlock a host of use cases that were previously unavailable with EOAs. Essentially anything that can be programmed into a smart contract can be used by Smart Accounts.

Automated Transactions: Set up recurring payments or conditional transfers.
Multi-Signature Authorization: Require multiple approvals for a transaction to increase security.
Delegated Transactions: Allow a third party to execute transactions on your behalf under specific conditions.
Enhanced Security: Implement complex security mechanisms such as time-locked transactions and withdrawal limits.
Interoperability: Interact seamlessly with decentralized applications (dApps) and decentralized finance (DeFi) protocols.
Custom Logic: Create custom transaction rules and workflows that align with personal or business requirements.
How do I get a Smart Account?
Existing AppKit Universal Wallet Users will be given the option to upgrade their account to a smart account. Once you upgrade you will still be able to access your EOA and self-custody your account.

New AppKit Universal Wallet Users will be given smart accounts by default when they login for the first time.

Does it cost anything?
There is a small additional cost for activating your smart account. The activation fee is added to the first transaction and covers the network fees required for deploying the new smart contract onchain.

Can I export my Smart Account?
No, you cannot export your Smart Account. The Smart Account (SA) is deployed by the EOA and is owned by the EOA. Your EOA account will always be exportable. Also is good to know that SA don't have seedphrases.

Can I withdraw all my funds from my Smart Account?
Yes, you can withdraw all your funds from your Smart Account.

What are account names?
Smart account addresses start with ’0x’ followed by 42 characters, this is the unique address of your smart account on the network. ‘0x’ addresses like this are long, unwieldy and unmemorable. AppKit allows you to assign a more memorable name for your smart account using ENS Resolvers.

You can assign a name to your account and this will act as an alias for your account that can be shared publicly and provide a better user experience. AppKit account names are followed by the "reown.id" domain.

What can I do with my account name?
As AppKit smart account addresses are the same across the supported networks by Pimlico, you only need one account name which can then be used across the networks.

For example if you want someone to send you USDC on Polygon they can send it to “johnsmith.reown.id”. If you want someone wants to send you USDC on Optimism they can also use “johnsmith.reown.id”.

Edit this page
Last updated on Jan 18, 2025

Custom connectors
Custom connectors, such as social logins, WalletConnect QR, Coinbasewallet, etc., can be integrated into your Modal. A simple example of how to incorporate them for Wagmi or Ethers library.

Wagmi
Ethers
Solana
import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { sepolia } from '@reown/appkit/networks'

const projectId = 'YOUR_PROJECT_ID'

// Create a metadata object
const metadata = {
  //...
}

// Create Ethers adapter
const ethersAdapter = new EthersAdapter()

// Create a AppKit instance
createAppKit({
  adapters: [ethersAdapter],
  networks: [sepolia],
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

// Now, you can render connect button
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <appkit-button />
  </React.StrictMode>
)

Check our React ethers demo in Github

Edit this page
Last updated on Jan 18, 2025

ustom networks
If you cannot find the network you are looking for within the @reown/appkit/networks path, you can always add a custom network.

Since AppKit v1.1.0, there are two ways to add your network to AppKit:

1. Adding Your Chain to Viem’s Directory (Recommended)
Reown AppKit use Viem to provide EVM chains to users under the hood. If your chain is EVM-compatible, it is recommended to open a PR to Viem to add your network to Viem’s directory. Once your chain is accepted by Viem, it will automatically be available in AppKit with no additional steps required.

Here is the documentation of how to add new chain to Viem: https://github.com/wevm/viem/blob/main/.github/CONTRIBUTING.md#chains

2. Creating a Custom Chain Object
You can also create a custom network object without waiting for approval from Viem’s repository.

Required Information

You will need the following values to create a custom network:

id: Chain ID of the network.
name: Name of the network.
caipNetworkId: CAIP-2 compliant network ID.
chainNamespace: Chain namespace.
nativeCurrency: Native currency of the network.
rpcUrls: Object containing the RPC URLs for the network.
blockExplorers: Object containing the block explorers for the network.
import { defineChain } from '@reown/appkit/networks';

// Define the custom network
const customNetwork = defineChain({
  id: 123456789,
  caipNetworkId: 'eip155:123456789',
  chainNamespace: 'eip155',
  name: 'Custom Network',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['RPC_URL'],
      webSocket: ['WS_RPC_URL'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'BLOCK_EXPLORER_URL' },
  },
  contracts: {
    // Add the contracts here
  }
})

// Then pass it to the AppKit
createAppKit({
    adapters: [...],
    networks: [customNetwork]
})

Edit this page
Last updated on Jan 18, 2025

Sign In With Ethereum
AppKit provides a simple solution for integrating with "Sign In With Ethereum" (SIWE), a new form of authentication that enables users to control their digital identity with their Ethereum account. SIWE is a standard also known as EIP-4361.

One-Click Auth
One-Click Auth represents a key advancement within WalletConnect v2, streamlining the user authentication process in AppKit by enabling them to seamlessly connect with a wallet and sign a SIWE message with just one click.

It supports both EIP-1271, the standard for signature validation in smart accounts, and EIP-6492, which enables signature validation for smart accounts (contracts) that are not yet deployed, allowing messages to be signed without requiring prior deployment.

Connecting a wallet, proving control of an address with an off-chain signature, authorizing specific actions. These are the kinds of authorizations that can be encoded as "ReCaps". ReCaps are permissions for a specific website or dapp that can be compactly encoded as a long string in the message you sign and translated by any wallet into a straight-forward one-sentence summary. reown uses permissions expressed as ReCaps to enable a One-Click Authentication.

Installation
One-Click Auth
Legacy
npm
Yarn
Bun
pnpm
npm i @reown/appkit-siwe siwe viem

Configure your SIWE Client
GitHub
React SIWE Example
Check the client/server React example

One-Click Auth
Legacy
info
If you are not using our library on the server-side, please normalize the address with eip-55 in the createMessage function. You can check our example for that Functionality.

import { SiweMessage } from 'siwe'
import {
    type SIWESession,
    type SIWEVerifyMessageArgs,
    type SIWECreateMessageArgs,
    createSIWEConfig,
    formatMessage,
  } from '@reown/appkit-siwe'

const BASE_URL = 'http://localhost:8080';

/* Function that returns the user's session - this should come from your SIWE backend */
async function getSession(){
   const res = await fetch(BASE_URL + "/session", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  });
  if (!res.ok) {
      throw new Error('Network response was not ok');
  }
  
  const data = await res.json();
  
  const isValidData = typeof data === 'object' && typeof data.address === 'string' && typeof data.chainId === 'number';

  return isValidData ? data as SIWESession : null;
}

/* Use your SIWE server to verify if the message and the signature are valid */
 const verifyMessage = async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
        const response = await fetch(BASE_URL + "/verify", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({ message, signature }),
            credentials: 'include'
        });

        if (!response.ok) {
            return false;
        }
        
        const result = await response.json();
        return result === true;
      } catch (error) {
        return false;
      }
}

// Check the full example for signOut and getNonce functions ... 

/* Create a SIWE configuration object */
export const siweConfig = createSIWEConfig({
  getMessageParams: async () => ({
    domain: window.location.host,
    uri: window.location.origin, 
    chains: [1, 2020],
      statement: 'Please sign with your account',
  }),
  createMessage: ({ address, ...args }: SIWECreateMessageArgs) => formatMessage(args, address),

  getNonce: async () => { //This is only an example, substitute it with your actual nonce getter.
    const nonce = "YOUR_NONCE_GETTER"
    if (!nonce) {
      throw new Error('Failed to get nonce!')
    }
    return nonce
  },
  getSession,
  verifyMessage,
  signOut: async () => { //Example
    // Implement your Sign out function
  }
});


Server Side
Setting up a backend server using Express for a web application that interacts with the Siwe protocol.

Routes:
GET '/nonce': Generates and returns a nonce (single-use random number).
POST '/verify': Uses the Siwe protocol to verify the message, requiring a signature (the one you are going to approve throw the UX) and a nonce stored in the session.
GET '/session': Retrieves the stored Siwe object from the session.
GET '/signout': Clears the session.
import cors from 'cors';
import express from 'express';
import Session from 'express-session';
import { generateNonce } from 'siwe';
import {
  /*verifySignature,*/
  getAddressFromMessage,
  getChainIdFromMessage,
} from '@reown/appkit-siwe'
import { createPublicClient, http } from 'viem'

const app = express();

const projectId = 'YOUR_PROJECT_ID';

// configure cors and sessions
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true,
}))
app.use(express.json())
app.use(Session({
  name: 'siwe-quickstart',
  secret: "siwe-quickstart-secret",
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, sameSite: true }
}));

app.get('/nonce', function (_, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(generateNonce());
});

// verify the message
app.post('/verify', async (req, res) => {
    try {
      if (!req.body.message) {
        return res.status(400).json({ error: 'SiweMessage is undefined' });
      }

      // save the session with the address and chainId (SIWESession)
      req.session.siwe = { address, chainId };
      req.session.save(() => res.status(200).send(true));

      
      const message = req.body.message;
      const signature = req.body.signature;
      const address = getAddressFromMessage(message);
      let chainId = getChainIdFromMessage(message);
      
      // for the moment, the verifySignature is not working with social logins and emails  with non deployed smart accounts  
      // for this reason we recommend using the viem to verify the signature
      const publicClient = createPublicClient(
        {
          transport: http(
            `https://rpc.walletconnect.org/v1/?chainId=${chainId}&projectId=${projectId}`
          )
        }
      );
      const isValid = await publicClient.verifyMessage({
        message,
        address,
        signature
      });
      if (!isValid) {
        // throw an error if the signature is invalid
        throw new Error('Invalid signature');
      }
      if (chainId.includes(":")) {
        chainId = chainId.split(":")[1];
      }
      
      // Convert chainId to a number
      chainId = Number(chainId);

      if (isNaN(chainId)) {
          throw new Error("Invalid chainId");
      }
      
      // save the session with the address and chainId (SIWESession)
      req.session.siwe = { address, chainId };
      req.session.save(() => res.status(200).send(true));
    } catch (e) {
      // clean the session
      req.session.siwe = null;
      req.session.nonce = null;
      req.session.save(() => res.status(500).json({ message: e.message }));
    }
  });

  /// ... check the github repository for the others endpoints

  // get the session
  app.get('/session', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(req.session.siwe);
  });  


Check the github full example to see the full flow working: siwe-quickstart

verifySignature
Verify a SIWE signature.

import { createPublicClient, http } from 'viem'

const publicClient = createPublicClient(
  {
    transport: http(
      `https://rpc.walletconnect.org/v1/?chainId=${chainId}&projectId=${projectId}`
    )
  }
);
const isValid = await publicClient.verifyMessage({
  message,
  address: address as `0x${string}`,
  signature: signature as `0x${string}`
});

// The verifySignature is not working with social logins and emails with non deployed smart accounts 
// for this reason we recommend using the viem to verify the signature
// import { verifySignature } from '@reown/appkit-siwe'
// const isValid = await verifySignature({ address, message, signature, chainId, projectId })


Initialize AppKit with your siweConfig
Add the siweConfig to your createAppKit parameters

// Pass your siweConfig inside the createAppKit() function
  const modal = createAppKit({
      adapters: [wagmiAdapter], //or your Ethers adapter
      projectId,
      networks: [mainnet, arbitrum],
      defaultNetwork: mainnet,
      features: {
        analytics: true, // Optional - defaults to your Cloud configuration
      },
      siweConfig: siweConfig // pass your siweConfig
  })

SIWE Config Parameters
One-Click Auth
Legacy
getMessageParams () => Promise<{ domain: string, uri: string, chains: number[], statement: string }>
Parameters to create the SIWE message internally.

getNonce () => Promise<string>
The getNonce method functions as a safeguard against spoofing, akin to a CSRF token. The siwe package provides a generateNonce() helper, or you can utilize an existing CSRF token from your backend if available.

createMessage (args: SIWECreateMessageArgs) => string
The official siwe package offers a straightforward method for generating an EIP-4361-compatible message, which can subsequently be authenticated using the same package. The nonce parameter is derived from your getNonce endpoint, while the address and chainId variables are sourced from the presently connected wallet.

verifyMessage (args: SIWEVerifyMessageArgs) => Promise<boolean>
The function to ensure the message is valid, has not been tampered with, and has been appropriately signed by the wallet address.

getSession () => Promise<SIWESession | null>
The backend session should store the associated address and chainId and return it via the getSession method.

signOut () => Promise<boolean>
The users session can be destroyed calling signOut.

onSignIn (session?: SIWESession) => void
Callback when user signs in (Optional).

onSignOut () => void
Callback when user signs out (Optional).

signOutOnDisconnect boolean
defaults to true
Whether or not to sign out when the user disconnects their wallet (Optional).

Edit this page
Last updated on Jan 18, 2025

Sign In With X
Introduction
The Sign In With X feature enables decentralized applications (Dapps) to authenticate users seamlessly across multiple blockchain networks, such as Ethereum, Polygon or Solana. This feature allows developers using our SDK to implement authentication by having users sign a unique string message with their blockchain wallets. The Sign In With X feature is designed in accordance with the CAIP-122 standard, which establishes a chain-agnostic framework for blockchain-based authentication and authorization on off-chain services.


Try Demo

Getting Started
SIWX works as a plugin system for AppKit and you are going to add the plugin in the AppKit configuration. There are some ways to implement the SIWX feature:

Use the default implementation provided by AppKit
Use Cloud Auth SIWX to manage the sessions in the Cloud Dashboard
Create a custom implementation to suit your specific requirements.
To initialize the SIWX feature, you need to add the siwx parameter to the createAppKit function.

Default Implementation
By using the default implementation, you can quickly integrate the SIWX feature into your Dapp. The default implementation provides a set of pre-built components that allow you to have the feature up and running in no time.

Read more about the Default Implementation.

Cloud Auth Implementation
The Cloud Auth SIWX is a predefined implementation of the SIWX configuration plugin that uses the Cloud service to create and manage SIWX messages and sessions. With Cloud Auth SIWX, you will be able to see and control the sessions of your users using the User Management Dashboard.

Read more about the Cloud Auth Implementation.

Custom Implementation
The siwx param expects to receive a defined interface from which you are able to create your own implementation. This is what allows you to customize the feature to suit your specific requirements.

The defined interface must follow specific rules to make sure that AppKit can interact with it correctly. Read more about how to have your Custom Implementation.

SIWX Expected Behavior
SIWX will prompt to get the user signature and verify his identity every time a connection happen;
In case a SIWX session is already stored, the user will be automatically signed in and the prompt step will be skipped;
If the user changes the connected network, SIWX will prompt to get the user signature and verify his identity again;
If the user disconnects from the Dapp, SIWX will revoke the session and the user will need to sign in again.
Migrating from SIWE to SIWX
If you are currently already using SIWE from @reown/appkit-siwe, after AppKit version 1.5.0, you will be migrated into SIWX. The migration process is automatic and your siweConfig from createAppKit function will be mapped internally.

caution
It is important to note that if you cannot use siweConfig and siwx at the same time, createAppKit will throw an error in case this happens.

You may replace siweConfig with your own siwx configuration manually if you would like to do so.

SIWX Default Usage
Quick Start
Here is a quick guide to get started with the SIWX feature using the default implementation.

Installation
npm
Yarn
Bun
pnpm
npm install @reown/appkit-siwx

Usage
import { createAppKit } from '@reown/appkit'
import { DefaultSIWX } from '@reown/appkit-siwx'

const appkit = createAppKit({
  // ... your configuration
  siwx: new DefaultSIWX()
})

You should now have the SIWX feature up and running in your Dapp.

The DefaultSIWX configuration will use the predefined components to handle the message generation, verification and storage of the sessions. You can customize the default implementation by providing your own components as in the following sections.

Customizing the Default Implementation
The default implementation of SIWX is divided in three main components: SIWXMessenger, SIWXVerifier and SIWXStorage. The @reown/appkit-siwx package have defined options to fulfill the parts when initializing the DefaultSIWX configuration and you are also able to setup your own parts as required.

Predefined Components
The @reown/appkit-siwx package provides some predefined components that you can use to quickly setup the DefaultSIWX configuration.

Check the latest components over the SIWX repository

Customizing components
You may provide the parts to the DefaultSIWX configuration using the predefined components exposed by @reown/appkit-siwx package and customize the component params as needed.

import {
  DefaultSIWX,
  InformalMessenger,
  EIP155Verifier,
  SolanaVerifier,
  LocalStorage
} from '@reown/appkit-siwx'

const siwx = new DefaultSIWX({
  messenger: new InformalMessenger({
    domain: 'reown.com',
    uri: 'https://reown.com',
    getNonce: async () => Math.round(Math.random() * 10000).toString()
  }),
  verifiers: [new EIP155Verifier(), new SolanaVerifier()],
  storage: new LocalStorage({ key: '@appkit/siwx' })
})

Custom Components
You may create your own components to handle the message generation, verification and storage of the sessions. The following sections will guide you through the process of creating your own components.

SIWXMessenger
The SIWXMessenger is an abstract class which holds methods for generating the message to be signed.

Creating a Custom Messenger:
You may extend the SIWXMessenger class adding the public attributes:

version: a string that represents the version of the messenger;
stringify: a method that receives the message data and returns a string to be signed.
import { SIWXMessenger } from '@reown/appkit-siwx'
import type { SIWXMessage } from '@reown/appkit-core'

export class MyMessenger extends SIWXMessenger {
  protected readonly version = '1'

  protected override stringify(params: SIWXMessage.Data): string {
    // Implement your message format here
    return `My message for ${params.accountAddress} on ${params.chainId}`
  }
}

SIWXVerifier
The SIWXVerifier is an abstract class that defines the verification logic for the signed message.

Creating a Custom Verifier:
You may extend the SIWXVerifier class adding the public attributes:

chainNamespace: a string that represents the chain namespace for the verifier;
verify: a method that receives the session data and returns a boolean indicating if the session is valid.
import { SIWXVerifier } from '@reown/appkit-siwx'
import type { SIWXSession } from '@reown/appkit-core'

export class MyVerifier extends SIWXVerifier {
  public readonly chainNamespace = 'eip155' // set the chain namespace for your verifier

  public async verify(session: SIWXSession): Promise<boolean> {
    // Implement your verification logic here
    return true
  }
}


SIWXStorage
SIWXStorage is a interface that defines how the session data will be stored.

Creating a Custom Storage:
You may implement the SIWXStorage interface with the following methods:

add: This method will be called to store a new single session that is verified;
set: This method must replace all the sessions in the storage with the new ones;
get: This method must return all the sessions stored for a specific chain and address. Is expected that the sessions are already verified;
delete: This method must delete all the sessions stored for a specific chain and address.
import type { SIWXSession } from '@reown/appkit-core'
import type { SIWXStorage } from '@reown/appkit-siwx'

export class MyStorage implements SIWXStorage {
  add(session: SIWXSession): Promise<void> {
    // Implement your logic to add a session
  }

  set(sessions: SIWXSession[]): Promise<void> {
    // Implement your logic to set sessions
  }

  get(chainId: CaipNetworkId, address: string): Promise<SIWXSession[]> {
    // Implement your logic to get sessions
    return []
  }

  delete(chainId: string, address: string): Promise<void> {
    // Implement your logic to delete a session
  }
}

Using custom components
You may provide your custom components to the DefaultSIWX configuration.

If you omit any of the components, the default implementation will be used. Check here the default components.

import { DefaultSIWX, type SIWXStorage } from '@reown/appkit-siwx'

class MyDatabaseStorage implements SIWXStorage {
  // ...
}

const siwx = new DefaultSIWX({
  storage: new MyDatabaseStorage()
})

Edit this page
Last updated on Jan 18, 2025
Previous
SIWX
Next
SIWX Custom
Quick Start
Installation
Usage
Customizing the Default Implementation
Predefined Components


IWX Custom Usage
Alternatively from the Default Implementation, you can create your own implementation of the SIWX feature to suit your specific requirements.

SIWX is developed to work as a plugin system for AppKit and to enable correctly it you need to fulfill the expected interface within the createAppKit function.

SIWXConfig interface
This is the interface that you need to implement to create your own SIWX feature.

interface SIWXConfig {
  createMessage: (input: SIWXMessage.Input) => Promise<SIWXMessage>
  addSession: (session: SIWXSession) => Promise<void>
  revokeSession: (chainId: CaipNetworkId, address: string) => Promise<void>
  setSessions: (sessions: SIWXSession[]) => Promise<void>
  getSessions: (chainId: CaipNetworkId, address: string) => Promise<SIWXSession[]>
}

All the typings used are exposed by @reown/appkit-core package. You may check the source code here.

Full Detailed Interfaces
Constraints
You are able to implement the SIWXConfig in the way you would like, but some constraints MUST be followed to make sure that AppKit can interact with it correctly and it will work as expected:

createMessage
This method will be called to create a new message to be signed by the user.

The message MUST be unique and contain all the necessary information to verify the user's identity.
addSession
This method will be called to store a new single session.

This method MUST verify if the session is valid and store it in the storage successfully.
revokeSession
This method will be called to revoke all the sessions stored for a specific chain and address.

This method MUST delete all the sessions stored for the specific chain and address successfully.
setSessions
This method will be called to replace all the sessions in the storage with the new ones.

This method MUST verify all the sessions before storing them in the storage;
This method MUST replace all the sessions in the storage with the new ones successfully otherwise it MUST throw an error.
getSessions
This method will be called to get all the sessions stored for a specific chain and address.

This method MUST return only sessions that are verified and valid;
This method MUST NOT return expired sessions.
Example
Here is an example of how you can implement use your SWIXConfig interface:

import { createAppKit, type SIWXConfig } from '@reown/appkit'

const siwx: SIWXConfig = {
  createMessage: async (input) => {
    // Implement your logic to create a message
    return 'my message'
  }
  addSession: async (session) => {
    // Implement your logic to add a session
  },
  revokeSession: async (chainId, address) => {
    // Implement your logic to revoke a session
  },
  setSessions: async (sessions) => {
    // Implement your logic to set sessions
  },
  getSessions: async (chainId, address) => {
    // Implement your logic to get sessions
    return []
  }
}

createAppKit({
  // ... your configuration
  siwx
})

Edit this page
Last updated on Jan 18, 2025
Previous
SIWX Default
SIWXConfig interface
Constraints
createMessage
addSession
revokeSession
setSessions
getSessions
