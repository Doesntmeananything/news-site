import React from "react";
import { StatefulSelect } from "baseui/select";

const options = {
  options: [
    { id: "United Arab Emirates", code: "ae" },
    { id: "Argentina", code: "ar" },
    { id: "Austria", code: "at" },
    { id: "Australia", code: "au" },
    { id: "Belgium", code: "be" },
    { id: "Bulgaria", code: "bg" },
    { id: "Brazil", code: "br" },
    { id: "Canada", code: "ca" },
    { id: "Switzerland", code: "ch" },
    { id: "China", code: "cn" },
    { id: "Colombia", code: "co" },
    { id: "Cuba", code: "cu" },
    { id: "Czechia", code: "cz" },
    { id: "Germany", code: "de" },
    { id: "Egypt", code: "eg" },
    { id: "France", code: "fr" },
    { id: "United Kingdom", code: "gb" },
    { id: "Greece", code: "gr" },
    { id: "Hong Kong", code: "hk" },
    { id: "Hungary", code: "hu" },
    { id: "Indonesia", code: "id" },
    { id: "Ireland", code: "ie" },
    { id: "Israel", code: "il" },
    { id: "India", code: "in" },
    { id: "Italy", code: "it" },
    { id: "Japan", code: "jp" },
    { id: "Korea", code: "kr" },
    { id: "Lithuania", code: "lt" },
    { id: "Latvia", code: "lv" },
    { id: "Morocco", code: "ma" },
    { id: "Mexico", code: "mx" },
    { id: "Malasia", code: "my" },
    { id: "Nigeria", code: "ng" },
    { id: "Netherlands", code: "nl" },
    { id: "Norway", code: "no" },
    { id: "New Zealand", code: "nz" },
    { id: "Philippines", code: "ph" },
    { id: "Poland", code: "pl" },
    { id: "Portugal", code: "pt" },
    { id: "Romania", code: "ro" },
    { id: "Serbia", code: "rs" },
    { id: "Russia", code: "ru" },
    { id: "Saudi Arabia", code: "sa" },
    { id: "Sweden", code: "se" },
    { id: "Singapore", code: "sg" },
    { id: "Slovenia", code: "si" },
    { id: "Slovakia", code: "sk" },
    { id: "Thailand", code: "th" },
    { id: "Turkey", code: "tr" },
    { id: "Taiwan", code: "tw" },
    { id: "Ukraine", code: "ua" },
    { id: "United States", code: "us" },
    { id: "Venezuela", code: "ve" },
    { id: "South Africa", code: "za" }
  ],
  labelKey: "id",
  valueKey: "code",
  placeholder: "Select your country",
  maxDropdownHeight: "200px",
  clearable: false
};

export default props => (
  <StatefulSelect
    overrides={{
      Listbox: {
        style: {
          zIndex: 200
        }
      }
    }}
    {...options}
    onChange={props.onChangeCountry}
  />
);
