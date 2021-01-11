import {HandlersProps, StringSelectProps} from "./types";
import {useHandlers} from "./useHandlers";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import * as React from "react";

export default function StringSelect(props: StringSelectProps) {
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
          {data.map((value: string, key: number) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
