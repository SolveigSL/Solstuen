import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function CheckBox() {
  return (
    <fieldset className="mx-auto max-w-xl my-7">
      <legend className="sr-only">Notifications</legend>
      <div className="space-y-5">
        <p className="block text-sm font-semibold leading-6 text-gray-900">
          Hvor ønsker du å møtes?
        </p>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              //Checkbox
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-opacity-50"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Solstuen
            </label>
            <p id="comments-description" className="text-gray-500">
              Timen holdes fysisk på Soltuen kontor.
            </p>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-opacity-50"
            />{" "}
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Telefonmøte
            </label>
            <div className="space-y-5">
              <p id="comments-description" className="text-gray-500">
                Timen holdes på telefon.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <p className="block text-sm font-semibold leading-6 text-gray-900">
            Hvem kommer på timen?
          </p>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                //Checkbox
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-opacity-50"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-small text-gray-900">
                Jeg kommer alene
              </label>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-opacity-50"
              />{" "}
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-small text-gray-900">
                Jeg kommer sammen med partner
              </label>
              <div className="space-y-5"></div>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-opacity-50"
              />{" "}
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-small text-gray-900">
                Jeg kommer sammen med familien
              </label>
            </div>
          </div>
        </div>
        <p className="block text-sm font-semibold leading-6 text-gray-900">
          Hvor ønsker du å bli kontaktet?
        </p>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              //Checkbox
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-opacity-50"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-small text-gray-900">
              Telefon
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-opacity-50"
            />{" "}
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-small text-gray-900">
              Email
            </label>
            <div className="space-y-5"></div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default CheckBox;
