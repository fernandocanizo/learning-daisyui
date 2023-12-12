import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning DaisyUI" },
    { name: "description", content: "Learning DaisyUI" },
  ];
};

export default function Index() {
  return (
    <button className="btn">Hello daisyUI</button>
  );
}
