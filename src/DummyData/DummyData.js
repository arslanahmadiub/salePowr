import woman from "../assets/images/woman-avatar.jpg"
import apple from "../assets/images/apple.png"
import companyLogo from "../assets/images/company-logo.png"
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
    { text: "Transactions", icon: BarChart },
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


const barchartData = [
    { percent: 80, label: "Sun" },
    { percent: 95, label: "Mon" },
    { percent: 5, label: "Tue" },
    { percent: 30, label: "Wed" },
    { percent: 30, label: "Thur" },
    { percent: 70, label: "Fri" },
    { percent: 60, label: "Fri" },
]

const transactionVolumeData = ["last 7 days", "last 30 days", "last 90 days", "last 6 months"]


const brandDetails = {
    logo: companyLogo, name: "GoPare", brief: "Irure enim ullamco exercitation incididunt. Irure enim ullamco exercitation incididunt.Irure enim ullamco exercitation incididunt.Irure enim ullamco exercitation incididunt.",
    social: { fb: "", ig: "", wp: "", tt: "" }, contacts: { phone: 123456780, email: "someone@exmaple.com", address: "some business location, midtown ave." }, description: "Electronics", shopId: "#345244"
}

const profilePercent = "";


const products = [

    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
    { name: "Sweet apple", image: apple, description: "Anim ullamco eu exercitation reprehenderit minim.", price: 243, tiles: { first_tile: apple }, delivery: "24hrs" },
]

const walletBalance = { escrow: 23434, available: 3453, currency: "GHS" }

const creditCardInfo = {
    name: "Mahmudul Hasan",
    country: "Ghana",
    number: "2334928048",
    date: "09/2020",
}

const dashboardData = {
    username: "Ebenezer Ghanney",
    profilePercent: 20,
    growth: 564,
    dayVolume: 23,
    newOrders: 79,
    shipped: 89,
    delivered: 90,
    completed: 344,


}

const profile = {
    name: "Person name",
    image: woman,
}


export {
    messages, banks, profilePercent, products,
    navItems, barchartData, transactions, transactionGroups,
    walletBalance, creditCardInfo, dashboardData,
    transactionVolumeData, woman, profile, brandDetails,
}