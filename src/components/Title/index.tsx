import { Text } from "./styles";

interface TitlePros {
    text: string;
}

export const Title = ({ text }: TitlePros): JSX.Element => {
    return <Text>{text}</Text>
}