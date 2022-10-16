import { WidgetCard } from "../widgetCard/WidgetCard";
import { genericSearch } from "./utils/genericSearch";
import { trpc } from "utils/trpc";

const AutoComplete = ({ query }: { query: string }) => {
  const schipholData = trpc.api.schiphol.useQuery();
  const resultWidgets = schipholData?.data?.flights.filter((widget) =>
    genericSearch(widget, ["airport"], query)
  );

  return (
    <div className="pt-4">
      {resultWidgets && resultWidgets.length > 0 && (
        <div className="row">
          {resultWidgets.map((widget) => (
            <WidgetCard key={widget.flightIdentifier} {...widget} />
          ))}
        </div>
      )}
      {resultWidgets && resultWidgets.length === 0 && <p>No results found!</p>}
    </div>
  );
};

export default AutoComplete;
