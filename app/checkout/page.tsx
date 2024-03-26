import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import ChcekOutClient from "./CheckoutClient";

const ChcekOut = () => {
    return ( <div className="p-8">
        <Container>
            <FormWrap>
                <ChcekOutClient/>
            </FormWrap>
        </Container>
    </div> );
}
 
export default ChcekOut;