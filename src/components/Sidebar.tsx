import {usePathname} from "next/navigation";
import Link from "next/link";
import {MdTimeline} from "react-icons/md";
import {IoIosPeople} from "react-icons/io";
import {FaCalendarDays, FaX} from "react-icons/fa6";
import {SlLogout, SlSettings} from "react-icons/sl";
import {cn} from "@/lib/utils";

const routes = [
  {
    label: "Timeline",
    path: "/timeline",
    icon: MdTimeline,
  },
  {
    label: "My People",
    path: "/people",
    icon: IoIosPeople,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: FaCalendarDays,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SlSettings,
  },
];
const Sidebar = ({onClickLink, onClickX}: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col h-full'>
      <div className='px-3 py-10 flex-1 text-white bg-charcoal rounded-r-lg'>
        <div className='flex items-center justify-between mb-6 lg:mb-14 '>
          <Link href='/timeline' className='pl-3 flex items-center'>
            <div className='relative w-12 h-12 mr-4'>
              <h1 className='italic font-montserrat font-bold text-2xl lg:text-3xl'>
                Wetin<span className='text-peach'>Dey</span>Sup
              </h1>
            </div>
          </Link>
        </div>
        <div className='flex flex-col justify-between h-[75dvh]'>
          <div className='space-y-2'>
            {routes.map((route) => (
              <Link
                href={route.path}
                key={route.path}
                onClick={onClickLink}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition",
                  pathname.includes(route.path)
                    ? "bg-white text-charcoal"
                    : "text-white bg-none hover:bg-white/10",
                )}
              >
                <div className='flex items-center flex-1 text-lg lg:text-xl'>
                  <route.icon className={cn("h-5 w-5 mr-3 text-xl")} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
          <div className='space-y-2'>
            <Link
              href='/'
              onClick={onClickLink}
              className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition text-white bg-none hover:bg-white/10 items-center'
            >
              <SlLogout className={cn("h-5 w-5 mr-3 text-xl")} />
              <div className='flex items-center flex-1 text-lg lg:text-xl'>
                Logout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
