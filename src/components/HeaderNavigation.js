import React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList
} from "baseui/header-navigation";
import CountryPicker from "./CountryPicker";
import CategoryPicker from "./CategoryPicker";

export default props => (
  <HeaderNavigation>
    <NavigationList align={ALIGN.left}>
      <NavigationItem style={{ width: "200px" }}>
        <CountryPicker onChangeCountry={props.onChangeCountry} />
      </NavigationItem>
    </NavigationList>
    <NavigationList align={ALIGN.left}>
      <NavigationItem style={{ width: "200px" }}>
        <CategoryPicker onChangeCategory={props.onChangeCategory} />
      </NavigationItem>
    </NavigationList>
  </HeaderNavigation>
);
