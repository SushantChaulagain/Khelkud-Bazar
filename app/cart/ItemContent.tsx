import { CartProductType } from "../product/[productId]/ProductDetails";

interface ItemContentProps{
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({item}) => {
    return ( <div>

    </div> );
}
 
export default ItemContent;