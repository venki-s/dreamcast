import React from "react";
import Icon from "@mdi/react";
import { mdiShieldHomeOutline } from "@mdi/js";

export default function HomeIcon() {
  return (
    <Icon
      path={mdiShieldHomeOutline}
      title="User Profile"
      size={2}
      color="#2a6bf4"
    />
  );
}
