import HomeDownloadUnit from "./HomeDownloadUnit";
import { downloadList } from "../data/data";

const HomeDownload = () => {
  return (
    <section>
      <div className="bg-lightGrey">
        <div className="container p-16">
          <h2 className="font-UberMove text-[2.25rem] font-bold">
            It's easier in the apps
          </h2>
          <div className="mt-9 grid grid-cols-2 gap-9 ">
            {downloadList.map((element, index) => {
              return (
                <HomeDownloadUnit
                  key={index}
                  header={element.header}
                  qrCode={element.qrCode}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDownload;
