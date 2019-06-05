import React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList
} from "baseui/header-navigation";
import { Paragraph1 } from "baseui/typography";
import Media from "react-media";
import HeaderOptions from "./HeaderOptions";
import CountryPicker from "./CountryPicker";
import CategoryPicker from "./CategoryPicker";
import SearchBox from "./SearchBox";

export default props => (
  <HeaderNavigation
    overrides={{
      Root: {
        style: ({ $theme }) => ({
          boxShadow: $theme.lighting.shadow500
        })
      }
    }}
  >
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <HeaderOptions>
            <Paragraph1>Country:</Paragraph1>
            <CountryPicker onChangeCountry={props.onChangeCountry} />
            <Paragraph1>Category:</Paragraph1>
            <CategoryPicker onChangeCategory={props.onChangeCategory} />
          </HeaderOptions>
        ) : (
          <>
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
          </>
        )
      }
    </Media>
    <NavigationList align={ALIGN.center}>
      <NavigationItem style={{ width: "200px" }}>
        <SearchBox
          onChangeInput={props.onChangeInput}
          onSubmitSearch={props.onSubmitSearch}
        />
      </NavigationItem>
    </NavigationList>
  </HeaderNavigation>
);
