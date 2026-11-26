interface IconProps {
    src:string
}

export default function Icon({ src }: IconProps) {

    return (
        <span
            aria-hidden="true"
            className="size-4 bg-(--text-h)"
            style={{
                maskImage: `url(${src})`,
                WebkitMaskImage: `url(${src})`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
            }}
        />
    )
}