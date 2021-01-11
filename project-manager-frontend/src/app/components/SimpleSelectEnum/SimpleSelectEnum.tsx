import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import * as React from "react";
import { SimpleSelectEnumProps, HandlersProps } from "./types";
import { useHandlers } from "./useHandlers";
import { displayEnum } from "../../utils/enum";
import { useStyles } from "./style/simpleSelectEnumStyles";

export default function SimpleSelectEnum(props: SimpleSelectEnumProps) {
  const { data, placeholder, startValue } = props;
  const handler: HandlersProps = useHandlers(props);
  const classes = useStyles({} as any);

  return (
    <div className={classes.divSelect}>
      <FormControl>
        <NativeSelect
          required
          onChange={handler.handleChange}
          value={startValue}
        >
          {placeholder && (
            <option value={""} disabled>
              {placeholder}
            </option>
          )}

          {data.length > 0 && data.map((value: string, key: number) => (
            <option key={key} value={value}>
              {displayEnum(value)}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
