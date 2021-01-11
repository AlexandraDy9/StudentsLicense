import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import {SimpleSelectProps, HandlersProps} from "./types";
import {useHandlers} from "./useHandlers";

export default function SimpleSelect(props: SimpleSelectProps) {
  const {data, startValue} = props;
  const handler: HandlersProps = useHandlers(props);

  return (
    <div>
      <FormControl>
        <NativeSelect
          value={startValue}
          onChange={handler.handleChange}
          name="object"
          inputProps={{"aria-label": "object"}}
        >
          <option value="">Select</option>

          {data.map((value: any, key: number) => (
            <option key={key} value={value.title}>
              {value.title}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
