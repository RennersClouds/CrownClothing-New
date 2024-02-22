import './button.styles.scss'


const Button = ({children, buttontype, ...otherProps})=>{
    return (
        <button className={`button-container ${buttontype}`} {...otherProps}>{children}</button>
    )
}

export default Button;