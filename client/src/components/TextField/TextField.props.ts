import React, { ComponentPropsWithoutRef } from "react";

export interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
