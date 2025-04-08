import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSidebar = () => {
  return (
    <div>
                <section
          className="fixed w-[275px] flex flex-col items-stretch 
        h-screen px-4"
        >
          <div className="flex flex-col items-stretch h-full space-y-4 
          mt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                className="hover:bg-white/10 transition duration-200 
                text-2xl flex items-center justify-start w-fit space-x-2 
                rounded-3xl py-2 px-6"
                href={`${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title !== "Twitter" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="rounded-full bg-birdie m-4 p-4 
            text-2xl text-center hover:bg-birdie/70 transition 
            duration-200">
              Tweet
            </button>
          </div>
          <button className="rounded-full flex items-center space-x-2 m-4 
          bg-transparent p-4 text-center hover:bg-white/20 transition 
          duration-200 w-full justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-slate-400 w-12 h-12"></div>
              <div className="text-left">
                <div className="font-semibold text-sm"> Jadon Smith</div>
                <div className="text-xs">@TenLetters</div>
              </div>
            </div>
              <div>
                <BsThreeDots />
              </div>
          </button>
        </section>
    </div>
  )
}

export default LeftSidebar