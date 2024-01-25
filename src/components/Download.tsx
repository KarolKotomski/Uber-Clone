import DownloadUnit from "./DownloadUnit";
import { downloadList } from "../utilities/PageContentData";

const Download = () => {
  return (
    <div className="container px-6 py-10 sm:px-8 sm:py-14 xl:p-16">
      <h2 className="font-UberMove text-[1.75rem] font-bold sm:text-[2rem] lg:text-[2.25rem]">
        It's easier in the apps
      </h2>
      <div className="mt-9 grid grid-cols-1 gap-9 lg:grid-cols-2">
        {downloadList.map((element, index) => {
          return (
            <DownloadUnit
              key={index}
              header={element.header}
              qrCode={element.qrCode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Download;
