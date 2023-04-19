import React from "react";

function MessageField() {
  return (
    <div className="relative isolate px-6 pt-24 sm:pt-40 lg:px-8 mx-auto max-w-xl">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Skriv kort hva du/dere ønsker å snakke om:
          </label>
          <div className="mt-2.5 pt-1 pb-5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageField;
