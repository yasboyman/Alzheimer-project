// import * as React from 'react';
export {}
//
// type ButtonOwnProps<E extends any> = {
//   children: string;
//   primary?: boolean;
//   secondary?: boolean;
//   destructive?: boolean;
//   as?: E;
// };
//
// type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
//   Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;
//
// const createClassNames = (classes: { [key: string]: boolean }): string => {
//   let classNames = '';
//   for (const [key, value] of Object.entries(classes)) {
//     if (value) classNames += key + ' ';
//   }
//   return classNames.trim();
// };
//
// const defaultElement = 'button';
//
// function Button<E extends React.ElementType = typeof defaultElement>({
//   children,
//   primary = false,
//   secondary = false,
//   destructive = false,
//   as
// }: ButtonProps<E>) {
//   const TagName = as || defaultElement;
//   let classNames = createClassNames({ primary, secondary, destructive });
//   if (TagName !== 'button') classNames += ' button';
//
//   return <TagName className={classNames}>{children}</TagName>;
// }
//
// const Application = () => {
//   return (
//     <main>
//       <Button primary>Primary</Button>
//       <Button secondary>Secondary</Button>
//       <Button destructive>Destructive</Button>
//     </main>
//   );
// };
//
// export default Application;
