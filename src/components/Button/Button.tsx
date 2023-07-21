interface ButtonProps {
    title : string
}

const Button = (props: ButtonProps) => {
    const {title} = props;
    return (
        <button>{title}</button>
    )
}
export default Button;