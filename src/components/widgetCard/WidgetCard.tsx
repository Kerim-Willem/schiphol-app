// /* eslint-disable @typescript-eslint/no-explicit-any */
import { IFlight } from "interfaces/IWidget";

export function WidgetCard({
  flightNumber,
  airport,
  expectedTime,
  originalTime,
  url,
  score,
}: IFlight) {
  return (
    <div>
      <div
        className="col-12 my-3 mx-2 cursor-pointer rounded bg-white shadow-lg duration-500 ease-in-out hover:shadow-heavyShadow"
        onClick={() => {
          console.log("url: ", url);
          window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
        }}
      >
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x lg:py-8">
          {[
            [`Flight number: ${flightNumber}`, `${airport}`],
            [
              `Expected time: ${expectedTime}`,
              `Original time: ${originalTime}`,
            ],
            [`Score: ${score}`],
          ].map((text, index) => (
            <div key={index}>
              <div className="items-center py-8 lg:flex-none lg:py-0">
                <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                  <div className="ml-2 flex flex-auto flex-col-reverse">
                    <p className="text-sm text-gray-500">{text[0]}</p>
                    <h3 className="font-medium text-gray-900">{text[1]}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
