interface HeadingProps {
    title: string,
    center?: boolean
}

const Heading : React.FC<HeadingProps> = ({title,center}) => {

    return ( <div className={center ? "trxt-center" : "text-start"}>
        <h1 className = "font-bold text-2xl">{title}</h1>
    </div> );
}

export default Heading;

