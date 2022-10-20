import Header from "./Header";
import Goods from './Goods';

const goods = [
    {img: 'https://cdn2.iconfinder.com/data/icons/kitchen-appliances-computers-and-electronics/32/Appliances-04-64.png', prise: '97000P', sale: 100000, name: 'MacBook', but:'Купить'},
    {img: 'https://cdn0.iconfinder.com/data/icons/apple-iphone-x-1/128/iphone-iphone_x-_iphonex-mobile-apple-device-2-64.png', prise: '35999P', name: 'Galaxy', but: "Купить"},
    {img: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/scooter-64.png', prise: '58950P', sale: '65500', name: 'Скутер', but: 'Купить'},
    {img: 'https://cdn3.iconfinder.com/data/icons/electronics-121/64/monitor-64.png', prise: '12000P', name: 'Монитор Samsung', but: 'Купить'},
    {img: 'https://cdn4.iconfinder.com/data/icons/coronavirus-30/48/33-64.png', prise: "500P", name: "Респераторная маска", but: 'Купить'},
    {img: 'https://cdn3.iconfinder.com/data/icons/interior-homedecor-vol-3/512/laundry_washing_machine_basket-64.png', prise: '75000P', sale:100000, name: 'Стиральная машина', but: 'Купить'}
];
const App = () => {
return  <>
<Header />

<div className="shopList">
{goods.map((item => <Goods img = {item.img} price = {item.prise} sale = {item.sale} name = {item.name}  but = {item.but} />  ))} 
    </div>                                                     
   
</>
};
export default App;