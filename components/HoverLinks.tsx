
type hoverLinksProps = {
    title: string,
    hoverColor: string,
    link: string
}
const HoverLinks = (props: hoverLinksProps) => {
    return (
        <a className="alink" style={{
            borderColor: props.hoverColor
        }} href={props.link}>{props.title}</a>
    )
}

export default HoverLinks
