// import iconRadio from "../assets/icon-radio-selected.svg";
// import icon from "../assets/icon-checkbox-check.svg";
// import icon2 from "../assets/icon-success-check.svg";

// #0C7D69

type InputItemProps = {
  name: string;
  id: string;
  type: string;
  classNameProp?: string;
  register: any;
  error?: any;
  rules?: any;
};

function InputItem({
  name,
  id,
  type,
  classNameProp,
  register,
  error,
  rules,
}: InputItemProps) {
  if (type === "query")
    return (
      <div className={`${classNameProp}`}>
        <label className="leading-[1.5] font-normal" htmlFor={id}>
          {name} <span className="text-Green-600">*</span>
        </label>

        <div
          className={`mt-4 space-y-4 ${classNameProp ? "sm:flex sm:gap-4 sm:space-y-0" : ""}`}
        >
          {["general-enquiry", "support-request"].map((query) => (
            <div
              key={query}
              className={`${error ? "border-Red-Errors" : "border-Grey-500"} hover:border-Green-600 relative inset-0.5 flex min-h-[51px] w-full items-center gap-3 rounded-lg border px-6 py-3`}
            >
              <input
                type="radio"
                id={query}
                name="query"
                {...register("query", {
                  required: "Please select a query type",
                })}
              />
              <label htmlFor={query}>
                {query
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </label>
            </div>
          ))}
        </div>
        {error && (
          <p className="text-Red-Errors mt-4 leading-[1.5] font-normal">
            {error.message}
          </p>
        )}
      </div>
    );

  if (id === "message") {
    return (
      <div className={`${classNameProp}`}>
        <label htmlFor={id} className="leading-[1.5] font-normal">
          {name} <span className="text-Green-600">*</span>
        </label>
        <textarea
          id={id}
          placeholder="Type your message here..."
          className={`${error ? "border-Red-Errors" : "border-Grey-500"} hover:border-Green-600 inset-0.5 mt-2 box-border block min-h-[132px] w-full rounded-lg border px-6 py-3 sm:min-h-[105px]`}
          {...register(id, {
            required: "This field is required",
          })}
        />
        {error && (
          <p className="text-Red-Errors mt-4 leading-[1.5] font-normal">
            {error.message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`${classNameProp} `}>
      <label className="leading-[1.5] font-normal" htmlFor={id}>
        {name} <span className="text-Green-600">*</span>
      </label>
      <input
        className={`${error ? "border-Red-Errors" : "border-Grey-500"} hover:border-Green-600 inset-0.5 mt-2 box-border block min-h-[51px] w-full rounded-lg border px-6 py-3`}
        type={type}
        id={id}
        {...register(id, rules)}
      />
      {error && (
        <p className="text-Red-Errors mt-4 leading-[1.5] font-normal">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default InputItem;
