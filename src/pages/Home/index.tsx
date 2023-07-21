import { Navigation } from "../../components/Navigation"
import { Container, Spacing } from "./styles";
import { Title } from "../../components/Title";

export const Home = (): JSX.Element => {

    return (
        <Container>
            <Navigation />
        
            <Spacing>
             <Title text={"a"} />
            </Spacing>

        </Container>
    );

};