import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Field } from "formik";

const noop = () => {};

const fruits = [
  { name: "apple", value: "🍎" },
  { name: "banana", value: "🍌" },
  { name: "orange", value: "🍊" },
  { name: "pineapple", value: "🍊" },
  { name: "orange", value: "🍍" },
  { name: "kiwi", value: "🥝" }
];

export default function ArraySearchSelect() {
  return (
    <Field name="fruitsArr">
      {(props) => {
        const { form, field, meta } = props;
        console.log(field.value);
        const handleSelect = (val) => {
          form.setFieldValue(field.name, [...field.value, val]);
          noop();
        };
        const handleBlur = () => {
          form.setFieldTouched(field.name, true);
          noop();
        };
        return (
          <div className="form-group">
            <label className="text-muted">Array*</label>
            <Combobox
              aria-label="custom option demo"
              name={field.name}
              onSelect={handleSelect}
            >
              <ComboboxInput
                placeholder="Enter Fruit"
                onBlur={handleBlur}
                className="form-control"
              />
              <ComboboxPopover>
                <ComboboxList>
                  {fruits &&
                    fruits.map((fruit, id) => {
                      return (
                        <ComboboxOption
                          key={`fruit:${fruit.name}:${id}`}
                          value={fruit.name}
                        >
                          <span role="img" aria-label={`${fruit.name}`}>
                            {`${fruit.value}`}
                          </span>{" "}
                          <span data-user-value>{`${
                            fruit.name.charAt(0).toUpperCase() +
                            fruit.name.slice(1)
                          }`}</span>
                        </ComboboxOption>
                      );
                    })}
                </ComboboxList>
              </ComboboxPopover>
            </Combobox>
            <span className="text-danger d-inline-block">
              {meta.error && meta.touched && meta.error}
            </span>
            <span className="text-success d-inline-block">
              {field.value.length} fruits
            </span>
          </div>
        );
      }}
    </Field>
  );
}
