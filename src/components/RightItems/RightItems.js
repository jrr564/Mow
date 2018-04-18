import "./RightItems.css";
import React from "react";
import { Link } from "react-router-dom";
import { Icon} from "semantic-ui-react";

const RightItems = [
  { as: "a", content: "Account", key: "account", icon: "settings", href: '/CustomerAccount'},
  { as: "a", content: "Log Out", key: "log out", icon: "log out" }
];

export default RightItems;
