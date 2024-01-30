import { companyDropDownList } from "../utilities/PageContentData";

const CompanyDropDownMenu = () => {
  const handleDropDownList = companyDropDownList.map((element, index) => {
    return (
      <li
        key={index}
        className="cursor-pointer px-4 py-2 leading-5 transition-colors duration-200 hover:bg-lightGrey hover:text-black"
      >
        {element}
      </li>
    );
  });
  return (
    <div className="w-48 rounded-b-lg rounded-t-sm bg-white pb-2 pt-1 font-normal text-[rgb(117,117,117)]">
      <ul>{handleDropDownList}</ul>
    </div>
  );
};

export default CompanyDropDownMenu;
