import woman from "../assets/images/woman-avatar.jpg"
import apple from "../assets/images/apple.png"
import { AccountBalanceWallet, Redeem, LocalMall, Dashboard, PieChart, BarChart, } from "@material-ui/icons/"
const banks = ["Stanbic Bank", "First Atlantic", "Ecobank", "Cal Bank", "First National Bank"]
const transactionTypes = ["Sell", "Buy",]

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

const transactions = [
    { id: "#334544", title: "Aliexpress", description: "Electronic gadget", amount: "-$2000.00", date: "11 Sept, 2020", time: "06:00", status: "Successful" },
    { id: "#334544", title: "Aliexpress", description: "Electronic gadget", amount: "-$2000.00", date: "11 Sept, 2020", time: "06:00", status: "Failed" },
    { id: "#334544", title: "Aliexpress", description: "Electronic gadget", amount: "-$2000.00", date: "11 Sept, 2020", time: "06:00", status: "Pending" },
    { id: "#334544", title: "Aliexpress", description: "Electronic gadget", amount: "-$2000.00", date: "11 Sept, 2020", time: "06:00", status: "Successful" },
    { id: "#334544", title: "Aliexpress", description: "Electronic gadget", amount: "-$2000.00", date: "11 Sept, 2020", time: "06:00", status: "Failed" },
    { id: "#334544", title: "Aliexpress", description: "Electronic gadget", amount: "-$2000.00", date: "11 Sept, 2020", time: "06:00", status: "Pending" },
]

const transactionGroups = [
    { title: "Today", data: transactions },
    { title: "Yesterday", data: transactions }
]


const barchart = [
    { percentage: 80, label: "Mon" },
    { percentage: 5, label: "Tue" },
    { percentage: 30, label: "Wed" },
    { percentage: 30, label: "Thur" },
    { percentage: 70, label: "Fri" }]



const profilePercent = "";


const products = [

    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
]




export {
    messages, banks, profilePercent, products,
    navItems, barchart, transactions, transactionGroups,
}