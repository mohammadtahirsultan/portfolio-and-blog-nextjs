import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function StudioNavbar(props) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          href="/"
          className="item-center flex text-brand text-white hover:text-green-400"
        >
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6 "></ArrowUturnLeftIcon>
          Go to Website
        </Link>
        <div></div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}
export default StudioNavbar
