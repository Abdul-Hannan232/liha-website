import { IoIosArrowForward } from 'react-icons/io';
import Link from '@components/ui/link';

const ListMenu = ({ dept, data, hasSubMenu, menuIndex }: any) => {
  // console.log('------- ' ,JSON.parse(data.children));
  
  return (
    <li className="relative">
      <Link
        href={`/pages/search?category=${data.name? data.name : data}`}
        className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
      >
        {data.name? data.name: data}
        {data.children && (
          <span className="text-sm mt-0.5 shrink-0">
            <IoIosArrowForward className="transition duration-300 ease-in-out text-body group-hover:text-brand-dark" />
          </span>
        )}
      </Link>
      {hasSubMenu && (
        <SubMenu dept={dept} data={JSON.parse(data.children)} menuIndex={menuIndex} />
      )}
    </li>
  );
};

const SubMenu: React.FC<any> = ({ dept, data, menuIndex }) => {
  dept = dept + 1;
  // console.log(data, 'ff');
  
  return (
    // <ul className="absolute z-0 invisible w-56 py-3 transition-all duration-300 opacity-0 subMenuChild shadow-subMenu bg-brand-light ltr:right-full rtl:left-full 2xl:ltr:right-auto 2xl:rtl:left-auto 2xl:ltr:left-full 2xl:rtl:right-full top-4">
    <ul className="absolute z-0 invisible w-56 py-3 transition-all duration-300 opacity-0 subMenuChild shadow-subMenu bg-brand-light left-full  top-4">
      {data?.map((menu: any, index: number) => {
        const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;
        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.subMenu}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
        );
      })}
    </ul>
  );
};

export default ListMenu;
