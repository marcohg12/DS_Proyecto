interface CustomFieldsI {
  name: string;
  value: string;
}

interface CalendarEventI {
  getCustomFields: () => CustomFieldsI[];
}

export { CalendarEventI };
export { CustomFieldsI };
