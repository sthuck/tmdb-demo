interface SelectPropsBase<T> {
  options: T[];
  className?: string;
  renderItems?: (item: T) => JSX.Element;
}

export type SelectPropsWithItemToValue<
  T extends HasName,
  V
> = SelectPropsBase<T> & {
  value?: V;
  onChange: (value: V) => void;
  itemToValue: (item: T) => V;
};
export type SelectPropsWithoutItemToValue<T extends HasName> =
  SelectPropsBase<T> & {
    value?: T;
    onChange: (value: T) => void;
  };

export type SelectProps<T extends HasName, V = T> =
  | SelectPropsWithoutItemToValue<T>
  | SelectPropsWithItemToValue<T, V>;

export interface HasName {
  name: string;
}
