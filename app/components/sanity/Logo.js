import Image from 'next/image'

function Logo(props) {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={55}
        height={55}
        src={"/logo.png"}
        alt="brand logo"
      ></Image>
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}
export default Logo
