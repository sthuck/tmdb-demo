// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dataTestId = (props: any) => {
  const dataTestId = props["data-testid"];
  if (dataTestId) {
    return { "data-testid": dataTestId };
  }
  return {};
};
