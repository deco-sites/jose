import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return (
    <div class="h-auto w-full bg-primary-light text-primary-dark">
      {props.children}
    </div>
  );
}
