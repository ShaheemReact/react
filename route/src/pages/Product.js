import { Link } from "react-router-dom"

const PRODUCTS =[
    {id:'p1',title:'product1'},
    {id:'p2',title:'product2'},
    {id:'p3',title:'product3'}
]
function ProductPage(){
    return <><h1>Product Page</h1>
    <ul>
        {PRODUCTS.map((item)=><li key={item.id}><Link to={item.id} >{item.title}</Link></li>)}
    </ul>
    </>
}
export default ProductPage 