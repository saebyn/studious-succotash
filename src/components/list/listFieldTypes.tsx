import * as React from 'react';
import type {
  ArrayFieldProps,
  BooleanFieldProps,
  DatagridProps,
  DateFieldProps,
  EmailFieldProps,
  NumberFieldProps,
  ReferenceArrayFieldProps,
  ReferenceFieldProps,
  TextFieldProps,
  UrlFieldProps,
} from 'react-admin';
import {
  ArrayField,
  BooleanField,
  ChipField,
  DateField,
  EmailField,
  NumberField,
  ReferenceArrayField,
  ReferenceField,
  TextField,
  UrlField,
} from '../field';
import SingleFieldList from './SingleFieldList';
import Datagrid from './datagrid/Datagrid';

interface ListFieldTypes {
  [key: string]:
    | {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        component: React.ComponentType<any>;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        representation: (props: any, children: any) => string;
      }
    | undefined;
}

export const listFieldTypes: ListFieldTypes = {
  table: {
    component: (props: DatagridProps) => {
      return <Datagrid {...props} />;
    },
    representation: (
      _props: DatagridProps,
      children: { getRepresentation: () => string }[],
    ) => `        <Datagrid>
${children.map((child) => `            ${child.getRepresentation()}`).join('\n')}
        </Datagrid>`,
  },
  array: {
    component: ({ children, ...props }: ArrayFieldProps) => {
      const childrenArray = React.Children.toArray(children);
      return (
        <ArrayField {...props}>
          <SingleFieldList>
            <ChipField
              source={
                childrenArray.length > 0 &&
                React.isValidElement(childrenArray[0]) &&
                childrenArray[0].props.source
              }
            />
          </SingleFieldList>
        </ArrayField>
      );
    },
    representation: (
      props: ArrayFieldProps,
      children: { getProps: () => { source: string } }[],
    ) =>
      `<ArrayField source="${
        props.source
      }"><SingleFieldList><ChipField source="${
        children.length > 0 && children[0].getProps().source
      }" /></SingleFieldList></ArrayField>`,
  },
  boolean: {
    component: BooleanField,
    representation: (props: BooleanFieldProps) =>
      `<BooleanField source="${props.source}" />`,
  },
  date: {
    component: DateField,
    representation: (props: DateFieldProps) =>
      `<DateField source="${props.source}" />`,
  },
  email: {
    component: EmailField,
    representation: (props: EmailFieldProps) =>
      `<EmailField source="${props.source}" />`,
  },
  id: {
    component: TextField,
    representation: (props: TextFieldProps) =>
      `<TextField source="${props.source}" />`,
  },
  number: {
    component: NumberField,
    representation: (props: NumberFieldProps) =>
      `<NumberField source="${props.source}" />`,
  },
  reference: {
    component: ReferenceField,
    representation: (props: ReferenceFieldProps) =>
      `<ReferenceField source="${props.source}" reference="${props.reference}" />`,
  },
  referenceChild: {
    component: () => <TextField source="id" />, // eslint-disable-line react/display-name
    representation: () => `<TextField source="id" />`,
  },
  referenceArray: {
    component: ReferenceArrayField,
    representation: (props: ReferenceArrayFieldProps) =>
      `<ReferenceArrayField source="${props.source}" reference="${props.reference}" />`,
  },
  referenceArrayChild: {
    component: () => (
      <SingleFieldList>
        <ChipField source="id" />
      </SingleFieldList>
    ), // eslint-disable-line react/display-name
    representation: () =>
      `<SingleFieldList><ChipField source="id" /></SingleFieldList>`,
  },
  richText: undefined, // never display a rich text field in a datagrid
  string: {
    component: TextField,
    representation: (props: TextFieldProps) =>
      `<TextField source="${props.source}" />`,
  },
  url: {
    component: UrlField,
    representation: (props: UrlFieldProps) =>
      `<UrlField source="${props.source}" />`,
  },
};
