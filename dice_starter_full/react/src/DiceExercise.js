import React, { useState } from "react";

const DICE_THROW = 5;
export default function App() {
  return (
    <div className="container mx-auto m-8 flex">
      <div>
        <Dice />
      </div>
      <div className="ml-4">
        <div>
          <button className="text-center w-32 border">Throw dice</button>
        </div>
        <div>
          <p className="mt-2 text-center">Last throw: {DICE_THROW}</p>
        </div>
      </div>
    </div>
  );
}

const Dice = () => {
  return (
    <table className="border border-black rounded-md p-48">
      <tbody>
        <tr>
          <Eye />
          <Nothing />
          <Eye />
        </tr>
        <tr>
          <Nothing />
          <Eye />
          <Nothing />
        </tr>
        <tr>
          <Eye />
          <Nothing />
          <Eye />
        </tr>
      </tbody>
    </table>
  );
};

const Eye = () => (
  <td className="w-12 h-12 p-2">
    <div className="bg-black w-12 h-12 rounded-full">&nbsp;</div>
  </td>
);
const Nothing = () => (
  <td className="w-12 h-12 p-2">
    <div className="bg-white w-12 h-12 rounded-full">&nbsp;</div>
  </td>
);
