import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning DaisyUI" },
    { name: "description", content: "Learning DaisyUI" },
  ];
};

export default function Index() {
  return (
    <>
      <div>
        <label>A DaisyUI button</label>
        <button className="btn btn-primary">Hello Daisy</button>
      </div>
      <div>
        <label>A plain TailwindCss button</label>
        <button
          className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Plain TailwindCss
        </button>
      </div>
    </>
  );
}
