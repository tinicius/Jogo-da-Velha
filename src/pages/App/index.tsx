import React from "react"
import { Container } from "./styles"

export const App = (props: React.PropsWithChildren): JSX.Element => {
    return <Container>
        {props.children}
    </Container>;
}