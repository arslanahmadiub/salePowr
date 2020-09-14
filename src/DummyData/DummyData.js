import woman from "../assets/images/woman-avatar.jpg"
import { AccountBalanceWallet, Redeem, LocalMall, Dashboard, PieChart, BarChart, } from "@material-ui/icons/"
const banks = ["Stanbic Bank", "First Atlantic", "Ecobank", "Cal Bank", "First National Bank"]
const messages = [
    { id: "1", sender: "Anonymous Buyer", message: "Hi, I would like a quote for 16BTCs at a discounted price", image: woman },
    { id: "2", sender: "Anonymous Buyer", message: "Hey anon seller, I would like a quote for 195BTCs at a discounted price", image: woman },
    { id: "3", sender: "Anonymous Buyer", message: "You there, I would like a quote for 135BTCs at a discounted price", image: woman },
    { id: "4", sender: "Anonymous Buyer", message: "I would like to order more, I would like a quote for 158BTCs at a discounted price", image: woman },
    { id: "5", sender: "Anonymous Buyer", message: "Someone recomended you to me a quote for 154BTCs at a discounted price", image: woman },
]

const navItems = [
    { text: "Overview", icon: Dashboard },
    { text: "Shop", icon: LocalMall },
    { text: "Transaction", icon: BarChart },
    { text: "Analytics", icon: PieChart },
    { text: "Wallet", icon: AccountBalanceWallet },
    { text: "Delivery", icon: Redeem },


]


const profilePercent = "";



export {
    messages, banks, profilePercent,
    navItems,
}