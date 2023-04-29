import { InfoCard } from "./styled"

interface Props {
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({children, className}: Props) => {
    return (
        <InfoCard className={className}>
            {children}
        </InfoCard>
    )
}