
type hoverLinksProps = {
    title: string,
    hoverColor: string,
    link: string
}
const HoverLinks = (props: hoverLinksProps) => {
    return (
        <a className="alink" style={{
            borderColor: props.hoverColor,
            color: props.hoverColor
        }} href={props.link} target="_blank">{props.title}</a>
    )
}

export default HoverLinks
