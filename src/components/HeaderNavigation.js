import React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList
} from "baseui/header-navigation";
import CountryPicker from "./CountryPicker";
import CategoryPicker from "./CategoryPicker";
import SearchBox from "./SearchBox";

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
    <NavigationList align={ALIGN.center} />
    <NavigationList align={ALIGN.center}>
      <NavigationItem style={{ width: "200px" }}>
        <SearchBox onChangeCategory={props.onChangeSearch} />
      </NavigationItem>
    </NavigationList>
  </HeaderNavigation>
);
