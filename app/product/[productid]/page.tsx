import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/products/NullData";

interface IPrams{
    productId?: string;
}

const Product = async({params} : {params: IPrams}) => {

    const product = await getProductById(params);

    if(!product) return <NullData title = "Ooops! Product with the given id not found" />


    return ( <div>
        <Container>
            <ProductDetails product ={product} />
            <div className = "flex flex-col mt-20 gap-4">
                <div>Add Rating</div>
                <ListRating product={product} />
            </div>
        </Container>
    </div> );
}
 
export default Product;