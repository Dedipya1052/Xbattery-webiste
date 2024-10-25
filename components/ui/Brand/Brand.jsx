import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/images/logo.webp"
        alt="Xbatterylogo"
        {...props}
        width={130}
        height={60}
        priority
    />
)
export default Brand