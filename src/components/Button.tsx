import { Button as ButtonNativeBase, Heading, IButtonProps } from 'native-base';

type Prosp = IButtonProps & {
    title: string;

}

export function Button({ title, ...rest }: Prosp) {
    return (
        <ButtonNativeBase
            h={14}
            bg={"gree.700"}
            fontSize="sm"
            rounded={"sm"}
            _pressed={{ bg: "green.500" }}
            {...rest}
        >
            <Heading color="white" fontSize="sm">
                {title}
            </Heading>
        </ButtonNativeBase>
    );
}