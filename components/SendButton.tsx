import React from "react";

function SendButton() {
  return (
    <div className="mx-auto max-w-xl mb-10">
      <button
        type="submit"
        className="block w-full rounded-md bg-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Send
      </button>
    </div>
  );
}

export default SendButton;
